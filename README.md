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
CodeSentry-AI/
├── frontend/                  # Next.js application
│   ├── app/
│   │   ├── (auth)/login/      # Login page
│   │   ├── (auth)/signup/     # Signup page
│   │   └── dashboard/         # Authenticated app
│   │       ├── page.tsx               # Dashboard home
│   │       ├── repositories/          # Repo list + scan
│   │       ├── review/new/            # Snippet scanner
│   │       ├── review/scan/           # Live review / chat view
│   │       ├── history/               # Review history
│   │       ├── settings/              # Profile / GitHub / notifications
│   │       └── github/callback/       # OAuth callback handler
│   ├── components/
│   │   ├── dashboard/          # Sidebar, TopBar, widgets, cards
│   │   └── ui/                 # Shared UI primitives (shadcn-style)
│   └── context/AuthContext.tsx # Auth state, session handling
│
└── backend/                   # Express API
├── controllers/            # Route handlers (auth, users, github, reviews)
├── models/                 # Mongoose schemas (User, Review)
├── routes/                 # Route definitions
├── services/                # AI service, usage/rate-limit service
├── middleware/              # Auth guard, rate limiters, error handling
├── validators/               # Request validation
└── seed/                     # Database seed script
text🚀 Getting Started
Prerequisites

* Node.js 18+

* A MongoDB instance (local or MongoDB Atlas)

* A GitHub OAuth App (for login + repo access)

* An OpenAI-compatible API key (for the AI review engine)

1. Clone the repo

```bash
git clone https://github.com/vikashsharma0707/Nextjs-CodeSentry-AI-Project.git
cd Nextjs-CodeSentry-AI-Project

Backend setup

Bashcd backend
npm install
cp .env.example .env
Fill in .env:
envNEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_APP_URL=http://localhost:3000

GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret

OPENAI_API_KEY=your_openai_api_key

JWT_SECRET=your_random_jwt_secret
Run the backend:
Bashnpm run dev          # start with nodemon
npm run seed         # (optional) seed sample data

Frontend setup

Bashcd ../frontend
npm install
cp .env.example .env
Fill in .env:
envNEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_oauth_client_id
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
Run the frontend:
Bashnpm run dev
Visit http://localhost:3000 🎉
4. GitHub OAuth App callback
In your GitHub OAuth App settings, set the callback URL to:
texthttp://localhost:3000/dashboard/github/callback
(update this to your production domain after deploying)
📡 API Reference
Base URL: ${NEXT_PUBLIC_STRAPI_API_URL}/api
Method Endpoint Description POST /auth/local/register Register with email/password POST /auth/local Login with email/password POST /auth/github Login/register via GitHub POST /auth/refresh Refresh access token POST /auth/logout Log out POST /auth/forgot-password Request password reset POST /auth/reset-password Reset password with token POST /auth/verify-email Verify email with token GET /users/me Get current user profile PUT /users/me/notifications Update notification preferences POST /users/avatar Upload profile avatar PUT /users/:id Update user profile GET /github/repos List connected GitHub repositories POST /github/connect Connect a GitHub account DELETE /github/disconnect Disconnect GitHub GET /github/profile-analysis AI-generated developer profile analysis GET /reviews List all reviews (paginated) GET /reviews/:id Get a single review + chat history GET /review/analyze-stream Start a streaming AI repo review (SSE) POST /review/scan-snippet Scan a raw code snippet POST /review/chat Continue chatting about a review POST /review/apply-fixes Apply AI-suggested fixes as a PR GET /review/rate-limits Current AI usage / rate-limit stats
Full Swagger docs are available under backend/docs.
🌐 Deployment

Frontend → Vercel (set Root Directory to frontend, add the same env vars as above)
Backend → Render / Railway (any Node host works)

After deploying, remember to:

Update the GitHub OAuth App's callback URL to your production domain
Update backend CORS config to allow your production frontend origin
Point NEXT_PUBLIC_STRAPI_API_URL at your deployed backend URL

🗺️ Roadmap

 Repository-level details page (health trends, issue history over time)
 Team / organization accounts
 Billing & subscription tiers
 Slack/Discord notifications for critical findings

📄 License
This project is available under the MIT License.
👤 Author
Vikash Sharma (Jay) — Full Stack Developer (MERN) & Agentic AI Engineer Portfolio: mern-ai-portfolio.vercel.app GitHub: @vikashsharma0707
