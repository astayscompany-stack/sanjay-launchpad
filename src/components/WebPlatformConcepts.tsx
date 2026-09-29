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
    title: "Catalog & Product Detail",
    direction: "Structured · Searchable · Detailed",
    description: "A category-led catalog with filters, detailed product pages, quantities, and direct add-to-bag actions.",
    image: zhepImage(13),
  },
  {
    id: "member",
    number: "03",
    title: "Member Commerce",
    direction: "Personal · Fast · Account-connected",
    description: "A member storefront for recommendations, repeat orders, cart, checkout, tracking, wallet, and club tools.",
    image: zhepImage(12),
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

function CommerceToolbar({ active = "All products" }: { active?: string }) {
  const categories = ["All products", "Vitality", "Digestive care", "Energy", "Daily wellness"];
  return <div className="border-b border-border bg-card"><div className="mx-auto flex max-w-[1344px] items-center gap-2 overflow-x-auto px-4 py-3 sm:px-8 lg:px-12">{categories.map((item) => <span key={item} className={`shrink-0 rounded-md px-3 py-2 text-xs font-bold ${item === active ? "bg-sidebar text-sidebar-foreground" : "border border-border bg-background text-muted-foreground"}`}>{item}</span>)}<span className="ml-auto hidden shrink-0 items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-bold sm:flex"><SlidersHorizontal size={14} /> Filters</span></div></div>;
}

function ProductGrid({ compact = false }: { compact?: boolean }) {
  return <div className={`grid gap-4 ${compact ? "grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>{productData.map((product) => <ProductCard key={product.name} product={product} />)}</div>;
}

function CartSummary({ compact = false }: { compact?: boolean }) {
  return <aside className={`rounded-lg border border-border bg-card p-5 shadow-sm ${compact ? "" : "lg:sticky lg:top-24"}`}><div className="flex items-center justify-between"><h4 className="font-display text-lg font-extrabold">Your bag</h4><span className="rounded-md bg-sky-soft px-2 py-1 text-[10px] font-bold text-sky-strong">2 items</span></div><div className="mt-5 space-y-4">{productData.slice(0,2).map((product, index) => <div key={product.name} className="grid grid-cols-[52px_1fr_auto] items-center gap-3"><img src={product.image} alt="" className="h-13 w-13 rounded-md object-cover" /><div className="min-w-0"><p className="truncate text-xs font-bold">{product.name}</p><p className="mt-1 text-[10px] text-muted-foreground">Qty {index + 1}</p></div><span className="text-xs font-bold">Edit</span></div>)}</div><div className="mt-5 border-t border-border pt-5"><div className="flex items-center justify-between text-xs"><span className="text-muted-foreground">Delivery</span><span className="font-bold text-success">Confirmed at checkout</span></div><button type="button" className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Continue to checkout <ArrowRight size={15} /></button><p className="mt-3 flex items-center justify-center gap-1 text-[10px] text-muted-foreground"><LockKeyhole size={12} /> Secure payment</p></div></aside>;
}

function MarketplaceConcept() {
  return <div className="mx-auto min-h-full max-w-[1440px] bg-background shadow-xl">
    <StoreHeader />
    <CommerceToolbar />
    <section className="mx-auto max-w-[1344px] px-4 py-6 sm:px-8 lg:px-12 lg:py-9"><div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">ZHEP online store</p><h3 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">Shop wellness products</h3><p className="mt-2 text-sm text-muted-foreground">Search, compare, add to bag, and order in a few clear steps.</p></div><span className="text-xs font-semibold text-muted-foreground">3 products available</span></div><div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"><ProductGrid /><CartSummary /></div></section>
    <section className="border-y border-sky bg-sky-soft px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1344px] gap-3 sm:grid-cols-3">{[[Search,"Fast product search","Find products by name or wellness need."],[ShoppingBag,"Simple bag","Change quantities without leaving the page."],[PackageCheck,"Order tracking","See every delivery update in one place."]].map(([Icon,title,copy])=>{const I=Icon as LucideIcon;return <article key={title as string} className="rounded-lg bg-card p-5"><I size={19} className="text-primary"/><h4 className="font-display mt-4 font-extrabold">{title as string}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy as string}</p></article>})}</div></section>
    <WebFooter title="Choose. Add to bag. Order." action="Browse all products" />
  </div>;
}

function GuidedConcept() {
  const [selectedGoal, setSelectedGoal] = useState("All products");
  return <div className="mx-auto min-h-full max-w-[1440px] bg-background shadow-xl">
    <StoreHeader mode="guided" />
    <CommerceToolbar active={selectedGoal} />
    <section className="mx-auto max-w-[1344px] px-4 py-6 sm:px-8 lg:px-12 lg:py-9"><div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]"><aside className="rounded-lg border border-border bg-card p-4 lg:sticky lg:top-24 lg:h-fit"><p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Shop by need</p><div className="mt-4 space-y-1">{["All products","Vitality","Digestive care","Energy"].map((item)=><button key={item} type="button" onClick={()=>setSelectedGoal(item)} className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-xs font-bold ${selectedGoal===item?"bg-sky-soft text-sky-strong":"hover:bg-muted"}`}><span>{item}</span><ChevronRight size={14}/></button>)}</div><div className="mt-5 border-t border-border pt-5"><p className="text-xs font-bold">Need help choosing?</p><p className="mt-2 text-[11px] leading-5 text-muted-foreground">Answer three quick questions to narrow the catalog.</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">Start product finder <ArrowRight size={13}/></span></div></aside><div><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Product catalog</p><h3 className="font-display mt-2 text-3xl font-extrabold">{selectedGoal}</h3></div><span className="text-xs text-muted-foreground">Sort: Recommended</span></div><div className="mt-6"><ProductGrid /></div></div></div></section>
    <section className="border-y border-border bg-card px-4 py-10 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1344px]"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Product page preview</p><div className="mt-5 grid gap-6 rounded-lg border border-border p-5 lg:grid-cols-[0.8fr_1.2fr] lg:p-7"><img src={productData[0].image} alt="ZHEP-ON product" className="aspect-[4/3] w-full rounded-lg object-cover"/><div className="flex flex-col justify-center"><span className="text-xs font-bold text-success">Available</span><h4 className="font-display mt-2 text-3xl font-extrabold">ZHEP-ON</h4><p className="mt-2 text-sm font-semibold text-muted-foreground">Traditional phyto-herbal daily vitality support.</p><div className="mt-5 grid gap-2 sm:grid-cols-3">{["Product overview","Ingredients","How to use"].map((x,i)=><span key={x} className={`rounded-md border px-3 py-2 text-center text-xs font-bold ${i===0?"border-primary bg-sky-soft":"border-border"}`}>{x}</span>)}</div><div className="mt-6 flex gap-3"><span className="grid h-11 w-24 place-items-center rounded-md border border-border text-sm font-bold">− &nbsp; 1 &nbsp; +</span><button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-md bg-sidebar px-4 py-3 text-sm font-bold text-sidebar-foreground"><ShoppingBag size={16}/> Add to bag</button></div></div></div></div></section>
    <WebFooter title="A catalog built for confident buying." action="Shop the catalog" />
  </div>;
}

