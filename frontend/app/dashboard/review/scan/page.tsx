"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  IconLoader2,
  IconBrandGithub,
  IconAlertTriangle,
  IconSend,
  IconCheck,
  IconExternalLink,
  IconCircleCheck,
  IconCircleDashed,
  IconCircleX,
} from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface ProgressStep {
  step: string;
  message: string;
  batchIndex?: number;
  totalBatches?: number;
  status: "pending" | "active" | "done" | "error";
}

interface ReviewChunk {
  batchIndex: number;
  totalBatches: number;
  content: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Step Icon component
// ─────────────────────────────────────────────────────────────────────────────

function StepIcon({ status }: { status: ProgressStep["status"] }) {
  if (status === "done")
    return <IconCircleCheck className="w-4 h-4 text-green-400 shrink-0" />;
  if (status === "error")
    return <IconCircleX className="w-4 h-4 text-red-400 shrink-0" />;
  if (status === "active")
    return <IconLoader2 className="w-4 h-4 text-violet-400 animate-spin shrink-0" />;
  return <IconCircleDashed className="w-4 h-4 text-zinc-600 shrink-0" />;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main scan content
// ─────────────────────────────────────────────────────────────────────────────

function ScanContent() {
  const searchParams = useSearchParams();
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");
  const queryReviewId = searchParams.get("reviewId");

  // ── SSE streaming state ──────────────────────────────────────────────────
  const [streamingChunks, setStreamingChunks] = useState<ReviewChunk[]>([]);
  const [progressSteps, setProgressSteps] = useState<ProgressStep[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamComplete, setStreamComplete] = useState(false);

  // ── History / chat state ─────────────────────────────────────────────────
  const [reviewId, setReviewId] = useState<number | null>(
    queryReviewId ? parseInt(queryReviewId) : null
  );
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [chatLoading, setChatLoading] = useState(false);
  const [fixing, setFixing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [prUrl, setPrUrl] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sseRef = useRef<EventSource | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [streamingChunks, progressSteps, messages, chatLoading, fixing]);

  // ── Get auth token ────────────────────────────────────────────────────────
  const getToken = () => {
    const match = document.cookie.match(/(^| )auth-token=([^;]+)/);
    return match ? match[2] : null;
  };

  const API_URL =
    typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
      : "http://localhost:1337";

  // ─────────────────────────────────────────────────────────────────────────
  // Effect: decide whether to stream (new analysis) or fetch existing review
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if ((!owner || !repo) && !queryReviewId) return;

    // Reset states for a fresh request
    setStreamingChunks([]);
    setProgressSteps([]);
    setError(null);

    if (queryReviewId) {
      // ── Viewing an existing review from history ──────────────────────────
      fetchExistingReview(parseInt(queryReviewId));
    } else if (owner && repo) {
      // ── Start a new SSE streaming analysis ──────────────────────────────
      startSSEAnalysis(owner, repo);
    }

    return () => {
      if (sseRef.current) {
        sseRef.current.close();
        sseRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [owner, repo, queryReviewId]);

  // ─────────────────────────────────────────────────────────────────────────
  // Fetch existing review (history view — backward compatible)
  // ─────────────────────────────────────────────────────────────────────────
  async function fetchExistingReview(id: number) {
    try {
      const token = getToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to fetch review");

      setReviewId(data.data.id);
      setMessages(data.data.messages || []);
      if (data.data.prUrl) setPrUrl(data.data.prUrl);

      if (data.data.status === "failed") {
        const assistantMsgs = (data.data.messages || []).filter(
          (m: any) => m.role === "assistant"
        );
        setError(
          assistantMsgs.length > 0
            ? assistantMsgs[assistantMsgs.length - 1].content
            : "Analysis failed"
        );
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      setStreamComplete(true);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Start SSE analysis — connects to /api/review/analyze-stream
  // ─────────────────────────────────────────────────────────────────────────
  function startSSEAnalysis(ownerVal: string, repoVal: string) {
    const token = getToken();
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    setIsStreaming(true);
    setLoading(true);

    // We pass the JWT as a query param because EventSource doesn't support
    // custom headers. The Strapi route reads ctx.state.user from the JWT.
    const url = `${API_URL}/api/review/analyze-stream?owner=${encodeURIComponent(
      ownerVal
    )}&repo=${encodeURIComponent(repoVal)}&token=${encodeURIComponent(token)}`;

    const es = new EventSource(url);
    sseRef.current = es;

    // Progress events — update the step timeline
    es.addEventListener("progress", (e) => {
      const data = JSON.parse(e.data);
      setProgressSteps((prev) => {
        const existing = prev.findIndex((s) => s.step === data.step);
        const statusVal = data.status || "active";
        const newStep: ProgressStep = { ...data, status: statusVal };
        if (existing >= 0) {
          const updated = [...prev];
          // Only mark the previous active step as done if the new step is not an error notification
          if (statusVal !== "error") {
            const lastActiveIdx = updated.map(s => s.status).lastIndexOf("active");
            if (lastActiveIdx >= 0) {
              updated[lastActiveIdx] = { ...updated[lastActiveIdx], status: "done" };
            }
          }
          updated[existing] = newStep;
          return updated;
        }
        const updated = prev.map((s) =>
          s.status === "active" && statusVal !== "error" ? { ...s, status: "done" as const } : s
        );
        return [...updated, newStep];
      });
    });

    // Chunk events — append review content as it arrives
    es.addEventListener("chunk", (e) => {
      const data = JSON.parse(e.data) as ReviewChunk;
      setStreamingChunks((prev) => [...prev, data]);
      // Mark any active step as done when we get content
      setProgressSteps((prev) =>
        prev.map((s) =>
          s.status === "active" ? { ...s, status: "done" as const } : s
        )
      );
    });

    // Complete event — save reviewId and close SSE
    es.addEventListener("complete", (e) => {
      const data = JSON.parse(e.data);
      setReviewId(data.reviewId);
      setProgressSteps((prev) =>
        prev.map((s) => ({ ...s, status: "done" as const }))
      );
      setIsStreaming(false);
      setStreamComplete(true);
      setLoading(false);
      es.close();
    });

    // Error event — from the server (our custom error SSE event)
    es.addEventListener("error", (e: any) => {
      // This fires for both SSE errors and connection errors
      let msg = "Analysis failed";
      try {
        const data = JSON.parse(e.data);
        msg = data.message || msg;
      } catch {
        // connection-level error
        if (e.target?.readyState === EventSource.CLOSED) {
          msg = "Connection to analysis server was lost. Please try again.";
        }
      }
      setError(msg);
      setProgressSteps((prev) =>
        prev.map((s) =>
          s.status === "active" ? { ...s, status: "error" as const } : s
        )
      );
      setIsStreaming(false);
      setLoading(false);
      es.close();
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Chat
  // ─────────────────────────────────────────────────────────────────────────
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || !reviewId || chatLoading || fixing) return;

    const userMsg = inputValue;
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setChatLoading(true);

    try {
      const token = getToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/review/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reviewId, message: userMsg }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to send message");

      setMessages(data.messages || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setChatLoading(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Apply fixes
  // ─────────────────────────────────────────────────────────────────────────
  const handleApplyFixes = async () => {
    if (!reviewId || chatLoading || fixing) return;
    setFixing(true);

    try {
      const token = getToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/review/apply-fixes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reviewId }),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error?.message || data.message || "Failed to apply fixes");

      setPrUrl(data.prUrl);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setFixing(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Guard: missing params
  // ─────────────────────────────────────────────────────────────────────────
  if (!owner && !repo && !queryReviewId) {
    return (
      <div className="text-white p-8">Missing repository or review information.</div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Render: combine streaming chunks + history messages for display
  // ─────────────────────────────────────────────────────────────────────────

  // For history view, filter out system messages
  const historyDisplay = messages.filter((m) => m.role !== "system");

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-6rem)] flex flex-col pt-4 pb-6">
      {/* ── Header ── */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
            <IconBrandGithub className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{repo || "Code Review"}</h1>
            <p className="text-zinc-400">{owner ? `Owner: ${owner}` : "Review History"}</p>
          </div>
        </div>

        {reviewId && streamComplete && !prUrl && (
          <button
            onClick={handleApplyFixes}
            disabled={fixing || chatLoading}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {fixing ? (
              <><IconLoader2 className="w-5 h-5 animate-spin" /> Applying Fixes...</>
            ) : (
              <><IconCheck className="w-5 h-5" /> Apply Fixes to Repo</>
            )}
          </button>
        )}
      </div>

      {/* ── PR success banner ── */}
      {prUrl && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-green-400 font-semibold flex items-center gap-2">
              <IconCheck className="w-5 h-5" /> Pull Request Created Successfully!
            </h3>
            <p className="text-sm text-green-500/80 mt-1">
              The AI has applied the changes and opened a PR on your GitHub repository.
            </p>
          </div>
          <a
            href={prUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            View Pull Request <IconExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* ── Error banner ── */}
      {error && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg shrink-0 flex items-center gap-3">
          <IconAlertTriangle className="w-5 h-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* ── Main scrollable area ── */}
      <div className="flex-1 overflow-y-auto min-h-0 mt-6 space-y-6 pr-2 custom-scrollbar">

        {/* ── SSE: Progress timeline (shown during and after streaming) ── */}
        {progressSteps.length > 0 && (
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 space-y-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              Analysis Progress
            </p>
            {progressSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <StepIcon status={step.status} />
                <span
                  className={`text-sm leading-tight ${
                    step.status === "active"
                      ? "text-white font-medium"
                      : step.status === "done"
                      ? "text-zinc-400"
                      : step.status === "error"
                      ? "text-red-400"
                      : "text-zinc-600"
                  }`}
                >
                  {step.message}
                </span>
              </div>
            ))}
            {isStreaming && (
              <div className="flex items-center gap-2 pt-1">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
                <span className="text-xs text-zinc-500">Streaming AI analysis...</span>
              </div>
            )}
          </div>
        )}

        {/* ── SSE: Streaming review chunks (appear in real-time) ── */}
        {streamingChunks.length > 0 && (
          <div className="space-y-0">
            {streamingChunks.map((chunk, idx) => (
              <div
                key={idx}
                className={`flex gap-4 ${
                  idx === 0 ? "" : "border-t border-white/5 pt-4 mt-4"
                }`}
                style={{
                  animation: "fadeInUp 0.4s ease both",
                  animationDelay: `${idx * 0.05}s`,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                  <span className="text-sm font-bold text-white">AI</span>
                </div>
                <div className="flex-1 min-w-0 p-5 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 text-zinc-300 prose prose-invert prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-white/10 max-w-none">
                  {chunk.totalBatches > 1 && (
                    <p className="text-xs text-zinc-500 font-medium mb-3 not-prose">
                      ─── Files {chunk.batchIndex * 3 + 1}–{Math.min((chunk.batchIndex + 1) * 3, chunk.totalBatches * 3)} of batch {chunk.batchIndex + 1}/{chunk.totalBatches}
                    </p>
                  )}
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {chunk.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Streaming cursor — shows while AI is still generating */}
            {isStreaming && streamingChunks.length > 0 && (
              <div className="flex gap-4 border-t border-white/5 pt-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-sm font-bold text-white">AI</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 px-6 flex items-center gap-3">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                  <span className="text-sm text-zinc-400 font-medium">Analyzing next batch...</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Loading spinner — only shown while waiting for first chunk ── */}
        {loading && progressSteps.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <IconLoader2 className="w-10 h-10 animate-spin text-violet-500 mb-4" />
            <p className="text-zinc-400 animate-pulse font-medium text-center max-w-md">
              Connecting to analysis server...
            </p>
          </div>
        )}

        {/* ── History: chat messages (for existing reviews) ── */}
        {historyDisplay.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 ${
                msg.role === "user" ? "bg-violet-600" : "bg-zinc-800"
              }`}
            >
              <span className="text-sm font-bold text-white">
                {msg.role === "user" ? "U" : "AI"}
              </span>
            </div>
            <div
              className={`flex-1 max-w-[85%] p-5 rounded-2xl ${
                msg.role === "user"
                  ? "bg-violet-500/10 border border-violet-500/20 rounded-tr-none text-violet-100"
                  : "bg-white/5 border border-white/10 rounded-tl-none text-zinc-300 prose prose-invert prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-white/10"
              }`}
            >
              {msg.role === "user" ? (
                <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
              ) : (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
              )}
            </div>
          </div>
        ))}

        {/* ── Chat loading bubble ── */}
        {(chatLoading || fixing) && (
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/10">
              <span className="text-sm font-bold text-white">AI</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 px-6 flex items-center gap-3">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
              <span className="text-sm text-zinc-400 font-medium">
                {fixing ? "Generating patch and contacting GitHub API..." : "Thinking..."}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ── Input Area — only shown after analysis is complete ── */}
      {streamComplete && !isStreaming && reviewId && (
        <div className="mt-4 pt-4 border-t border-white/10 shrink-0">
          <form onSubmit={handleSendMessage} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={chatLoading || fixing}
              placeholder="Discuss the code review, ask for modifications, or request specific fixes..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || chatLoading || fixing}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IconSend className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function ScanPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <IconLoader2 className="w-8 h-8 animate-spin text-violet-500" />
        </div>
      }
    >
      <ScanContent />
    </Suspense>
  );
}
