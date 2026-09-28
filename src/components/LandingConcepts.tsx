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
} from "lucide-react";
import { useState, type ReactNode } from "react";

import wellnessHero from "../assets/zhep/zhep-1.jpg.asset.json";
import liverStory from "../assets/zhep/zhep-6.jpg.asset.json";
import zephOn from "../assets/zhep/zhep-11.jpg.asset.json";
import darkLove from "../assets/zhep/zhep-12.jpg.asset.json";
import shuchi from "../assets/zhep/zhep-13.jpg.asset.json";
import partnership from "../assets/zhep/zhep-15.jpg.asset.json";

type ConceptId = "wellness" | "products" | "partnership";

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
    image: wellnessHero.url,
  },
  {
    id: "products",
    number: "02",
    title: "Nature, Made Practical",
    direction: "Product-led · Premium · Clear",
    description: "Introduces the range through everyday needs, trusted ingredients, and focused product stories.",
    image: zephOn.url,
  },
  {
    id: "partnership",
    number: "03",
    title: "Grow Well, Together",
    direction: "Community-led · Confident · Human",
    description: "Balances product credibility with ZHEP’s customer partnership and farmer-connected mission.",
    image: partnership.url,
  },
];

export function LandingConcepts() {
  const [selected, setSelected] = useState<ConceptId | null>(null);

  if (selected) {
    return (
      <div className="screen-enter mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-raised px-4 py-3 sm:px-6">
          <button type="button" onClick={() => setSelected(null)} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-bold transition-colors hover:border-primary hover:text-accent-foreground">
            <ArrowLeft size={15} /> Back to concepts
          </button>
          <p className="text-xs font-semibold text-muted-foreground">Interactive landing page proposal · Concept {concepts.findIndex((item) => item.id === selected) + 1} of 3</p>
        </div>
        {selected === "wellness" && <WellnessConcept />}
        {selected === "products" && <ProductConcept />}
        {selected === "partnership" && <PartnershipConcept />}
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
    <header className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-8">
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
    <div className="bg-background">
      <ConceptHeader active="Wellness" />
      <section className="relative min-h-[480px] overflow-hidden sm:min-h-[560px]">
        <img src={wellnessHero.url} alt="Woman meditating in nature beside traditional herbs" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/10" />
        <div className="relative flex min-h-[480px] max-w-2xl flex-col justify-center px-6 py-14 sm:min-h-[560px] sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Connecting your health with farmers</p>
          <h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Clean within.<br />Live fully.</h3>
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">A simple wellness journey that supports the body’s natural rhythm through cleansing, renewed vitality, and everyday balance.</p>
          <div className="mt-7 flex flex-wrap gap-3"><span className="rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Begin the journey</span><span className="rounded-md border border-border bg-card/90 px-4 py-3 text-sm font-bold">Our philosophy</span></div>
        </div>
      </section>
      <section className="grid border-y border-border bg-card sm:grid-cols-3">
        {[
          ["01", "CLINZ", "Support the body’s natural cleansing process."],
          ["02", "REVITALIZE", "Restore nourishment, energy, and vitality."],
          ["03", "BALANCE", "Build harmony across body, mind, and daily life."],
        ].map(([step, title, text]) => <div key={title} className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="text-xs font-extrabold text-primary">{step}</span><h4 className="font-display mt-2 text-lg font-extrabold">{title}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p></div>)}
      </section>
      <section className="grid gap-6 px-6 py-10 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:px-10">
        <ImagePanel src={liverStory.url} alt="ZHEP liver wellness education" className="aspect-[16/10] rounded-lg" />
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Wellness library</p><h3 className="font-display mt-2 text-2xl font-extrabold">Understand your body. Make informed choices.</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Helpful education explains how the liver supports digestion, nutrient storage, and the body’s natural waste-removal processes—without overwhelming the reader.</p><p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-foreground">Explore wellness topics <ArrowRight size={16} /></p></div>
      </section>
    </div>
  );
}

function ProductConcept() {
  const products = [
    { name: "ZHEP-ON", need: "Daily vitality", image: zephOn.url, copy: "A traditional phyto-herbal formulation for focus, vitality, and overall well-being." },
    { name: "Shuchi", need: "Digestive balance", image: shuchi.url, copy: "An Ayurvedic herbal blend created to support digestion and colon cleansing." },
    { name: "Dark Love", need: "Energy & confidence", image: darkLove.url, copy: "A premium herbal wellness chocolate blending familiar indulgence with natural ingredients." },
  ];
  return (
    <div className="bg-background">
      <ConceptHeader active="Products" />
      <section className="grid min-h-[460px] bg-card lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Rooted in nature · Made for real life</p>
          <h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Wellness that fits your day.</h3>
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">Discover focused herbal formulations for digestion, vitality, energy, and everyday balance—presented by need, not complexity.</p>
          <div className="mt-7 flex flex-wrap gap-2">{["Digestive care", "Daily vitality", "Energy", "Balance"].map((item) => <span key={item} className="rounded-md border border-border bg-background px-3 py-2 text-xs font-bold">{item}</span>)}</div>
        </div>
        <ImagePanel src={zephOn.url} alt="ZHEP-ON traditional phyto-herbal wellness product" className="min-h-[320px] lg:min-h-[460px]" />
      </section>
      <section className="px-6 py-10 sm:px-10">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Explore by wellness goal</p><h3 className="font-display mt-2 text-2xl font-extrabold">A clear path to the right product</h3></div>
        <div className="grid gap-4 lg:grid-cols-3">{products.map((product) => <article key={product.name} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"><ImagePanel src={product.image} alt={`${product.name} product presentation`} className="aspect-[16/10]" /><div className="p-5"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{product.need}</span><h4 className="font-display mt-1 text-lg font-extrabold">{product.name}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{product.copy}</p><p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent-foreground">View product story <ArrowRight size={14} /></p></div></article>)}</div>
      </section>
      <section className="grid gap-5 border-t border-border bg-success-soft px-6 py-8 sm:grid-cols-3 sm:px-10">
        {[[Leaf, "Natural ingredients"], [ShieldCheck, "Trusted quality"], [Sparkles, "Everyday wellness"]].map(([Icon, title]) => { const ItemIcon = Icon as typeof Leaf; return <div key={title as string} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-card text-success"><ItemIcon size={19} /></span><span className="text-sm font-bold">{title as string}</span></div>; })}
      </section>
    </div>
  );
}

function PartnershipConcept() {
  return (
    <div className="bg-background">
      <ConceptHeader active="Partner" />
      <section className="relative min-h-[500px] overflow-hidden bg-sidebar text-sidebar-foreground">
        <img src={partnership.url} alt="ZHEP customer partnership and community growth" className="absolute inset-0 h-full w-full object-cover object-[35%_center] opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/95 to-sidebar/20" />
        <div className="relative flex min-h-[500px] max-w-2xl flex-col justify-center px-6 py-14 sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sidebar-primary">Customer partnership program</p>
          <h3 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Better health grows stronger communities.</h3>
          <p className="mt-5 max-w-xl text-sm leading-6 text-sidebar-muted sm:text-base">A community-led ZHEP experience connecting quality wellness products, trusted relationships, and the people who help bring nature’s goodness forward.</p>
          <p className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-sidebar-primary px-4 py-3 text-sm font-bold text-sidebar-primary-foreground">Discover the program <ArrowRight size={16} /></p>
        </div>
      </section>
      <section className="grid gap-px bg-border sm:grid-cols-3">
        {[
          [PackageOpen, "Quality products", "Wellness products customers can understand, use, and share."],
          [UsersRound, "Community connection", "A clear way to introduce ZHEP through trusted relationships."],
          [Sprout, "Grow together", "A farmer-connected mission with healthier communities at its heart."],
        ].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Leaf; return <div key={title as string} className="bg-card p-6"><ItemIcon size={21} className="text-primary" /><h4 className="font-display mt-4 text-lg font-extrabold">{title as string}</h4><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy as string}</p></div>; })}
      </section>
      <section className="px-6 py-10 sm:px-10">
        <div className="mb-7 max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">How it comes together</p><h3 className="font-display mt-2 text-2xl font-extrabold">A simple, transparent journey</h3></div>
        <div className="relative grid gap-3 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-0.5 before:bg-border sm:grid-cols-4 sm:before:left-[10%] sm:before:right-[10%] sm:before:top-5 sm:before:h-0.5 sm:before:w-auto">
          {["Learn about ZHEP", "Choose your wellness path", "Join the community", "Grow together"].map((item, index) => <div key={item} className="relative z-10 grid grid-cols-[40px_1fr] items-center gap-3 sm:block sm:text-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-xs font-extrabold text-primary-foreground sm:mx-auto">{index + 1}</span><p className="text-sm font-bold sm:mt-4">{item}</p></div>)}
        </div>
      </section>
      <section className="flex flex-col gap-4 border-t border-border bg-card px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"><div><p className="font-display text-xl font-extrabold">Connecting your health with farmers.</p><p className="mt-1 text-xs text-muted-foreground">Healthy people. Stronger communities. A brighter tomorrow.</p></div><span className="inline-flex items-center gap-2 text-sm font-bold text-accent-foreground"><HeartPulse size={18} /> Meet the ZHEP community</span></section>
    </div>
  );
}