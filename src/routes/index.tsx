import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Blocks,
  Check,
  ChevronRight,
  CircleCheck,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Globe2,
  Layers3,
  LayoutDashboard,
  Leaf,
  LockKeyhole,
  MonitorSmartphone,
  PackageOpen,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TimerReset,
  UserRoundCheck,
  UsersRound,
  WalletCards,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { LandingConcepts } from "../components/LandingConcepts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZHEP Digital Project — Proposal for Sanjay" },
      { name: "description", content: "A clear, interactive delivery plan for ZHEP’s website, web platform, and mobile apps." },
      { property: "og:title", content: "ZHEP Digital Project — Proposal for Sanjay" },
      { property: "og:description", content: "Explore what will be built, the delivery roadmap, and the next steps for ZHEP’s digital platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProposalDashboard,
});

type View = "overview" | "build" | "timeline" | "tech" | "next";
type Platform = "landing" | "web" | "android" | "ios";

const navItems: { id: View; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "build", label: "What We’re Building", icon: Blocks },
  { id: "timeline", label: "Timeline", icon: Waypoints },
  { id: "tech", label: "Tech Approach", icon: Code2 },
  { id: "next", label: "Next Steps", icon: Rocket },
];

const platforms: Record<Platform, { label: string; short: string; description: string; count: number; icon: LucideIcon }> = {
  landing: { label: "Landing Page", short: "Landing", description: "A clear, credible introduction to ZHEP’s wellness story.", count: 4, icon: Globe2 },
  web: { label: "Web Platform", short: "Web", description: "The complete online hub for customers, partners, and operations.", count: 7, icon: MonitorSmartphone },
  android: { label: "Android App", short: "Android", description: "The full ZHEP experience, accessible wherever customers go.", count: 4, icon: Smartphone },
  ios: { label: "iOS App", short: "iOS", description: "A polished iPhone experience with secure, effortless access.", count: 4, icon: Smartphone },
};

const featureSets: Record<Platform, { title: string; text: string; icon: LucideIcon }[]> = {
  landing: [
    { title: "Brand Story & Product Showcase", text: "Present ZHEP’s natural wellness philosophy and product range with clarity.", icon: Leaf },
    { title: "Health Awareness Content", text: "Make preventive care and balanced living easy to understand.", icon: Sparkles },
    { title: "Partnership Program Explainer", text: "Guide prospective partners through the opportunity in simple steps.", icon: UsersRound },
    { title: "Contact & Enquiry Forms", text: "Give visitors a direct, low-friction way to start a conversation.", icon: UserRoundCheck },
  ],
  web: [
    { title: "User Login & Registration", text: "A secure, welcoming entry point for every customer and partner.", icon: LockKeyhole },
    { title: "E-Wallet System", text: "A clear view of wallet activity and available account value.", icon: WalletCards },
    { title: "Product Catalog & Ordering", text: "Browse ZHEP products and place orders in a guided flow.", icon: PackageOpen },
    { title: "Secure Payment Gateway", text: "Complete purchases through a trusted, secure online payment flow.", icon: WalletCards },
    { title: "Referral Network Dashboard", text: "Understand network activity through simple, visual reporting.", icon: Waypoints },
    { title: "Club Tier & Bonus Tracker", text: "Track progress, milestones, and eligibility in one place.", icon: Target },
    { title: "Admin Panel", text: "Manage products, users, content, and operations from a central view.", icon: ShieldCheck },
  ],
  android: [
    { title: "Full Feature Parity with Web", text: "Core web platform capabilities available in the Android app.", icon: Layers3 },
    { title: "Push Notifications", text: "Timely updates for orders, announcements, and account activity.", icon: Bell },
    { title: "Biometric Login", text: "Quick, secure access using the device’s supported biometrics.", icon: Fingerprint },
    { title: "Offline Browsing", text: "Keep useful product and wellness content available with limited connection.", icon: Cloud },
  ],
  ios: [
    { title: "Full Feature Parity with Web", text: "Core web platform capabilities available in the iPhone app.", icon: Layers3 },
    { title: "Push Notifications", text: "Timely updates for orders, announcements, and account activity.", icon: Bell },
    { title: "Face ID Login", text: "Fast and secure account access designed for iPhone.", icon: Fingerprint },
    { title: "Native iOS Experience", text: "Polished interactions that feel familiar to Apple users.", icon: Smartphone },
  ],
};

