# BunoBagera Backend

Production-ready Node.js/Express/MongoDB backend for **BunoBagera**, an AI-powered
GitHub code review platform. Built to work with the uploaded Next.js frontend
**without any frontend code changes** — routes, request/response shapes, and
auth flow mirror exactly what `context/AuthContext.tsx` and the dashboard pages
already call (Strapi-style `/api/auth/local`, `/api/users/me`, `{ data, meta }`
list responses, etc.).

## Tech Stack

Express · MongoDB/Mongoose · JWT + bcrypt · Multer + Cloudinary · Nodemailer ·
Express Validator · Helmet · CORS · Morgan · Compression · node-cron ·
Octokit (GitHub API) · OpenRouter (LLM provider) · Swagger · Postman

## Quick Start

```bash
cd backend
npm install
cp .env.example .env   # fill in your real secrets — see below
npm run seed            # optional: creates demo@bunobagera.ai / password123 with sample reviews
npm run dev
```

Server starts on `http://localhost:1337`. Point the frontend's
`NEXT_PUBLIC_STRAPI_API_URL` (or equivalent) env var at this URL.

Swagger docs: `http://localhost:1337/api-docs`
Postman collection: `docs/BunoBagera.postman_collection.json`

## Required environment variables

See `.env.example` for the full list. You must supply real values for:

