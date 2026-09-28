import {
  ArrowLeft,
  ArrowRight,
  Check,
  HeartPulse,
  Leaf,
  PackageOpen,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type ConceptId = "wellness" | "products" | "partnership";

const zhepImage = (number: number) => `/ZHEP%20PPT%20ENGLISH-images-${number}.jpg`;

const concepts: Array<{
  id: ConceptId;
  number: string;
  title: string;
  direction: string;
  description: string;
  image: string;
}> = [
  {
    id: "wellness",
    number: "01",
    title: "The Wellness Journey",
    direction: "Story-led · Calm · Educational",
    description: "Leads with ZHEP’s Clinz, Revitalize, Balance philosophy and turns wellness education into a guided journey.",
    image: zhepImage(1),
  },
  {
    id: "products",
    number: "02",
    title: "Nature, Made Practical",
    direction: "Product-led · Premium · Clear",
    description: "Introduces the range through everyday needs, trusted ingredients, and focused product stories.",
    image: zhepImage(11),
  },
  {
    id: "partnership",
    number: "03",
    title: "Grow Well, Together",
    direction: "Community-led · Confident · Human",
    description: "Balances product credibility with ZHEP’s customer partnership and farmer-connected mission.",
    image: zhepImage(0),
  },
];

export function LandingConcepts({ onPreviewChange }: { onPreviewChange: (open: boolean) => void }) {
  const [selected, setSelected] = useState<ConceptId | null>(null);

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
      <div className="screen-enter fixed inset-0 z-50 flex min-h-0 flex-col bg-sky-soft" role="dialog" aria-modal="true" aria-label="Landing page concept preview">
        <div className="relative z-20 flex min-h-[60px] shrink-0 flex-wrap items-center justify-between gap-2 border-b border-sky bg-surface-raised px-3 py-2 shadow-sm sm:px-6">
          <button type="button" onClick={() => setSelected(null)} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-bold transition-colors hover:border-sky-strong hover:text-accent-foreground">
            <ArrowLeft size={15} /> Back to concepts
          </button>
          <p className="text-right text-[10px] font-semibold text-muted-foreground sm:text-xs">Full landing page preview · {concepts.findIndex((item) => item.id === selected) + 1} of 3</p>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-sky-soft">
          {selected === "wellness" && <WellnessConcept />}
          {selected === "products" && <ProductConcept />}
          {selected === "partnership" && <PartnershipConcept />}
        </div>
        <button
          type="button"
          onClick={() => setSelected(null)}
          aria-label="Close preview"
          className="fixed bottom-5 right-4 z-30 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-xs font-bold text-foreground shadow-lg transition-colors hover:border-sky-strong hover:text-accent-foreground sm:bottom-7 sm:right-6"
        >
          <X size={16} /> Close preview
        </button>
      </div>
    );
  }

  return (
    <section className="mt-8 border-t border-border pt-7" aria-labelledby="landing-concepts-title">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Landing page phase</p>
          <h2 id="landing-concepts-title" className="font-display mt-2 text-2xl font-extrabold">Proposed Design Directions</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Open each direction to experience a proposed page structure using ZHEP’s real brand, products, and program story.</p>
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

function ConceptHeader({ active }: { active: "Wellness" | "Products" | "Partner" }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-sky bg-surface-raised/95 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-14">
      <div className="font-display text-xl font-extrabold text-accent-foreground">ZH<span className="text-primary">E</span>P</div>
      <nav className="hidden items-center gap-6 text-xs font-bold text-muted-foreground sm:flex" aria-label="Proposed landing navigation">
        {(["Wellness", "Products", "Partner"] as const).map((item) => <span key={item} className={item === active ? "text-accent-foreground" : ""}>{item}</span>)}
      </nav>
      <span className="rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground">Explore ZHEP</span>
    </header>
  );
}

function ImagePanel({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`overflow-hidden bg-muted ${className}`}><img src={src} alt={alt} className="h-full w-full object-cover" /></div>;
}

