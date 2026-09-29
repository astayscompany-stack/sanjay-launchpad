import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  CreditCard,
  Gift,
  Heart,
  Leaf,
  LockKeyhole,
  Menu,
  PackageCheck,
  PackageOpen,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  UsersRound,
  WalletCards,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type WebConceptId = "marketplace" | "guided" | "member";

const zhepImage = (number: number) => `/ZHEP%20PPT%20ENGLISH-images-${number}.jpg`;

const concepts: Array<{
  id: WebConceptId;
  number: string;
  title: string;
  direction: string;
  description: string;
  image: string;
}> = [
  {
    id: "marketplace",
    number: "01",
    title: "Wellness Marketplace",
    direction: "Fast · Familiar · Product-first",
    description: "A quick, search-led shopping experience with clear categories, simple product cards, and an effortless order flow.",
    image: zhepImage(11),
  },
  {
    id: "guided",
    number: "02",
    title: "Guided Wellness Store",
    direction: "Personal · Helpful · Goal-led",
    description: "Helps customers start with a wellness goal, understand their options, and confidently choose the right product.",
    image: zhepImage(1),
  },
  {
    id: "member",
    number: "03",
    title: "Member & Partner Hub",
    direction: "Connected · Motivating · Complete",
    description: "Brings shopping, orders, wallet activity, referrals, club progress, and account tools into one clear experience.",
    image: zhepImage(0),
  },
];