function MemberConcept() {
  return <div className="mx-auto min-h-full max-w-[1440px] bg-background shadow-xl">
    <StoreHeader mode="member" />
    <CommerceToolbar />
    <div className="mx-auto grid max-w-[1344px] gap-6 px-4 py-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-12 lg:py-9"><main><div className="rounded-lg bg-sidebar p-6 text-sidebar-foreground sm:flex sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-sidebar-primary">Member store</p><h3 className="font-display mt-2 text-3xl font-extrabold">Welcome back, Sanjay.</h3><p className="mt-2 text-sm text-sidebar-muted">Reorder favourites or discover another ZHEP product.</p></div><span className="mt-5 inline-flex items-center gap-2 rounded-md bg-sidebar-primary px-4 py-3 text-xs font-bold text-sidebar-primary-foreground sm:mt-0"><PackageOpen size={15}/> Reorder last bag</span></div><div className="mt-7 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Recommended for you</p><h4 className="font-display mt-2 text-2xl font-extrabold">Your ZHEP store</h4></div><span className="text-xs font-bold">View all</span></div><div className="mt-5"><ProductGrid compact /></div></main><div className="space-y-4"><CartSummary compact/><aside className="rounded-lg border border-border bg-card p-5"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">My account</p><div className="mt-4 space-y-2">{[[PackageCheck,"Orders & tracking"],[WalletCards,"Wallet activity"],[UsersRound,"Referral network"],[TrendingUp,"Club progress"]].map(([Icon,label])=>{const I=Icon as LucideIcon;return <button type="button" key={label as string} className="flex w-full items-center gap-3 rounded-md border border-border px-3 py-3 text-left text-xs font-bold hover:bg-sky-soft"><I size={16} className="text-primary"/><span>{label as string}</span><ChevronRight size={14} className="ml-auto"/></button>})}</div></aside></div></div>
    <section className="border-y border-sky bg-sky-soft px-4 py-9 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1344px]"><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">After checkout</p><h4 className="font-display mt-2 text-2xl font-extrabold">Order and account tools</h4></div></div><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[[PackageCheck,"Track orders"],[CreditCard,"Secure payments"],[WalletCards,"View wallet"],[Gift,"Club benefits"]].map(([Icon,label])=>{const I=Icon as LucideIcon;return <article key={label as string} className="flex items-center gap-3 rounded-lg bg-card p-5"><span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground"><I size={18}/></span><span className="text-sm font-bold">{label as string}</span></article>})}</div></div></section>
    <WebFooter title="Shopping and membership in one place." action="Continue shopping" />
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