function WellnessConcept() {
  return (
    <div className="mx-auto min-h-full max-w-[1440px] bg-card shadow-xl">
      <ConceptHeader active="Wellness" />
      <section className="relative min-h-[480px] overflow-hidden sm:min-h-[560px]">
        <img src={zhepImage(1)} alt="Woman meditating in nature beside traditional herbs" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/10" />
        <div className="relative flex min-h-[480px] max-w-2xl flex-col justify-center px-6 py-14 sm:min-h-[560px] sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Connecting your health with farmers</p>
          <h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Clean within.<br />Live fully.</h3>
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">A simple wellness journey that supports the body’s natural rhythm through cleansing, renewed vitality, and everyday balance.</p>
          <div className="mt-7 flex flex-wrap gap-3"><span className="rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Begin the journey</span><span className="rounded-md border border-border bg-card/90 px-4 py-3 text-sm font-bold">Our philosophy</span></div>
        </div>
      </section>
      <section className="grid border-y border-sky bg-sky-soft sm:grid-cols-3">
        {[
          ["01", "CLINZ", "Support the body’s natural cleansing process."],
          ["02", "REVITALIZE", "Restore nourishment, energy, and vitality."],
          ["03", "BALANCE", "Build harmony across body, mind, and daily life."],
        ].map(([step, title, text]) => <div key={title} className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="text-xs font-extrabold text-primary">{step}</span><h4 className="font-display mt-2 text-lg font-extrabold">{title}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p></div>)}
      </section>
      <section className="sky-wash grid gap-8 px-6 py-14 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:px-10 lg:px-14 lg:py-20">
        <ImagePanel src={zhepImage(6)} alt="ZHEP liver wellness education" className="aspect-[16/10] rounded-lg" />
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Wellness library</p><h3 className="font-display mt-2 text-2xl font-extrabold">Understand your body. Make informed choices.</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Helpful education explains how the liver supports digestion, nutrient storage, and the body’s natural waste-removal processes—without overwhelming the reader.</p><p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-foreground">Explore wellness topics <ArrowRight size={16} /></p></div>
      </section>
      <section className="bg-card px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-5xl text-center"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">A daily rhythm</p><h3 className="font-display mt-3 text-3xl font-extrabold">Wellness made easier to understand</h3><div className="mt-9 grid gap-4 sm:grid-cols-3">{[[Leaf, "Rooted in Ayurveda", "Time-honoured plant knowledge presented for modern routines."], [HeartPulse, "Whole-person focus", "A balanced view of nourishment, energy, and everyday care."], [ShieldCheck, "Clear guidance", "Simple information that helps people make informed choices."]].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Leaf; return <article key={title as string} className="rounded-lg border border-sky bg-sky-soft p-6 text-left"><ItemIcon className="text-sky-strong" size={22} /><h4 className="font-display mt-5 text-lg font-extrabold">{title as string}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy as string}</p></article>; })}</div></div>
      </section>
      <ConceptFooter title="Begin your journey to everyday balance." action="Explore ZHEP wellness" />
    </div>
  );
}