export function WebPlatformConcepts({ onPreviewChange }: { onPreviewChange: (open: boolean) => void }) {
  const [selected, setSelected] = useState<WebConceptId | null>(null);

  useEffect(() => {
    onPreviewChange(Boolean(selected));
    if (!selected) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected, onPreviewChange]);

  if (selected) {
    return (
      <div className="screen-enter fixed inset-0 z-50 flex min-h-0 flex-col bg-sky-soft" role="dialog" aria-modal="true" aria-label="Web platform concept preview">
        <div className="relative z-30 flex min-h-[60px] shrink-0 flex-wrap items-center justify-between gap-2 border-b border-sky bg-surface-raised px-3 py-2 shadow-sm sm:px-6">
          <button type="button" onClick={() => setSelected(null)} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-bold transition-colors hover:border-sky-strong hover:text-accent-foreground">
            <ArrowLeft size={15} /> Back to concepts
          </button>
          <p className="text-right text-[10px] font-semibold text-muted-foreground sm:text-xs">Full web platform preview · {concepts.findIndex((item) => item.id === selected) + 1} of 3</p>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-sky-soft">
          {selected === "marketplace" && <MarketplaceConcept />}
          {selected === "guided" && <GuidedConcept />}
          {selected === "member" && <MemberConcept />}
        </div>
        <button type="button" onClick={() => setSelected(null)} aria-label="Close preview" className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-xs font-bold text-foreground shadow-lg transition-colors hover:border-sky-strong hover:text-accent-foreground sm:bottom-7 sm:right-6">
          <X size={16} /> Close preview
        </button>
      </div>
    );
  }

  return (
    <section className="mt-8 border-t border-border pt-7" aria-labelledby="web-concepts-title">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Web platform phase</p>
          <h2 id="web-concepts-title" className="font-display mt-2 text-2xl font-extrabold">Proposed Web Experiences</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Compare three complete directions—from fast product discovery to a full member and partner command center.</p>
        </div>
        <span className="text-xs font-semibold text-muted-foreground">3 concepts to compare</span>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {concepts.map((concept) => (
          <button key={concept.id} type="button" onClick={() => setSelected(concept.id)} className="group overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
            <span className="relative block aspect-[16/10] overflow-hidden bg-muted">
              <img src={concept.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute inset-0 bg-foreground/10" />
              <span className="absolute left-3 top-3 rounded-md bg-card/95 px-2.5 py-1 font-display text-xs font-extrabold text-foreground shadow-sm">CONCEPT {concept.number}</span>
            </span>
            <span className="block p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{concept.direction}</span>
              <span className="font-display mt-2 block text-lg font-extrabold">{concept.title}</span>
              <span className="mt-2 block text-xs leading-5 text-muted-foreground">{concept.description}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent-foreground">Open proposed layout <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function StoreHeader({ mode = "store" }: { mode?: "store" | "guided" | "member" }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:px-8 lg:px-12">
        <span className="font-display text-xl font-extrabold text-accent-foreground">ZH<span className="text-primary">E</span>P</span>
        <div className="hidden min-w-0 max-w-xl flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 py-2.5 md:flex"><Search size={17} className="text-muted-foreground" /><span className="truncate text-xs text-muted-foreground">Search products, wellness goals and more</span></div>
        <nav className="ml-auto hidden items-center gap-5 text-xs font-bold text-muted-foreground lg:flex" aria-label="Web concept navigation"><span className={mode === "store" ? "text-foreground" : ""}>Shop</span><span className={mode === "guided" ? "text-foreground" : ""}>Wellness</span><span>Orders</span><span className={mode === "member" ? "text-foreground" : ""}>My ZHEP</span></nav>
        <span className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground"><UserRound size={17} /></span>
        <span className="relative grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground"><ShoppingBag size={17} /><span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-sidebar text-[9px] text-sidebar-foreground">2</span></span>
        <Menu size={20} className="lg:hidden" />
      </div>
    </header>
  );
}

const productData = [
  { name: "ZHEP-ON", need: "Daily vitality", image: zhepImage(11), tag: "Phyto-herbal" },
  { name: "Shuchi", need: "Digestive balance", image: zhepImage(13), tag: "Ayurvedic blend" },
  { name: "Dark Love", need: "Energy & confidence", image: zhepImage(12), tag: "Herbal wellness" },
] as const;

function ProductCard({ product }: { product: (typeof productData)[number] }) {
  return <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"><div className="relative aspect-[4/3] overflow-hidden bg-sky-soft"><img src={product.image} alt={`${product.name} wellness product`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" /><span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card/95 text-muted-foreground shadow-sm"><Heart size={15} /></span></div><div className="p-4"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{product.tag}</span><h4 className="font-display mt-1 text-lg font-extrabold">{product.name}</h4><p className="mt-1 text-xs text-muted-foreground">{product.need}</p><span className="mt-4 flex items-center justify-center gap-2 rounded-md bg-sidebar px-3 py-2.5 text-xs font-bold text-sidebar-foreground">Add to bag <ShoppingBag size={14} /></span></div></article>;
}

function MarketplaceConcept() {
  return <div className="mx-auto min-h-full max-w-[1440px] bg-background shadow-xl">
    <StoreHeader />
    <section className="border-b border-sky bg-sky-soft px-4 py-4 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1344px] gap-2 overflow-hidden">{["All wellness", "Digestive care", "Daily vitality", "Energy", "Balance"].map((item, index) => <span key={item} className={`shrink-0 rounded-md px-3 py-2 text-xs font-bold ${index === 0 ? "bg-sidebar text-sidebar-foreground" : "border border-sky bg-card"}`}>{item}</span>)}</div></section>
    <section className="mx-auto grid max-w-[1344px] gap-6 px-4 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-12">
      <div className="flex min-h-[350px] flex-col justify-center rounded-lg bg-sidebar px-6 py-10 text-sidebar-foreground sm:px-10"><p className="text-xs font-bold uppercase tracking-[0.14em] text-sidebar-primary">Natural wellness, delivered simply</p><h3 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">Find what helps you feel your best.</h3><p className="mt-4 max-w-lg text-sm leading-6 text-sidebar-muted">Browse by wellness goal, compare clear product information, and order through a quick, trusted journey.</p><span className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-sidebar-primary px-4 py-3 text-sm font-bold text-sidebar-primary-foreground">Shop wellness <ArrowRight size={16} /></span></div>
      <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-card"><img src={zhepImage(11)} alt="ZHEP-ON product presentation" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute bottom-4 left-4 right-4 rounded-md bg-card/95 p-4 shadow-lg"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Featured wellness</span><p className="font-display mt-1 text-lg font-extrabold">Everyday vitality, clearly explained.</p></div></div>
    </section>
    <section className="mx-auto max-w-[1344px] px-4 pb-12 sm:px-8 lg:px-12"><div className="mb-5 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Popular right now</p><h3 className="font-display mt-2 text-2xl font-extrabold">Explore the ZHEP range</h3></div><span className="hidden items-center gap-1 text-xs font-bold sm:flex">View all <ArrowRight size={14} /></span></div><div className="grid gap-4 sm:grid-cols-3">{productData.map((product) => <ProductCard key={product.name} product={product} />)}</div></section>
    <OrderFlow />
    <TrustStrip />
    <WebFooter title="Wellness shopping without the guesswork." action="Start exploring" />
  </div>;
}

function GuidedConcept() {
  const goals: Array<[LucideIcon, string, string]> = [[Sparkles, "Feel more energised", "Explore vitality support"], [Leaf, "Support digestion", "Find digestive wellness"], [Heart, "Build daily balance", "Create a mindful routine"]];
  return <div className="mx-auto min-h-full max-w-[1440px] bg-card shadow-xl">
    <StoreHeader mode="guided" />
    <section className="relative min-h-[500px] overflow-hidden"><img src={zhepImage(1)} alt="A calm natural wellness setting" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/10" /><div className="relative flex min-h-[500px] max-w-2xl flex-col justify-center px-6 py-14 sm:px-10 lg:px-14"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Your guided wellness store</p><h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Start with how you want to feel.</h3><p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">Answer a few simple questions and explore ZHEP products with guidance that feels clear, personal, and pressure-free.</p><span className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Find my wellness path <ArrowRight size={16} /></span></div></section>
    <section className="sky-wash px-6 py-14 sm:px-10 lg:px-14 lg:py-20"><div className="mx-auto max-w-6xl"><div className="mb-7 text-center"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Choose a starting point</p><h3 className="font-display mt-2 text-3xl font-extrabold">What would you like support with?</h3></div><div className="grid gap-4 sm:grid-cols-3">{goals.map(([Icon, title, copy], index) => <article key={title} className="rounded-lg border border-sky bg-card p-6 shadow-sm"><span className="grid h-11 w-11 place-items-center rounded-md bg-sky-soft text-sky-strong"><Icon size={21} /></span><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Path 0{index + 1}</p><h4 className="font-display mt-1 text-lg font-extrabold">{title}</h4><p className="mt-2 text-sm text-muted-foreground">{copy}</p><span className="mt-5 inline-flex items-center gap-1 text-xs font-bold">Explore path <ChevronRight size={14} /></span></article>)}</div></div></section>
    <section className="bg-card px-6 py-14 sm:px-10 lg:px-14 lg:py-20"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">A simpler decision</p><h3 className="font-display mt-3 text-3xl font-extrabold">Clear product details, side by side.</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">Understand the wellness goal, ingredients, suggested use, and product story before adding anything to your bag.</p><ul className="mt-6 space-y-3">{["Plain-language product guidance", "Save favourites for later", "Secure account and checkout"].map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold"><CircleCheck size={17} className="text-success" />{item}</li>)}</ul></div><div className="grid gap-3 sm:grid-cols-2"><ProductCard product={productData[0]} /><article className="rounded-lg border border-sky bg-sky-soft p-6"><Sparkles size={22} className="text-sky-strong" /><p className="font-display mt-5 text-xl font-extrabold">Why it may fit</p><p className="mt-3 text-sm leading-6 text-muted-foreground">The recommendation connects your selected goal to useful product information—without making medical claims.</p><div className="mt-5 border-t border-sky pt-5"><span className="text-xs font-bold">View full product story</span></div></article></div></div></section>
    <OrderFlow />
    <WebFooter title="A personal path from discovery to delivery." action="Begin your journey" />
  </div>;
}

function MemberConcept() {
  const tools: Array<[LucideIcon, string, string, string]> = [[WalletCards, "ZHEP Wallet", "Available account value", "View activity"], [UsersRound, "Referral Network", "Community connections", "Open network"], [TrendingUp, "Club Progress", "Next milestone in view", "Track progress"], [PackageCheck, "Recent Orders", "Updates in one place", "View orders"]];
  return <div className="mx-auto min-h-full max-w-[1440px] bg-background shadow-xl">
    <StoreHeader mode="member" />
    <div className="mx-auto max-w-[1344px] px-4 py-6 sm:px-8 lg:px-12 lg:py-10">
      <section className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Member home</p><h3 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">Good morning, Sanjay.</h3><p className="mt-2 text-sm text-muted-foreground">Everything you need to shop, track, and grow with ZHEP.</p></div><div className="flex gap-2"><span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card"><Bell size={17} /></span><span className="inline-flex items-center gap-2 rounded-md bg-sidebar px-4 py-2 text-xs font-bold text-sidebar-foreground"><ShoppingBag size={15} /> Shop products</span></div></section>
      <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{tools.map(([Icon, title, copy, action]) => <article key={title} className="rounded-lg border border-border bg-card p-5 shadow-sm"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-md bg-sky-soft text-sky-strong"><Icon size={19} /></span><ArrowRight size={15} className="text-muted-foreground" /></div><h4 className="font-display mt-5 text-lg font-extrabold">{title}</h4><p className="mt-1 text-xs text-muted-foreground">{copy}</p><p className="mt-4 text-xs font-bold text-accent-foreground">{action}</p></article>)}</section>
      <section className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"><article className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Club journey</p><h4 className="font-display mt-2 text-xl font-extrabold">Your next milestone</h4></div><Gift size={22} className="text-primary" /></div><div className="mt-7 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-3/5 rounded-full bg-primary" /></div><div className="mt-3 flex justify-between text-[11px] font-semibold text-muted-foreground"><span>Current level</span><span>Next milestone</span></div><div className="mt-6 grid grid-cols-3 gap-2">{["Activity", "Network", "Benefits"].map((item, index) => <div key={item} className="rounded-md bg-sky-soft p-3 text-center"><p className="font-display text-sm font-extrabold text-sky-strong">0{index + 1}</p><p className="mt-1 text-[10px] font-bold">{item}</p></div>)}</div></article><article className="rounded-lg bg-sidebar p-5 text-sidebar-foreground shadow-sm sm:p-6"><p className="text-xs font-bold uppercase tracking-[0.12em] text-sidebar-primary">Order status</p><h4 className="font-display mt-2 text-xl font-extrabold">Your wellness order is moving</h4><div className="mt-6 space-y-4">{[[Check, "Order confirmed"], [PackageOpen, "Packed with care"], [Clock3, "On the way"]].map(([Icon, label], index) => { const ItemIcon = Icon as LucideIcon; return <div key={label as string} className="flex items-center gap-3"><span className={`grid h-8 w-8 place-items-center rounded-full ${index < 2 ? "bg-sidebar-primary text-sidebar-primary-foreground" : "border border-sidebar-border text-sidebar-muted"}`}><ItemIcon size={14} /></span><span className={`text-sm font-semibold ${index === 2 ? "text-sidebar-muted" : ""}`}>{label as string}</span></div>; })}</div></article></section>
      <section className="mt-6 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Operations preview</p><h4 className="font-display mt-1 text-xl font-extrabold">A clear admin command center</h4><p className="mt-2 text-sm text-muted-foreground">Products, users, content, orders, and platform activity in one managed view.</p></div><span className="inline-flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-bold"><SlidersHorizontal size={15} /> Open admin view</span></div><div className="mt-6 grid gap-3 sm:grid-cols-3">{[[BarChart3, "Platform activity"], [PackageOpen, "Product & order control"], [ShieldCheck, "Secure user management"]].map(([Icon, label]) => { const ItemIcon = Icon as LucideIcon; return <div key={label as string} className="flex items-center gap-3 rounded-md bg-sky-soft p-4"><ItemIcon size={18} className="text-sky-strong" /><span className="text-xs font-bold">{label as string}</span></div>; })}</div></section>
    </div>
    <TrustStrip />
    <WebFooter title="One account. The complete ZHEP experience." action="Open My ZHEP" />
  </div>;
}

function OrderFlow() {
  return <section className="border-y border-sky bg-sky-soft px-6 py-12 sm:px-10 lg:px-14"><div className="mx-auto max-w-6xl"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Simple ordering</p><h3 className="font-display mt-2 text-2xl font-extrabold">From choice to confirmation in three clear steps</h3></div><div className="grid gap-3 sm:grid-cols-3">{[[ShoppingBag, "Review your bag", "Products and quantities stay easy to check."], [CreditCard, "Pay securely", "A trusted payment flow with clear confirmation."], [PackageCheck, "Track your order", "Follow progress from confirmation to delivery."]].map(([Icon, title, copy], index) => { const ItemIcon = Icon as LucideIcon; return <article key={title as string} className="rounded-lg border border-sky bg-card p-5"><span className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground"><ItemIcon size={19} /></span><span className="font-display text-xs font-extrabold text-muted-foreground">0{index + 1}</span></span><h4 className="font-display mt-5 text-lg font-extrabold">{title as string}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy as string}</p></article>; })}</div></div></section>;
}

function TrustStrip() {
  return <section className="grid gap-px bg-border sm:grid-cols-3">{[[LockKeyhole, "Secure account access"], [ShieldCheck, "Protected payments"], [Star, "Clear product guidance"]].map(([Icon, label]) => { const ItemIcon = Icon as LucideIcon; return <div key={label as string} className="flex items-center justify-center gap-3 bg-card px-5 py-6"><ItemIcon size={18} className="text-success" /><span className="text-xs font-bold">{label as string}</span></div>; })}</section>;
}

function WebFooter({ title, action }: { title: string; action: string }) {
  return <footer className="bg-sky-strong px-6 py-12 text-primary-foreground sm:px-10 lg:px-14"><div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-display text-2xl font-extrabold sm:text-3xl">{title}</p><p className="mt-2 text-sm text-primary-foreground/80">ZHEP · Connecting your health with farmers</p></div><span className="inline-flex w-fit items-center gap-2 rounded-md bg-card px-5 py-3 text-sm font-bold text-foreground shadow-md">{action} <ArrowRight size={16} /></span></div></footer>;
}
