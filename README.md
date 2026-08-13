🛡️ CodeSentry-AI — AI-Powered Code Review Platform
CodeSentry-AI is a full-stack SaaS application that connects to your GitHub repositories and uses AI to perform deep, contextual code reviews — catching security vulnerabilities, bugs, performance issues, and best-practice violations before they reach production. It also supports scanning raw code snippets, chatting with the AI about its findings, and auto-applying fixes as a real GitHub pull request.
 
✨ Features
Repository Reviews

* Connect a GitHub account via OAuth and browse all your repositories

* Kick off a full AI code review on any repo, streamed live via Server-Sent Events (SSE) — see the AI's findings appear in real time, batch by batch

* View a progress timeline while the AI works (fetching files → analyzing → summarizing)

Snippet Scanner

* Paste any code snippet (or upload a file) and get an instant AI review

* Configure the review depth (Full / Security / Style / Performance) and specific focus areas (security, performance, code quality, best practices, documentation)

* Issues are categorized by severity (Critical / High / Medium / Low) with line-level detail

AI Chat & Auto-Fix

* Discuss any review's findings with the AI in a chat interface

* One click to have the AI generate and apply fixes as a real pull request on the connected GitHub repo

Dashboard & Analytics

* At-a-glance stats: total reviews, issues found, fixes applied, GitHub connection status

* Live API rate-limit / usage widget (RPM, TPM, RPD) with historical usage chart

* Recent reviews list and full searchable/filterable review history

Account & Settings

* Email/password auth with JWT, plus GitHub OAuth login

* Profile editing, avatar upload, notification preferences

* GitHub connect/disconnect from Settings

🧱 Tech Stack
Frontend

* Next.js 14 (App Router) + TypeScript

* Tailwind CSS for styling

* Framer Motion for animation

* Recharts for usage charts

* react-markdown for rendering AI review output

Backend

* Node.js + Express

* MongoDB + Mongoose

* JWT-based authentication

* GitHub OAuth (repo + user scopes)

* Server-Sent Events for streaming AI responses

* Swagger / OpenAPI docs

📂 Project Structure