function ProductConcept() {
  const products = [
    { name: "ZHEP-ON", need: "Daily vitality", image: zhepImage(11), copy: "A traditional phyto-herbal formulation for focus, vitality, and overall well-being." },
    { name: "Shuchi", need: "Digestive balance", image: zhepImage(13), copy: "An Ayurvedic herbal blend created to support digestion and colon cleansing." },
    { name: "Dark Love", need: "Energy & confidence", image: zhepImage(12), copy: "A premium herbal wellness chocolate blending familiar indulgence with natural ingredients." },
  ];
  return (
    <div className="mx-auto min-h-full max-w-[1440px] bg-card shadow-xl">
      <ConceptHeader active="Products" />
      <section className="grid min-h-[460px] bg-card lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Rooted in nature · Made for real life</p>
          <h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Wellness that fits your day.</h3>
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">Discover focused herbal formulations for digestion, vitality, energy, and everyday balance—presented by need, not complexity.</p>
          <div className="mt-7 flex flex-wrap gap-2">{["Digestive care", "Daily vitality", "Energy", "Balance"].map((item) => <span key={item} className="rounded-md border border-border bg-background px-3 py-2 text-xs font-bold">{item}</span>)}</div>
        </div>
        <ImagePanel src={zhepImage(11)} alt="ZHEP-ON traditional phyto-herbal wellness product" className="min-h-[320px] lg:min-h-[460px]" />
      </section>
      <section className="sky-wash px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Explore by wellness goal</p><h3 className="font-display mt-2 text-2xl font-extrabold">A clear path to the right product</h3></div>
        <div className="grid gap-4 lg:grid-cols-3">{products.map((product) => <article key={product.name} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"><ImagePanel src={product.image} alt={`${product.name} product presentation`} className="aspect-[16/10]" /><div className="p-5"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{product.need}</span><h4 className="font-display mt-1 text-lg font-extrabold">{product.name}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{product.copy}</p><p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent-foreground">View product story <ArrowRight size={14} /></p></div></article>)}</div>
      </section>
      <section className="grid gap-5 border-t border-sky bg-sky-soft px-6 py-10 sm:grid-cols-3 sm:px-10 lg:px-14">
        {[[Leaf, "Natural ingredients"], [ShieldCheck, "Trusted quality"], [Sparkles, "Everyday wellness"]].map(([Icon, title]) => { const ItemIcon = Icon as typeof Leaf; return <div key={title as string} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-card text-success"><ItemIcon size={19} /></span><span className="text-sm font-bold">{title as string}</span></div>; })}
      </section>
      <section className="bg-card px-6 py-14 sm:px-10 lg:px-14 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Find your fit</p><h3 className="font-display mt-3 text-3xl font-extrabold">Start with the way you want to feel.</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">A guided discovery experience connects each wellness need to clear product information and thoughtful everyday use.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{["Cleanse", "Revitalize", "Balance", "Sustain"].map((item, index) => <div key={item} className="rounded-lg border border-sky bg-sky-soft p-5 text-center"><span className="font-display text-sm font-extrabold text-sky-strong">0{index + 1}</span><p className="mt-2 text-sm font-bold">{item}</p></div>)}</div></div></section>
      <ConceptFooter title="Discover natural wellness for real life." action="Explore all products" />
    </div>
  );
}

function PartnershipConcept() {
  return (
    <div className="mx-auto min-h-full max-w-[1440px] bg-card shadow-xl">
      <ConceptHeader active="Partner" />
      <section className="relative min-h-[500px] overflow-hidden bg-sidebar text-sidebar-foreground">
        <img src={zhepImage(0)} alt="ZHEP natural wellness concept with traditional herbs" className="absolute inset-0 h-full w-full object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/95 to-sidebar/20" />
        <div className="relative flex min-h-[500px] max-w-2xl flex-col justify-center px-6 py-14 sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sidebar-primary">Customer partnership program</p>
          <h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Better health grows stronger communities.</h3>
          <p className="mt-5 max-w-xl text-sm leading-6 text-sidebar-muted sm:text-base">A community-led ZHEP experience connecting quality wellness products, trusted relationships, and the people who help bring nature’s goodness forward.</p>
          <p className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-sidebar-primary px-4 py-3 text-sm font-bold text-sidebar-primary-foreground">Discover the program <ArrowRight size={16} /></p>
        </div>
      </section>
      <section className="grid gap-px bg-sky sm:grid-cols-3">
        {[
          [PackageOpen, "Quality products", "Wellness products customers can understand, use, and share."],
          [UsersRound, "Community connection", "A clear way to introduce ZHEP through trusted relationships."],
          [Sprout, "Grow together", "A farmer-connected mission with healthier communities at its heart."],
        ].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Leaf; return <div key={title as string} className="bg-card p-6"><ItemIcon size={21} className="text-primary" /><h4 className="font-display mt-4 text-lg font-extrabold">{title as string}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy as string}</p></div>; })}
      </section>
      <section className="sky-wash px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div className="mb-7 max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">How it comes together</p><h3 className="font-display mt-2 text-2xl font-extrabold">A simple, transparent journey</h3></div>
        <div className="relative grid gap-3 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-0.5 before:bg-border sm:grid-cols-4 sm:before:left-[10%] sm:before:right-[10%] sm:before:top-5 sm:before:h-0.5 sm:before:w-auto">
          {["Learn about ZHEP", "Choose your wellness path", "Join the community", "Grow together"].map((item, index) => <div key={item} className="relative z-10 grid grid-cols-[40px_1fr] items-center gap-3 sm:block sm:text-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-xs font-extrabold text-primary-foreground sm:mx-auto">{index + 1}</span><p className="text-sm font-bold sm:mt-4">{item}</p></div>)}
        </div>
      </section>
      <section className="grid gap-8 bg-card px-6 py-14 sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:px-10 lg:px-14 lg:py-20"><ImagePanel src={zhepImage(1)} alt="A balanced natural wellness lifestyle" className="aspect-[16/10] rounded-lg" /><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">A shared purpose</p><h3 className="font-display mt-3 text-3xl font-extrabold">Connecting your health with farmers.</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">The ZHEP story connects mindful wellness choices with the communities and natural sources behind them.</p><p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-foreground"><HeartPulse size={18} /> Meet the ZHEP community</p></div></section>
      <ConceptFooter title="Healthy people. Stronger communities." action="Discover the partnership" dark />
    </div>
  );
}

function ConceptFooter({ title, action, dark = false }: { title: string; action: string; dark?: boolean }) {
  return <footer className={`${dark ? "bg-sidebar text-sidebar-foreground" : "bg-sky-strong text-primary-foreground"} px-6 py-12 sm:px-10 lg:px-14`}><div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-display text-2xl font-extrabold sm:text-3xl">{title}</p><p className={`mt-2 text-sm ${dark ? "text-sidebar-muted" : "text-primary-foreground/80"}`}>ZHEP · Connecting your health with farmers</p></div><span className="inline-flex w-fit items-center gap-2 rounded-md bg-card px-5 py-3 text-sm font-bold text-foreground shadow-md">{action} <ArrowRight size={16} /></span></div></footer>;
}