# Agent Friendly Network (AFN) — Official Website

Official website and ecosystem portal for the Agent Friendly Network (AFN) open standards initiative.

- **Production Domain**: `https://agentfriendly.network`
- **GitHub Organization**: `https://github.com/Agent-Friendly-Network`

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime & Package Manager**: Bun (1.3.x)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Directory Structure

```
website/
├── app/
│   ├── page.tsx            # Home: Hero, Vision, 4 Pillars, 5 Principles, Featured
│   ├── standards/
│   │   └── page.tsx        # RFC Specifications & Working Groups
│   ├── projects/
│   │   └── page.tsx        # Ecosystem Directory (CLI, MCP, Agent-Native)
│   ├── agent-native/
│   │   └── page.tsx        # Agent-Native Paradigm & Moltbook Showcase
│   ├── members/
│   │   └── page.tsx        # Members Directory & Governance Structure
│   ├── join/
│   │   └── page.tsx        # Join Tracks & GitHub Issue Submission Template
│   ├── globals.css         # Institutional theme and grid styling
│   └── layout.tsx          # Root Layout with Header, Footer, and SEO Metadata
├── components/
│   ├── header.tsx          # Navigation header with mobile support
│   ├── footer.tsx          # Institutional standards footer
│   ├── architecture-diagram.tsx # 4-pillar architectural topology
│   └── status-badge.tsx    # RFC & project lifecycle badges
├── content/
│   ├── standards.ts        # Typed RFC specification catalog
│   ├── projects.ts         # Typed ecosystem projects
│   ├── members.ts          # Typed consortium members
│   └── principles.ts       # Typed core principles
└── lib/
    └── utils.ts            # Utility functions
```

---

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Run Local Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production

```bash
bun run build
```

---

## License

Apache 2.0 / CC-BY-4.0 &bull; Agent Friendly Network Open Standards Consortium.
