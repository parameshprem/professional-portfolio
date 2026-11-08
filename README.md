# Parameshwaran D — Premium Personal Portfolio Website

> **Full-Stack Software Engineer | Backend Specialist | ERP & SaaS Developer**  
> *"Building Scalable Systems. Engineering Digital Experiences."*

An award-quality, dark-themed personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Engineered to highlight enterprise ERP, multi-tenant SaaS architecture, and backend engineering capabilities.

---

## ⚡ Key Highlights & Architecture

- **Dark-First Modern UI**: Deep slate `#080B12` and `#101522` background with electric indigo (`#6366F1`) and cyan (`#38BDF8`) accents.
- **Interactive Multi-Tenant Architecture Visualization**: Live SVG component depicting multi-tenant SaaS isolation, JWT authentication, tenant resolution, API gateway, business logic, repository layer, and PostgreSQL database nodes with interactive hover inspection.
- **Terminal & Code Editor Simulation**: Realistic code editor typing effect and animated terminal status monitor.
- **Modular Project Case Studies**: Interactive case studies with dedicated SVG architectural illustrations for Multi-Tenant SaaS, Domain ERPs, API Integration Networks, and Payment Processing Pipelines (with Razorpay support).
- **Interactive Tech Ecosystem**: 6 categorized technology grids (Languages, Backend, Frontend, Databases, API Integrations, Dev Tools) with category filtering and interactive cards.
- **Vertical Experience Timeline**: Documenting professional journey at Elysium Groups of Companies with comprehensive responsibilities and technology badges.
- **Structured Development Workflow**: 6-step lifecycle (Discover → Architect → Develop → Integrate → Test & Debug → Deliver & Maintain) with horizontal desktop layout and responsive vertical timeline for mobile devices.
- **Client-Validated Contact Form**: Built with strict validation rules and authentic `mailto:` fallback — zero fake submission toasts.
- **Centralized Data Layer**: Every detail (personal info, availability, skills, projects, contact) is maintained in `src/data/personal.ts` and related files for instant customization.

---

## 📁 Project Structure

```
D:/My_Protfolio/
├── public/
│   ├── favicon.svg          # Custom SVG monogram favicon
│   └── resume.pdf           # (Place your actual resume PDF here)
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── Animations/      # Custom cursor and scroll progress
│   │   ├── Footer/          # Minimalist footer with back-to-top & socials
│   │   ├── Icons/           # Custom SVG social icons (LinkedIn, GitHub)
│   │   └── Navbar/          # Floating glassmorphic navbar with mobile menu
│   ├── data/
│   │   ├── education.ts     # Academic background details (Sethu Inst. of Tech)
│   │   ├── experience.ts    # Professional experience (Elysium Groups)
│   │   ├── personal.ts      # CENTRAL CONFIG: Name, title, contacts, availability
│   │   ├── projects.ts      # 4 enterprise case studies with metadata
│   │   ├── skills.ts        # 6 categorized skill groupings
│   │   └── workflow.ts      # 6 engineering development phases
│   ├── sections/
│   │   ├── Hero/            # Hero with code editor, terminal, role typewriter
│   │   ├── About/           # Professional positioning & 3 domain cards
│   │   ├── Skills/          # Category filterable technology matrix
│   │   ├── Experience/      # Vertical work history timeline
│   │   ├── Projects/        # Architectural case study showcase
│   │   ├── Expertise/       # Interactive SaaS architecture diagram
│   │   ├── Workflow/        # Engineering lifecycle stages
│   │   ├── Education/       # Degree & academic card
│   │   └── Contact/         # Contact details & validated form
│   ├── styles/
│   │   └── globals.css      # Design tokens, glassmorphism, animations
│   ├── App.tsx              # Root component
│   └── main.tsx             # React DOM entry
├── index.html               # Semantic HTML with complete SEO meta tags
├── package.json             # Project dependencies & scripts
├── tailwind.config.js       # Tailwind CSS theme extension
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite bundler with chunk splitting
```

---

## 🛠️ Development & Commands

### 1. Run Development Server
```bash
npm run dev
```
The application will start at `http://localhost:5173/`.

### 2. Typecheck & Build for Production
```bash
npm run build
```
Generates an optimized, minified production bundle in `/dist` with zero TypeScript errors.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize Personal Details

All personal information is managed in `src/data/personal.ts`:
- **Change Name or Title**: Edit `name`, `shortName`, `title`, or `subtitle`.
- **Toggle Availability Badge**: Set `isAvailable: true` or `false`.
- **Update GitHub URL**: Replace `YOUR_GITHUB_USERNAME` in `github` and `githubDisplay`.
- **Resume File**: Place your `resume.pdf` in the `public/` folder. It is already linked to `/resume.pdf`.

---

## 🚀 Deployment Instructions

The project produces standard static HTML/JS/CSS assets that can be deployed to any modern host:
- **Vercel**: Run `npx vercel` or link your GitHub repository.
- **Netlify**: Drag and drop the `dist/` directory or link Git.
- **GitHub Pages**: Deploy the `dist/` folder using `gh-pages`.