| Variable | Where to get it |
|---|---|
| `MONGO_URI` | Your MongoDB connection string (local or Atlas) |
| `JWT_SECRET` / `JWT_REFRESH_SECRET` | Any long random strings |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | [github.com/settings/developers](https://github.com/settings/developers) — must match the frontend's OAuth app, with callback URL `GITHUB_REDIRECT_URI` |
| `OPENROUTER_API_KEY` | [openrouter.ai](https://openrouter.ai/keys) — powers every AI feature (code review, chat, profile analysis) |
| `CLOUDINARY_*` | [cloudinary.com](https://cloudinary.com/console) — only needed for avatar uploads |
| `SMTP_*` | Any SMTP provider — only needed for password reset / verification / weekly digest emails. If left blank, emails are logged to the console instead of sent (fine for local dev) |

## Architecture (MVC)

```
backend/
├── config/        # env, db, cloudinary, swagger
├── controllers/    # request handlers
├── middleware/     # auth, error handling, validation, rate limiting, upload
├── models/         # Mongoose schemas
├── routes/         # Express routers (with Swagger JSDoc annotations)
├── services/       # GitHub (Octokit), AI (OpenRouter), email, usage tracking
├── utils/          # logger, ApiError, asyncHandler, JWT, pagination, SSE
├── validators/      # express-validator chains
├── cron/           # scheduled jobs
├── seed/           # demo data seeder
├── sockets/        # (unused — frontend uses SSE, not Socket.IO; see sockets/README.md)
└── uploads/         # local scratch dir for multer before Cloudinary upload
```

## API surface (mirrors the frontend exactly)

### Auth — `/api/auth`
| Method | Path | Notes |
|---|---|---|
| POST | `/local/register` | `{ username, email, password }` → `{ jwt, user }` |
| POST | `/local` | `{ identifier, password }` → `{ jwt, user }` |
| POST | `/github` | `{ code }` → `{ jwt, user }` (login **or** signup) |
| POST | `/refresh` | `{ refreshToken }` → new `jwt` (rotates refresh token) |
| POST | `/logout` | Invalidates the given refresh token |
| POST | `/forgot-password` | `{ email }` |
| POST | `/reset-password` | `{ token, password }` |
| POST | `/verify-email` | `{ token }` |

### Users — `/api/users`
| Method | Path | Notes |
|---|---|---|
| GET | `/me` | Returns exactly the shape `AuthContext.mapStrapiUser()` expects |
| PUT | `/:id` | Update username/email |
| PUT | `/me/notifications` | Update email/PR/digest preferences |
| POST | `/avatar` | `multipart/form-data`, field `avatar` → uploads to Cloudinary |
| DELETE | `/:id` | Delete own account |
| GET | `/` | Admin-only paginated user list |

### GitHub — `/api/github`
| Method | Path | Notes |
|---|---|---|
| POST | `/connect` | Link GitHub to an already-logged-in account (Settings page) |
| DELETE | `/disconnect` | Unlink |
| GET | `/repos` | Live list from GitHub API (id, name, full_name, private, language, stars, updated_at) |
| GET | `/profile-analysis?force=true` | AI-generated developer persona; cached 24h unless `force=true` |

### Reviews — `/api/reviews` (history) & `/api/review` (AI actions)
| Method | Path | Notes |
|---|---|---|
| GET | `/api/reviews?sort=createdAt:desc` | Paginated history, `{ data, meta }` |
| GET | `/api/reviews/:id` | Single review with full chat history |
| GET | `/api/review/analyze-stream?owner=&repo=&token=&reviewType=` | **SSE** — `progress` → `chunk` (per file batch) → `complete`/`error`. Token passed as query param because `EventSource` can't set headers. |
| POST | `/api/review/chat` | `{ reviewId, message }` — continues the conversation |
| POST | `/api/review/apply-fixes` | `{ reviewId }` — AI rewrites the reviewed files and opens a real GitHub PR |
| GET | `/api/review/rate-limits` | Real RPM/TPM/RPD usage vs. configured limits + history for the chart widget |
| POST | `/api/review/scan-snippet` | `{ code, language, reviewType }` — powers the paste-code "New Review" screen |

### System
| Method | Path |
|---|---|
| GET | `/api/health` |

## How the AI review pipeline actually works

1. `GET /api/review/analyze-stream` opens an SSE connection.
2. The server fetches the repo's default branch + git tree via Octokit, filters to real code files (skips `node_modules`, `dist`, `.next`, etc.), caps at 15 files.
3. Files are grouped into batches of 3. For each batch, actual file content is fetched from GitHub and sent to the configured OpenRouter model with a senior-engineer review prompt.
4. Each batch's markdown result is emitted as a `chunk` SSE event as it completes (this is what fills the frontend's `streamingChunks` array in real time).
5. On completion, the full review is persisted to MongoDB (`Review` model) and a `complete` event fires with the `reviewId`.
6. `apply-fixes` re-fetches the same files, asks the model to return corrected full file contents as JSON, creates a new branch, commits each file via the GitHub Contents API, and opens a real pull request — the returned `prUrl` is a live GitHub PR link.
7. Every AI call is logged to `UsageStat` (7-day TTL) so `/api/review/rate-limits` reflects real usage, not fake numbers.

## Auth model

- Access tokens (JWT, short-lived, default 7d) are sent as `Bearer` tokens.
- Refresh tokens (30d) are stored server-side (last 5, for multi-device) and rotated on every `/refresh` call.
- GitHub OAuth (`/api/auth/github`) both logs in an existing GitHub-linked user and silently creates an account on first use — matching the frontend's single "Continue with GitHub" button that serves both login and signup pages.

## Notes on things the frontend doesn't call yet but the stack requested

- **Avatar upload** (`POST /api/users/avatar`): the Settings page's "Upload Photo" button doesn't currently have an `onClick` wired up in the frontend, but the endpoint is fully implemented (Cloudinary) so wiring it up frontend-side is a one-line change.
- **Weekly digest emails** and **stuck-review cleanup** run as cron jobs (`cron/`) since the task asked for cron support wherever useful — not exposed as frontend features, just backend housekeeping.
- **Socket.IO** was in the requested stack, but the frontend uses `EventSource`/SSE for its one real-time feature (streaming review progress), which is what's implemented. See `sockets/README.md` if you want to add Socket.IO for something bidirectional later (e.g. live team presence).

## Security notes for production

- Set strong, unique `JWT_SECRET`/`JWT_REFRESH_SECRET`.
- Put this API behind HTTPS; SSE + cookies both assume a secure context in production.
- Consider encrypting `githubAccessToken` at rest (e.g. via `mongoose-encryption` or field-level KMS encryption) before going to production — it's currently stored as a plain (but `select: false`) field.
- Tighten `RATE_LIMIT_*` and `AI_*_LIMIT` values to your actual OpenRouter plan limits.