const phases = [
  { title: "Discovery & Design", weeks: "2 weeks", items: ["Align on goals and user journeys", "Create the visual direction", "Approve the build blueprint"] },
  { title: "Landing Page Build", weeks: "2 weeks", items: ["Build the ZHEP brand experience", "Add wellness and product content", "Set up enquiry journeys"] },
  { title: "Web Platform Build", weeks: "3–4 weeks", items: ["Build customer and partner accounts", "Create ordering, wallet, and payment journeys", "Develop the operations dashboard"] },
  { title: "Mobile App Build", weeks: "5–6 weeks", items: ["Build Android and iOS together", "Add notifications and secure login", "Prepare store-ready releases"] },
  { title: "Testing & QA", weeks: "2 weeks", items: ["Test every key user journey", "Check devices and screen sizes", "Resolve launch-readiness issues"] },
  { title: "Launch", weeks: "1–2 weeks", items: ["Move the platform live", "Support app-store submission", "Monitor and stabilise release"] },
];

function ProposalDashboard() {
  const [view, setView] = useState<View>("overview");
  const [platform, setPlatform] = useState<Platform>("landing");
  const [transitionKey, setTransitionKey] = useState(0);

  const navigate = (next: View, selected?: Platform) => {
    if (selected) setPlatform(selected);
    setView(next);
    setTransitionKey((key) => key + 1);
  };

  return (
    <div className="h-dvh overflow-hidden bg-background text-foreground lg:grid lg:grid-cols-[248px_minmax(0,1fr)]">
      <aside className="hidden h-dvh flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 text-sidebar-foreground lg:flex">
        <BrandMark />
        <nav aria-label="Proposal sections" className="mt-12 space-y-1.5">
          {navItems.map((item) => <NavButton key={item.id} item={item} active={view === item.id} onClick={() => navigate(item.id)} />)}
        </nav>
        <div className="mt-auto border-t border-sidebar-border pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sidebar-muted">Prepared for</p>
          <p className="mt-2 font-display text-lg font-bold">Sanjay</p>
          <p className="mt-1 text-xs text-sidebar-muted">Private project proposal</p>
        </div>
      </aside>

      <div className="flex h-dvh min-w-0 flex-col">
        <header className="grid h-[72px] shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-surface-raised px-5 sm:px-8">
          <div className="flex min-w-0 items-center gap-3 lg:hidden"><BrandMark compact /></div>
          <div className="hidden min-w-0 lg:block">
            <p className="truncate text-sm font-semibold">ZHEP Digital Project <span className="font-normal text-muted-foreground">— Prepared for Sanjay</span></p>
          </div>
          <div className="min-w-0 text-right">
            <p className="truncate text-xs font-semibold sm:text-sm">Abhishek Maurya</p>
            <p className="hidden text-[11px] text-muted-foreground sm:block">Freelance CTO</p>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto px-5 pb-28 pt-6 sm:px-8 sm:pt-8 lg:pb-8">
          <div key={transitionKey} className="screen-enter mx-auto min-h-full max-w-[1180px]">
            {view === "overview" && <Overview onNavigate={navigate} />}
            {view === "build" && <BuildView platform={platform} setPlatform={setPlatform} />}
            {view === "timeline" && <Timeline />}
            {view === "tech" && <TechApproach />}
            {view === "next" && <NextSteps />}
          </div>
        </main>

        <nav aria-label="Proposal sections" className="fixed inset-x-0 bottom-0 z-30 grid h-[76px] grid-cols-5 border-t border-sidebar-border bg-sidebar px-1 pb-[env(safe-area-inset-bottom)] text-sidebar-muted lg:hidden">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => navigate(id)} aria-current={view === id ? "page" : undefined} className={`flex min-w-0 flex-col items-center justify-center gap-1 transition-colors ${view === id ? "text-sidebar-primary" : "hover:text-sidebar-foreground"}`}>
              <Icon size={19} strokeWidth={view === id ? 2.4 : 1.8} />
              <span className="max-w-full truncate px-0.5 text-[9px] font-semibold sm:text-[10px]">{label === "What We’re Building" ? "Build" : label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return <div className="flex min-w-0 items-center gap-3">
    <div className={`${compact ? "h-8 w-8" : "h-10 w-10"} grid shrink-0 place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground`}><Leaf size={compact ? 17 : 21} strokeWidth={2.4} /></div>
    <div className="min-w-0"><p className="font-display text-sm font-extrabold tracking-[0.08em]">ZHEP</p>{!compact && <p className="text-[10px] uppercase tracking-[0.14em] text-sidebar-muted">Digital project</p>}</div>
  </div>;
}

function NavButton({ item, active, onClick }: { item: (typeof navItems)[number]; active: boolean; onClick: () => void }) {
  const Icon = item.icon;
  return <button type="button" onClick={onClick} aria-current={active ? "page" : undefined} className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-semibold transition-all ${active ? "bg-sidebar-accent text-sidebar-foreground shadow-sm" : "text-sidebar-muted hover:translate-x-0.5 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`}>
    <Icon size={18} className={active ? "text-sidebar-primary" : ""} /><span>{item.label}</span>{active && <ChevronRight size={15} className="ml-auto text-sidebar-primary" />}
  </button>;
}

function ScreenIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mb-6 sm:mb-8">
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
    <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight">{title}</h1>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
  </div>;
}

function Overview({ onNavigate }: { onNavigate: (view: View, platform?: Platform) => void }) {
  return <section className="flex min-h-full flex-col">
    <ScreenIntro eyebrow="Project command center" title="Your Digital Platform, Mapped Out" description="A clear view of what we’ll build for ZHEP, how the pieces connect, and when each stage will be ready." />
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
      {(Object.entries(platforms) as [Platform, (typeof platforms)[Platform]][]).map(([id, item], index) => {
        const Icon = item.icon;
        return <button key={id} type="button" onClick={() => onNavigate("build", id)} className="group grid min-h-[152px] grid-cols-[auto_1fr_auto] items-start gap-4 rounded-lg border border-border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:min-h-[166px] sm:p-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><Icon size={22} /></span>
          <span className="min-w-0"><span className="font-display block text-lg font-bold">{item.label}</span><span className="mt-2 block text-sm leading-5 text-muted-foreground">{item.description}</span><span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-success"><CircleCheck size={14} /> {item.count} features</span></span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowRight size={15} /></span>
          <span className="sr-only">Open {index + 1} of 4</span>
        </button>;
      })}
    </div>
    <button type="button" onClick={() => onNavigate("timeline")} className="group mt-5 grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-border bg-card px-4 py-4 text-left shadow-sm transition-colors hover:border-primary/50 sm:px-6">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground"><TimerReset size={19} /></span>
      <span className="min-w-0"><span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Estimated timeline</span><span className="font-display block text-base font-bold sm:text-lg">14–17 weeks</span></span>
      <span className="flex items-center gap-1 text-xs font-bold text-accent-foreground sm:text-sm">View timeline <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
    </button>
  </section>;
}

function BuildView({ platform, setPlatform }: { platform: Platform; setPlatform: (platform: Platform) => void }) {
  const keys = Object.keys(platforms) as Platform[];
  const activeIndex = keys.indexOf(platform);
  return <section>
    <ScreenIntro eyebrow="Deliverables" title="What We’re Building" description="Four connected experiences, designed to make ZHEP easier to discover, use, and grow." />
    <div className="mb-5 flex items-center justify-between gap-4">
      <div className="flex gap-1.5" aria-label={`${activeIndex + 1} of 4 platforms`}>{keys.map((key) => <span key={key} className={`h-1.5 rounded-full transition-all ${key === platform ? "w-8 bg-primary" : "w-2 bg-border"}`} />)}</div>
      <span className="text-xs font-semibold text-muted-foreground">{activeIndex + 1} of 4 platforms</span>
    </div>
    <div role="tablist" aria-label="Platforms" className="mb-6 grid grid-cols-4 gap-1 rounded-lg border border-border bg-muted p-1">
      {keys.map((key) => <button role="tab" aria-selected={platform === key} type="button" key={key} onClick={() => setPlatform(key)} className={`rounded-md px-2 py-2.5 text-xs font-bold transition-all sm:text-sm ${platform === key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{platforms[key].short}</button>)}
    </div>
    <div key={platform} className="screen-enter grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {featureSets[platform].map(({ title, text, icon: Icon }) => <article key={title} className="group min-h-[144px] rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
        <div className="mb-4 flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-md bg-success-soft text-success"><Icon size={18} /></span><Check size={17} className="text-primary opacity-60 transition-opacity group-hover:opacity-100" /></div>
        <h2 className="font-display text-[15px] font-bold">{title}</h2><p className="mt-2 text-xs leading-5 text-muted-foreground transition-colors group-hover:text-foreground">{text}</p>
      </article>)}
    </div>
    {platform === "landing" && <LandingConcepts />}
  </section>;
}

function Timeline() {
  const [active, setActive] = useState(0);
  const phase = phases[active];
  if (!phase) return null;
  return <section>
    <div className="mb-5 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
      <ScreenIntro eyebrow="Delivery roadmap" title="From Blueprint to Launch" description="Select any station to see what happens there. Web and mobile move together to keep momentum high." />
      <div className="rounded-lg border border-primary/30 bg-accent px-5 py-4 sm:mb-8 sm:text-right"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent-foreground">Total estimated delivery</p><p className="font-display mt-1 text-xl font-extrabold">14–17 Weeks</p></div>
    </div>

    <div className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-8">
      <div className="relative grid grid-cols-1 gap-3 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-0.5 before:bg-border sm:grid-cols-6 sm:gap-2 sm:before:left-[8.33%] sm:before:right-[8.33%] sm:before:top-[19px] sm:before:h-0.5 sm:before:w-auto">
        {phases.map((item, index) => <button key={item.title} type="button" onClick={() => setActive(index)} aria-pressed={active === index} className="group relative z-10 grid grid-cols-[40px_1fr] items-center gap-3 text-left sm:block sm:text-center">
          <span className={`grid h-10 w-10 place-items-center rounded-full border-4 font-display text-xs font-extrabold transition-all sm:mx-auto ${active === index ? "scale-110 border-primary bg-primary text-primary-foreground shadow-md" : index < active ? "border-success bg-success text-primary-foreground" : "border-border bg-card text-muted-foreground group-hover:border-primary"}`}>{index < active ? <Check size={15} /> : index + 1}</span>
          <span className="min-w-0 sm:mt-4 sm:block"><span className={`block text-xs font-bold sm:min-h-9 ${active === index ? "text-foreground" : "text-muted-foreground"}`}>{item.title}</span><span className="mt-1 block text-[11px] font-semibold text-primary">{item.weeks}</span></span>
        </button>)}
      </div>
      <div className="ml-[52px] mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-success sm:ml-0 sm:mt-6 sm:justify-center"><span className="h-px w-8 bg-success" /> Phases 3 & 4 run alongside each other <span className="h-px w-8 bg-success" /></div>
      <div key={active} className="screen-enter mt-5 rounded-lg border border-border bg-background p-5 sm:grid sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:items-center sm:gap-8 sm:p-6">
        <div><p className="text-xs font-bold text-primary">STATION {active + 1}</p><h2 className="font-display mt-1 text-xl font-extrabold">{phase.title}</h2><p className="mt-1 text-sm font-semibold text-muted-foreground">{phase.weeks}</p></div>
        <ul className="mt-4 space-y-2 sm:mt-0">{phase.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm"><CircleCheck size={16} className="mt-0.5 shrink-0 text-success" /><span>{item}</span></li>)}</ul>
      </div>
    </div>
  </section>;
}

function TechApproach() {
  const items: { label: string; detail: string; icon: LucideIcon }[] = [
    { label: "Web", detail: "React / Next.js", icon: Globe2 },
    { label: "Mobile", detail: "One build for Android + iOS", icon: Smartphone },
    { label: "Backend", detail: "Node.js API", icon: ServerCog },
    { label: "Database", detail: "PostgreSQL / Firebase", icon: Database },
    { label: "Hosting", detail: "Cloud — AWS / Vercel", icon: Cloud },
  ];
  return <section className="flex min-h-full flex-col">
    <ScreenIntro eyebrow="Built to last" title="A Practical Tech Approach" description="Reliable technology choices, explained without the jargon." />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{items.map(({ label, detail, icon: Icon }, index) => <article key={label} className="group rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md lg:min-h-[190px]">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-accent-foreground transition-transform group-hover:scale-105"><Icon size={21} /></span><p className="mt-8 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{String(index + 1).padStart(2, "0")} · {label}</p><h2 className="font-display mt-2 text-base font-bold leading-6">{detail}</h2>
    </article>)}</div>
    <div className="mt-5 flex items-start gap-3 rounded-lg border border-success/25 bg-success-soft p-5 text-sm leading-6"><Sparkles size={19} className="mt-0.5 shrink-0 text-success" /><p><strong>Why this works:</strong> It supports faster delivery, simpler maintenance, and room to scale as ZHEP grows.</p></div>
  </section>;
}

function NextSteps() {
  const steps = [
    { title: "Confirm Scope", text: "Align on the outcomes, priorities, and final feature list.", icon: CircleCheck },
    { title: "Kickoff Discovery", text: "Map user journeys and turn the plan into approved designs.", icon: Target },
    { title: "Weekly Check-ins", text: "Review progress together and keep every decision visible.", icon: UsersRound },
  ];
  return <section className="flex min-h-full flex-col">
    <ScreenIntro eyebrow="Ready when you are" title="A Simple Path Forward" description="Three clear steps take us from agreement to a focused, transparent delivery rhythm." />
    <div className="relative grid gap-3 before:absolute before:bottom-[16%] before:left-[27px] before:top-[16%] before:w-0.5 before:bg-border sm:grid-cols-3 sm:gap-5 sm:before:left-[16%] sm:before:right-[16%] sm:before:top-7 sm:before:h-0.5 sm:before:w-auto">
      {steps.map(({ title, text, icon: Icon }, index) => <article key={title} className="relative z-10 grid grid-cols-[56px_1fr] items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm sm:block sm:min-h-[220px] sm:text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-card bg-primary font-display text-primary-foreground shadow-md sm:mx-auto"><Icon size={21} /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:mt-6">Step {index + 1}</p><h2 className="font-display mt-1 text-lg font-extrabold">{title}</h2><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p></div>
      </article>)}
    </div>
    <div className="mt-6 rounded-lg bg-sidebar p-6 text-sidebar-foreground sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:p-8">
      <div><p className="font-display text-xl font-extrabold sm:text-2xl">Let’s build ZHEP’s next chapter.</p><p className="mt-2 max-w-xl text-sm leading-6 text-sidebar-muted">A focused digital platform that makes the wellness story clearer and the customer experience stronger.</p></div>
       <div className="mt-5 border-t border-sidebar-border pt-5 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0"><p className="font-bold">Abhishek Maurya</p></div>
    </div>
  </section>;
}
