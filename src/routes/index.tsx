import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Clock, Lock, ChevronDown, ArrowRight, Sparkles, ChevronsLeftRight, AlertCircle, Heart, Award, Coffee, BookOpen, UserCheck, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { "media-id"?: string; aspect?: string }, HTMLElement>;
    }
  }
}

function WistiaPlayer() {
  useEffect(() => {
    const load = (src: string, type?: string) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement("script");
      s.src = src; s.async = true;
      if (type) s.type = type;
      document.body.appendChild(s);
    };
    load("https://fast.wistia.com/player.js");
    load("https://fast.wistia.com/embed/rng5l3y995.js", "module");
  }, []);
  return (
    <div
      className="overflow-hidden rounded-2xl border border-copper/30 shadow-2xl bg-copper"
      dangerouslySetInnerHTML={{
        __html: `<style>wistia-player[media-id='rng5l3y995']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/rng5l3y995/swatch');display:block;filter:blur(5px);padding-top:56.25%;}</style><wistia-player media-id="rng5l3y995" aspect="1.7777777777777777"></wistia-player>`,
      }}
    />
  );
}

import n1 from "@/assets/n1.png.asset.json";
import n2 from "@/assets/n2.png.asset.json";
import n3 from "@/assets/n3.png.asset.json";
import n4 from "@/assets/n4.png.asset.json";
import n5 from "@/assets/n5.png.asset.json";
import n6 from "@/assets/n6.png.asset.json";
import n7 from "@/assets/n7.png.asset.json";
import n8 from "@/assets/n8.png.asset.json";
import antesImg from "@/assets/antes.png.asset.json";
import depoisImg from "@/assets/depois.png.asset.json";
import seloGarantia from "@/assets/selo-garantia-30-dias-removebg-preview.png.asset.json";
import tSandra from "@/assets/t-sandra.png.asset.json";
import tMarlene from "@/assets/t-marlene.png.asset.json";
import tDebora from "@/assets/t-debora.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: n2.url },
      { name: "twitter:image", content: n2.url },
    ],
  }),
});

const CHECKOUT = "https://ggcheckout.app/checkout/v5/1c6ij2l23k83p0zS2xaa";

function FloatingPetals() {
  const petals = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-petal {
          0% { transform: translateY(-10%) rotate(0deg) translateX(0px); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(50px); opacity: 0; }
        }
        .petal {
          position: absolute;
          background: linear-gradient(135deg, rgba(244,188,188,0.4) 0%, rgba(219,112,147,0.2) 100%);
          border-radius: 80% 10% 55% 10%;
          transform-origin: center;
          animation: float-petal 18s linear infinite;
        }
      `}} />
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const size = 12 + Math.random() * 20;
        const delay = Math.random() * -18;
        const duration = 12 + Math.random() * 10;
        return (
          <div
            key={i}
            className="petal"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * 1.5}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              top: "-5%",
            }}
          />
        );
      })}
    </div>
  );
}

function CTA({ children = "QUERO COMEÇAR MEU RITUAL AGORA", block = false }: { children?: React.ReactNode; block?: boolean }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full bg-rose px-8 py-5 text-[15px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_-8px_rgba(179,88,80,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-8px_rgba(179,88,80,0.75)] animate-pulse-soft ${block ? "w-full" : ""}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose/80 to-[#d66f65] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}

function Stars({ size = "h-4 w-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`${size} fill-current`} />)}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-rose/10 bg-white/40 backdrop-blur-sm rounded-xl px-5 mb-3 transition-all duration-300 hover:bg-white/80">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-lg font-medium text-ink md:text-xl">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-rose transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 0, m: 15, s: 0 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let s = p.s - 1, m = p.m, h = p.h;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) return { h: 0, m: 15, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-2 font-mono text-2xl tabular-nums text-white md:text-3xl">
      <span className="rounded bg-rose px-3 py-1.5 font-bold shadow-md">{pad(t.h)}</span>:
      <span className="rounded bg-rose px-3 py-1.5 font-bold shadow-md">{pad(t.m)}</span>:
      <span className="rounded bg-rose px-3 py-1.5 font-bold shadow-md">{pad(t.s)}</span>
    </div>
  );
}

function StatRing({ pct, label }: { pct: number; label: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  return (
    <div className="flex items-center gap-5 bg-white/70 p-5 rounded-2xl border border-rose/10 shadow-sm transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-20 w-20 shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="none" className="text-rose/10" />
          <circle
            cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"
            className="text-rose" strokeDasharray={c} strokeDashoffset={off}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-xl font-semibold text-ink">
          {pct}%
        </div>
      </div>
      <p className="text-[15px] leading-snug text-ink/80 font-medium">{label}</p>
    </div>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      update(x);
    };
    const stop = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  const start = (clientX: number) => { dragging.current = true; update(clientX); };

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <div
        ref={ref}
        className="relative aspect-square w-full select-none overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-cream"
        onMouseDown={(e) => start(e.clientX)}
        onTouchStart={(e) => start(e.touches[0].clientX)}
      >
        <img src={depoisImg.url} alt="Depois" className="absolute inset-0 h-full w-full object-cover animate-fade-in" draggable={false} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={antesImg.url} alt="Antes" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-ink/75 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow">Antes</span>
        <span className="absolute right-4 top-4 rounded-full bg-rose/95 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow">Depois</span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)]" />
        </div>
        <button
          type="button"
          aria-label="Arraste para comparar"
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-white bg-rose text-white shadow-2xl active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform"
          style={{ left: `${pos}%` }}
          onMouseDown={(e) => { e.stopPropagation(); start(e.clientX); }}
          onTouchStart={(e) => { e.stopPropagation(); start(e.touches[0].clientX); }}
        >
          <ChevronsLeftRight className="h-5 w-5" />
        </button>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar antes e depois"
        className="mt-5 w-full accent-rose cursor-pointer"
      />
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-cream/30 text-ink/90 relative">
      {/* FLOAT DECORATION - FLOATING PETALS IN HERO AND MAIN SECTIONS */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] overflow-hidden pointer-events-none z-0">
        <FloatingPetals />
      </div>

      {/* HEADER LOGO */}
      <header className="py-6 px-4 border-b border-rose/5 bg-white/40 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-rose animate-spin-slow" />
            <span className="font-display text-xl font-bold tracking-wider uppercase text-rose">Método Rugas Nunca Mais</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold bg-rose/10 text-rose px-3 py-1 rounded-full">
            <ShieldCheck className="h-4 w-4" /> Garantia Incondicional de 30 Dias
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 md:pt-16 md:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-rose/10 border border-rose/20 rounded-full px-4 py-2 text-xs font-semibold text-rose uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Ritual de Beleza Caseiro
            </div>
            
            <h1 className="font-display text-3xl leading-[1.15] text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              O ritual caseiro que está fazendo milhares de mulheres <span className="text-rose font-semibold italic underline decoration-rose/30">redescobrirem a confiança</span> ao olhar para o espelho.
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              Descubra o passo a passo de uma máscara natural inspirada em estudos sobre antioxidantes e renovação da pele, utilizando ingredientes simples e acessíveis que podem fazer parte da sua rotina de autocuidado — sem depender de procedimentos caros ou dolorosos.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Apenas 15 minutos por aplicação",
                "Ingredientes fáceis de encontrar",
                "Rotina simples para fazer em casa",
                "Ebook com acesso imediato",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 border border-rose/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/10 text-rose">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-ink/80">{text}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="space-y-4 pt-2">
              <div>
                <CTA />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="font-bold text-ink">4,9 de 5</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>Mais de 3.200 mulheres já adquiriram</span>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground/80 border-t border-rose/10 pt-4">
                <div className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-rose" /> Pagamento seguro</div>
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-rose" /> Acesso imediato</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-rose" /> Garantia de 30 dias</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual (Ebook Mockup / Video wrapper) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-rose/20 to-amber-200/10 rounded-[2.5rem] blur-3xl opacity-60 pointer-events-none" />
            <div className="relative border-8 border-white rounded-[2rem] shadow-2xl overflow-hidden bg-white/20 backdrop-blur-sm">
              <img src={n8.url} alt="Método Rugas Nunca Mais Ebook Mockup" className="w-full h-auto object-cover" />
            </div>
            
            {/* Float reviews overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm border border-rose/10 rounded-2xl p-4 shadow-xl max-w-xs hidden sm:block hover:scale-105 transition-transform duration-300">
              <p className="text-xs italic text-muted-foreground">"Minha pele mudou completamente, os 15 minutos mais bem gastos do meu dia!"</p>
              <div className="flex justify-between items-center mt-2.5">
                <span className="text-xs font-bold text-ink">- Mariana S., 47 anos</span>
                <Stars size="h-3 w-3" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: PROBLEM INTRO */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Floating petals local decor */}
        <div className="absolute bottom-0 right-0 h-96 w-96 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/2 right-10 w-24 h-36 rounded-tr-full rounded-bl-full bg-rose/10 rotate-45 blur-xs" />
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">Reflexão profunda</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.2] mt-3 text-ink">
              Talvez o problema não seja a sua idade.
            </h2>
            <div className="h-1 w-20 bg-rose/30 mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-cream/40 border-l-4 border-rose p-5 rounded-r-xl">
                <p className="font-semibold text-rose text-lg mb-1">E nem a falta de cremes.</p>
                <p className="text-sm text-muted-foreground">Você não precisa acumular dezenas de frascos na sua penteadeira.</p>
              </div>
              <div className="bg-cream/40 border-l-4 border-rose p-5 rounded-r-xl">
                <p className="font-semibold text-rose text-lg mb-1">Muito menos a quantidade de colágeno.</p>
                <p className="text-sm text-muted-foreground">Que você já tentou tomar sem ver resultado visível direto.</p>
              </div>
            </div>

            {/* Central Image column (Mirror layout from user reference) */}
            <div className="lg:col-span-4 relative text-center">
              <div className="absolute inset-0 bg-rose-100/50 rounded-full filter blur-xl scale-75" />
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl max-w-xs mx-auto">
                {/* n7 has woman skincare theme */}
                <img src={n7.url} alt="Mulher cuidando da pele" className="w-full object-cover aspect-[3/4]" />
              </div>
            </div>

            {/* Right text column */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                A verdade é que muitas mulheres passam anos investindo em cosméticos caros, séruns importados, cápsulas, procedimentos e tratamentos estéticos...
              </p>
              <p className="text-[15px] leading-relaxed font-semibold text-ink">
                ...sem nunca entender o que realmente influencia a aparência da pele ao longo do tempo.
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Enquanto isso, todos os dias sua pele continua sendo exposta ao sol, à poluição, ao estresse e a outros fatores ambientais que fazem parte da rotina.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-cream/20 border border-rose/10 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm text-center">
            <h3 className="font-display text-2xl text-ink mb-4">O resultado de toda essa exposição?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Menos luminosa", desc: "A pele perde o viço natural" },
                { title: "Linhas aparentes", desc: "Marcas começam a se destacar" },
                { title: "Textura muda", desc: "Perda da suavidade original" },
                { title: "Espelho incômodo", desc: "Olhar deixa de ser agradável" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl shadow-xs border border-rose/5">
                  <p className="font-bold text-rose text-base mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Não porque você deixou de ser bonita. Mas porque você sente que sua aparência já não acompanha a mulher que continua sendo por dentro.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: IDENTIFICAÇÃO (CHECKLIST SINTOMAS) */}
      <section className="py-20 bg-cream/10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">Autoanálise</span>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">Você já sentiu que...</h2>
            <p className="text-sm text-muted-foreground mt-2">Veja se você se identifica com alguma dessas situações comuns no dia a dia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "✓ Compra um creme novo cheia de esperança... mas depois de algumas semanas percebe que quase nada mudou?",
              "✓ Passa maquiagem apenas para esconder aquilo que gostaria de não enxergar?",
              "✓ Evita fotos de perto.",
              "✓ Aumenta o espelho para procurar \"defeitos\".",
              "✓ Sente que sua pele perdeu o brilho de alguns anos atrás.",
              "✓ Já pensou: \"Será que agora só um procedimento resolve?\""
            ].map((text, idx) => (
              <div key={idx} className="flex gap-4 bg-white/70 backdrop-blur-sm border border-rose/10 p-5 rounded-2xl shadow-xs hover:border-rose/30 transition-all duration-300">
                <div className="text-rose text-lg font-bold shrink-0">✓</div>
                <p className="text-[15px] leading-relaxed text-ink/80">{text.replace("✓", "").trim()}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-rose/10 text-rose font-bold text-sm md:text-base rounded-full px-8 py-3.5 shadow-sm">
              Se respondeu "sim" para qualquer uma dessas perguntas... Saiba que você não está sozinha.
            </div>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS INTERATIVO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-rose font-bold">Resultados Reais</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-2 mb-4">Veja a Transformação na Pele</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">Arraste a barra central para comparar o visual de forma interativa.</p>
          
          <BeforeAfter />
        </div>
      </section>

      {/* SEÇÃO 4: COMPRAR VS CUIDAR */}
      <section className="py-20 bg-ink-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 h-64 w-64 bg-rose/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-rose font-bold">Mentalidade Inteligente</span>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                O mercado ensina você a comprar.<br />
                <span className="text-rose italic">Nós queremos ensinar você a cuidar.</span>
              </h2>
              
              <div className="h-0.5 w-16 bg-rose/50 rounded-full" />
              
              <p className="text-base text-white/80 leading-relaxed">
                Existe uma diferença enorme. Todos os meses surge um novo creme. Uma nova cápsula. Um novo sérum. Uma nova promessa.
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                Mas poucas pessoas falam sobre algo muito mais importante: criar uma rotina consistente que ajude sua pele a receber os cuidados certos. Porque nenhum produto faz milagres se você não entende como cuidar da pele de forma inteligente.
              </p>
              <p className="text-base font-semibold text-rose">
                Foi justamente por isso que nasceu o Método Rugas Nunca Mais.
              </p>
            </div>
            
            <div className="md:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-xl space-y-6">
                <h3 className="font-display text-xl text-rose font-semibold">Qual caminho você escolhe?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-white">Comprar Ilusões</p>
                      <p className="text-xs text-white/60">Gastar centenas de reais em cremes milagrosos sem constância.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                    <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-white">Aprender a Cuidar</p>
                      <p className="text-xs text-white/60">Criar uma rotina simples e natural que trabalha a favor da sua pele.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 & 6: O MÉTODO E OS ANTIOXIDANTES */}
      <section className="py-20 bg-cream/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
              <img src={n1.url} alt="Ingredientes naturais" className="w-full h-auto object-cover" />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-rose font-bold">Como funciona</span>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                Um protocolo simples. Inspirado em ingredientes naturais conhecidos por suas propriedades antioxidantes.
              </h2>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                O Método Rugas Nunca Mais reúne um conjunto de receitas e orientações que ensinam como preparar máscaras caseiras utilizando ingredientes comuns e acessíveis. O objetivo é transformar alguns minutos da sua semana em um verdadeiro ritual de autocuidado.
              </p>

              <div className="border-t border-rose/10 pt-6 space-y-4">
                <h3 className="font-display text-xl text-rose font-medium">Por que tanta gente fala sobre antioxidantes quando o assunto é pele?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Todos os dias nossa pele entra em contato com fatores externos que causam o estresse oxidativo ao longo do tempo. Conheça as ameaças diárias:
                </p>
                
                <div className="flex flex-wrap gap-2.5">
                  {["Radiação solar", "Poluição", "Estresse", "Poeira", "Fumaça"].map((factor, i) => (
                    <span key={i} className="text-xs bg-white border border-rose/10 px-4 py-2 rounded-full font-bold text-ink shadow-xs">
                      ⚡ {factor}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ingredientes naturalmente ricos em compostos antioxidantes despertam muito interesse nas pesquisas de skincare. No método, você aprende a usá-los de forma prática e otimizada.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 7 & 8: O VERDADEIRO OBJETIVO E IMAGINE */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">Nossa Filosofia</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              O verdadeiro objetivo não é esconder a sua pele.<br />
              <span className="text-rose font-semibold italic">É cuidar dela.</span>
            </h2>
            <div className="h-1 w-16 bg-rose/30 mx-auto mt-4 rounded-full" />
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Você não precisa parecer outra pessoa. Você não precisa buscar um rosto artificial. Você não precisa viver com medo do envelhecimento. O que muitas mulheres procuram, na verdade, é muito mais simples: 
            <strong className="text-ink font-semibold"> reconhecer novamente a própria beleza</strong> no espelho, sorrir nas fotos e se sentir bonita. E isso começa com pequenos hábitos repetidos ao longo do tempo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-cream/20 border border-rose/15 rounded-3xl p-8 md:p-10 text-left shadow-sm">
            <div className="md:col-span-7 space-y-5">
              <h3 className="font-display text-2xl text-rose leading-tight">Imagine reservar apenas 15 minutos...</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Enquanto o café passa... Enquanto escuta sua música favorita... Enquanto lê um livro...
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Você transforma esse momento em um ritual exclusivamente seu. Sem pressa. Sem pressão. Sem agulhas. Sem desconforto. Um momento para desacelerar, respirar e cuidar da pessoa mais importante da sua vida: <strong>Você</strong>.
              </p>
            </div>
            
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
              <img src={n2.url} alt="Ritual de autocuidado com música" className="w-full h-48 object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 9 & 10: O MÉTODO DETALHADO (O QUE VOCÊ RECEBE E DIFERENÇA) */}
      <section className="py-20 bg-cream/10 border-t border-rose/5 relative">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">O Método por Dentro</span>
            <h2 className="font-display text-3xl md:text-4xl text-ink">Conheça o Método Rugas Nunca Mais</h2>
            <p className="text-base text-muted-foreground">
              Um guia digital completo criado para ensinar, de forma simples e organizada, como preparar e aplicar máscaras caseiras utilizando ingredientes acessíveis.
            </p>
          </div>

          {/* O QUE TORNA ESSE MÉTODO DIFERENTE (TWO WOMEN STORY) */}
          <div className="bg-white rounded-3xl border border-rose/10 p-8 shadow-sm mb-16">
            <h3 className="font-display text-2xl text-center text-ink mb-2">O que torna esse método diferente?</h3>
            <p className="text-sm text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              A internet está cheia de receitas soltas. Mas receitas soltas não criam uma rotina, e uma rotina mal executada dificilmente gera consistência.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Woman 1: Sem Método */}
              <div className="bg-red-50/30 border border-red-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-red-600 font-bold">
                  <XCircle className="h-5 w-5" />
                  <span>Caminho Comum (Sem Método)</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Procura vídeos e receitas aleatórias na internet. Cada vídeo ensina uma coisa diferente, cada blogueira recomenda um tempo diferente, cada receita muda completamente.
                </p>
                <ul className="text-xs text-muted-foreground space-y-2 pt-2">
                  <li>• Fica tentando adivinhar as proporções</li>
                  <li>• Não sabe quanto tempo deixar agir</li>
                  <li>• Aplica ingredientes incompatíveis</li>
                  <li className="font-semibold text-red-600">• Testa, erra e desiste com facilidade</li>
                </ul>
              </div>

              {/* Woman 2: Com Método */}
              <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <Check className="h-5 w-5" />
                  <span>Método Rugas Nunca Mais</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Apenas abre o ebook e segue exatamente o protocolo completo passo a passo. Sem dúvidas, sem improviso e sem perder tempo.
                </p>
                <ul className="text-xs text-muted-foreground space-y-2 pt-2">
                  <li>• Sabe exatamente o que e como preparar</li>
                  <li>• Indica a frequência ideal de aplicação</li>
                  <li>• Lista erros comuns a evitar</li>
                  <li className="font-semibold text-emerald-600">• Consistência e resultados práticos</li>
                </ul>
              </div>

            </div>
          </div>

          {/* O QUE CONTÉM DENTRO DO GUIA */}
          <h3 className="font-display text-2xl text-center text-ink mb-10">O que você aprende no material:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border border-rose/10 p-6 rounded-2xl shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-full bg-rose/10 text-rose flex items-center justify-center font-bold font-display text-lg">1</div>
              <h4 className="font-display text-lg font-semibold text-ink">Receita 1: Primeiro Passo</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Uma combinação de ingredientes utilizada como primeiro passo do protocolo. Proporções exatas, aplicação e tempo ideal.
              </p>
            </div>

            <div className="bg-white border border-rose/10 p-6 rounded-2xl shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-full bg-rose/10 text-rose flex items-center justify-center font-bold font-display text-lg">2</div>
              <h4 className="font-display text-lg font-semibold text-ink">Receita 2: Complementação</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A segunda etapa do protocolo, criada especificamente para complementar o ritual e potencializar toda a rotina.
              </p>
            </div>

            <div className="bg-white border border-rose/10 p-6 rounded-2xl shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-full bg-rose/10 text-rose flex items-center justify-center font-bold font-display text-lg">3</div>
              <h4 className="font-display text-lg font-semibold text-ink">Receita 3: Fechamento</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                O fechamento do protocolo, com orientações detalhadas para manter a regularidade dos cuidados na sua semana.
              </p>
            </div>

            <div className="bg-white border border-rose/10 p-6 rounded-2xl shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-full bg-rose/10 text-rose flex items-center justify-center font-bold font-display text-lg">4</div>
              <h4 className="font-display text-lg font-semibold text-ink">Guia Completo de Aplicação</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Como preparar corretamente, quanto aplicar, quanto tempo deixar agir, como remover e como adaptar à sua rotina.
              </p>
            </div>

            <div className="bg-white border border-rose/10 p-6 rounded-2xl shadow-xs space-y-3 col-span-1 md:col-span-2 lg:col-span-2">
              <div className="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold font-display text-lg">!</div>
              <h4 className="font-display text-lg font-semibold text-red-700">Erros que Anulam os Resultados</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A maioria das pessoas nem percebe que está cometendo pequenos erros, como aplicar na ordem errada, misturar de forma inadequada ou exagerar na frequência. O método ensina exatamente o que evitar.
              </p>
            </div>

          </div>

          {/* SIMPLICIDADE */}
          <div className="mt-16 text-center max-w-2xl mx-auto space-y-4">
            <h4 className="font-display text-xl text-ink font-semibold">Ingredientes simples e fáceis de encontrar</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nada de ativos importados ou cosméticos de centenas de reais. Os ingredientes utilizados fazem parte da rotina de muitas famílias brasileiras. Você provavelmente encontra a maior parte deles no supermercado.
            </p>
            <p className="text-xs font-semibold text-rose">Menos complicação. Mais constância.</p>
          </div>

        </div>
      </section>

      {/* RITUAL IMAGES PASSO A PASSO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-rose font-bold">Simples de Praticar</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-2 mb-10">4 Passos. 15 Minutos.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[n3, n4, n5].map((img, i) => (
              <div key={i} className="bg-cream/20 rounded-3xl p-4 border border-rose/5 shadow-md hover:scale-102 transition-transform duration-300">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img src={img.url} alt={`Passo ${i + 1}`} className="w-full h-64 object-cover" />
                </div>
                <span className="text-xs uppercase tracking-wider text-rose font-bold">Etapa 0{i + 1}</span>
                <p className="text-sm font-semibold text-ink mt-1">Ritual Prático e Passo a Passo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: TEXTURA SEDOSA */}
      <section className="py-20 bg-ink-gradient text-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-rose font-bold">Experiência Sensorial</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Textura sedosa,<br />
                <span className="text-rose">absorção profunda.</span>
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Nada de sensação pesada ou pegajosa. A máscara penetra rápido, hidrata em profundidade e deixa a pele visivelmente mais firme e luminosa.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  "Absorção rápida",
                  "Sem parabenos",
                  "Sem oleosidade",
                  "Fragrância natural"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                    <Check className="h-4 w-4 text-rose shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img src={n6.url} alt="Aplicação da máscara textura" className="w-full h-auto object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* ESTÁTISTICAS */}
      <section className="py-20 bg-cream/20 border-y border-rose/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">Resultados que motivam</span>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">O que as alunas costumam dizer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatRing pct={94} label="notaram a pele visivelmente mais macia em até 3 semanas" />
            <StatRing pct={97} label="perceberam linhas de expressão suavizadas com o uso contínuo" />
            <StatRing pct={96} label="continuariam usando diariamente após o período de teste" />
            <StatRing pct={92} label="recomendariam o método para uma amiga ou familiar" />
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL (TESTEMUNHOS DEPOIMENTOS) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">Opinião de quem testou</span>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">Veja os Depoimentos Reais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: tSandra, text: "Hoje eu me sinto muito mais confiante quando olho no espelho.", name: "Sandra M." },
              { img: tMarlene, text: "Passei anos gastando dinheiro com cosméticos e finalmente encontrei uma rotina que consegui seguir.", name: "Marlene K." },
              { img: tDebora, text: "O melhor de tudo é que virou um momento só meu durante a semana. Eu achei que seria complicado, mas foi muito mais simples.", name: "Débora T." }
            ].map((dep, idx) => (
              <div key={idx} className="bg-cream/10 border border-rose/10 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="overflow-hidden rounded-2xl mb-4 border border-rose/5">
                    <img src={dep.img.url} alt={`Depoimento de ${dep.name}`} className="w-full object-cover aspect-video" />
                  </div>
                  <Stars />
                  <p className="text-sm italic text-muted-foreground mt-4 leading-relaxed">"{dep.text}"</p>
                </div>
                <div className="mt-6 border-t border-rose/10 pt-4">
                  <p className="text-sm font-bold text-ink">{dep.name}</p>
                  <p className="text-xs text-rose font-semibold">Aluna do Método</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RITUAL DIÁRIO STORY */}
      <section className="py-20 bg-cream/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-rose font-bold">Um convite para você</span>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                Um pequeno ritual.<br />
                <span className="text-rose font-semibold">Um grande momento para você.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Vivemos correndo. Sempre existe alguém precisando da nossa atenção. Filhos. Casa. Trabalho. Família. Mas quando foi a última vez que você separou alguns minutos apenas para cuidar de si?
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                O Método Rugas Nunca Mais não é apenas um ebook. É um convite para criar um momento que talvez você esteja adiando há anos. Porque autoestima também se constrói nos pequenos hábitos.
              </p>
            </div>

            <div className="md:col-span-5 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
              <img src={n3.url} alt="Autocuidado no espelho" className="w-full object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO OFERTA / VALOR STACK */}
      <section id="oferta" className="py-20 bg-ink-gradient text-white relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <FloatingPetals />
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-rose/20 border border-rose/30 rounded-full px-4 py-2 text-xs font-semibold text-rose uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Oferta Especial de Lançamento
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-rose uppercase font-bold tracking-wider">Aproveite enquanto o cronômetro está ativo:</p>
              <Countdown />
            </div>
          </div>

          <div className="bg-white text-ink rounded-[2.5rem] border border-rose/10 shadow-2xl overflow-hidden">
            
            {/* Header Oferta */}
            <div className="bg-cream/40 px-8 py-8 border-b border-rose/10 text-center">
              <span className="text-xs uppercase tracking-widest text-rose font-bold">Acesso Imediato</span>
              <h3 className="font-display text-2xl md:text-3xl text-ink mt-1">O que você recebe hoje</h3>
            </div>

            {/* List details */}
            <div className="p-8 md:p-10 space-y-8">
              
              {/* Product stack values */}
              <div className="space-y-4">
                
                <div className="flex justify-between items-center gap-4 border-b border-rose/5 pb-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-rose shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-ink">Ebook Completo Método Rugas Nunca Mais</p>
                      <p className="text-xs text-muted-foreground">O protocolo detalhado com as receitas e passo a passo completo.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-rose font-bold">R$ 197</span>
                </div>

                <div className="flex justify-between items-center gap-4 border-b border-rose/5 pb-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-rose shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-ink">Bônus 1: Guia Corpo dos Sonhos</p>
                      <p className="text-xs text-muted-foreground">Orientações alimentares e receitas simples com alimentos acessíveis.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-rose font-bold">R$ 67</span>
                </div>

                <div className="flex justify-between items-center gap-4 border-b border-rose/5 pb-4">
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-rose shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-ink">Bônus 2: Ritual Matinal de 5 Minutos</p>
                      <p className="text-xs text-muted-foreground">Pequenos hábitos rápidos para começar o dia cuidando de você.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-rose font-bold">R$ 47</span>
                </div>

                <div className="flex justify-between items-center gap-4 pb-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-rose shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-ink">Atualizações Futuras Gratuitas</p>
                      <p className="text-xs text-muted-foreground">Acesso a todas as novas edições e materiais sem pagar a mais.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-rose font-bold">R$ 97</span>
                </div>

              </div>

              {/* Price comparison Box */}
              <div className="bg-cream/30 border border-rose/10 rounded-2xl p-6 text-center space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Valor total se comprado separadamente: <span className="line-through">R$ 408</span>
                </p>
                
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground">Garanta hoje por apenas</p>
                  <p className="font-display text-6xl md:text-7xl font-extrabold text-rose tracking-tight">R$ 27</p>
                  <p className="text-xs text-muted-foreground font-semibold">Pagamento único • Sem mensalidades • Acesso vitalício</p>
                </div>
              </div>

              {/* Secure checkout elements */}
              <div className="space-y-6 pt-2">
                <div className="text-center">
                  <CTA children="QUERO COMEÇAR MEU RITUAL AGORA" block />
                </div>

                {/* Secure icons from user image 2 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-rose/10 pt-6 text-center">
                  <div className="p-3 bg-cream/10 border border-rose/5 rounded-xl">
                    <span className="block text-lg">🛡️</span>
                    <p className="text-xs font-bold text-ink mt-1">Dados Pessoais</p>
                    <p className="text-[10px] text-muted-foreground">100% Protegidos</p>
                  </div>
                  <div className="p-3 bg-cream/10 border border-rose/5 rounded-xl">
                    <span className="block text-lg">🔒</span>
                    <p className="text-xs font-bold text-ink mt-1">Site Confiável</p>
                    <p className="text-[10px] text-muted-foreground">Ambiente Seguro</p>
                  </div>
                  <div className="p-3 bg-cream/10 border border-rose/5 rounded-xl">
                    <span className="block text-lg">💳</span>
                    <p className="text-xs font-bold text-ink mt-1">Dados Financeiros</p>
                    <p className="text-[10px] text-muted-foreground">Criptografados</p>
                  </div>
                  <div className="p-3 bg-cream/10 border border-rose/5 rounded-xl">
                    <span className="block text-lg">📦</span>
                    <p className="text-xs font-bold text-ink mt-1">Acesso Garantido</p>
                    <p className="text-[10px] text-muted-foreground">Entrega no E-mail</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO GARANTIA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border border-rose/15 rounded-3xl p-8 md:p-12 shadow-xl bg-cream/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center">
              <img
                src={seloGarantia.url}
                alt="Selo Garantia de 30 Dias"
                className="w-48 h-auto mx-auto hover:rotate-6 transition-transform duration-300"
              />
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-rose font-bold">Risco Zero Financeiro</span>
              <h3 className="font-display text-2xl md:text-3xl text-ink">Garantia Incondicional de 30 Dias</h3>
              
              <p className="text-sm leading-relaxed text-muted-foreground">
                Experimente o Método Rugas Nunca Mais. Leia o material, conheça as receitas e coloque o protocolo em prática conforme as orientações.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Se dentro do prazo de garantia de 30 dias você concluir que o conteúdo não fez sentido para você, basta solicitar o reembolso. Você recebe seu dinheiro de volta sem complicação. O risco financeiro fica totalmente conosco.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
      <section className="py-20 bg-cream/10 border-t border-rose/5">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-rose font-bold">Dúvidas Frequentes</span>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">Ainda está em dúvida?</h2>
            <p className="text-sm text-muted-foreground mt-2">Separamos as respostas para as perguntas mais comuns.</p>
          </div>

          <div className="space-y-4">
            <FAQ
              q="E se eu nunca tiver feito nenhuma máscara caseira?"
              a="Não tem problema algum! O material foi criado justamente para iniciantes. Todo o protocolo e preparação é explicado de forma simples, direta e passo a passo."
            />
            <FAQ
              q="Vou precisar comprar produtos caros?"
              a="Não. A proposta do método é ensinar receitas utilizando ingredientes acessíveis que fazem parte da rotina de muitas famílias brasileiras, fáceis de encontrar no supermercado."
            />
            <FAQ
              q="Quanto tempo demora a rotina?"
              a="A rotina foi planejada para caber na vida de mulheres que têm pouco tempo. Cada aplicação de máscara leva apenas 15 minutos e é feita poucas vezes por semana."
            />
            <FAQ
              q="Preciso sair de casa para os rituais?"
              a="Não. Todo o protocolo pode ser realizado no conforto e privacidade do seu lar, sem equipamentos ou clínicas."
            />
            <FAQ
              q="Recebo o livro físico em minha casa?"
              a="Não. O acesso ao Método Rugas Nunca Mais é digital. Assim que o pagamento for confirmado, você receberá o ebook e todos os bônus imediatamente em seu e-mail para abrir no celular, tablet ou computador."
            />
            <FAQ
              q="Como funciona a garantia?"
              a="Você tem 30 dias inteiros para experimentar o método. Se achar que não ajudou ou não gostou do conteúdo, basta nos enviar um e-mail solicitando o reembolso. Devolvemos o valor integral."
            />
          </div>

          {/* Três caminhos conclusivos */}
          <div className="mt-16 bg-white border border-rose/10 rounded-3xl p-8 shadow-sm space-y-6">
            <h4 className="font-display text-xl text-center text-ink font-semibold">Existem três caminhos a partir daqui:</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2 p-4 bg-cream/10 rounded-xl border border-rose/5">
                <span className="font-bold text-rose">1. Fechar esta página</span>
                <p className="text-xs text-muted-foreground">Continuar procurando cremes caros todos os meses esperando que o próximo faça milagres.</p>
              </div>
              <div className="space-y-2 p-4 bg-cream/10 rounded-xl border border-rose/5">
                <span className="font-bold text-rose">2. Continuar adiando</span>
                <p className="text-xs text-muted-foreground">Dizer "depois eu vejo". As semanas passam, os meses passam e nada na sua pele ou autoestima muda.</p>
              </div>
              <div className="space-y-2 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-700">3. Começar hoje</span>
                <p className="text-xs text-muted-foreground">Criar uma rotina simples, reservar alguns minutos para você e redescobrir a confiança ao se olhar no espelho.</p>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm font-semibold text-ink italic mb-4">Talvez este seja o momento de cuidar da única pessoa que sempre esteve ao seu lado: Você.</p>
              <CTA children="QUERO COMEÇAR O MÉTODO RUGAS NUNCA MAIS AGORA" />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/70 py-12 px-4 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-rose animate-spin-slow" />
            <span className="font-display text-lg font-bold tracking-wider uppercase text-white">Método Rugas Nunca Mais</span>
          </div>

          <div className="flex justify-center gap-6 text-xs text-white/50 border-y border-white/10 py-4 max-w-lg mx-auto">
            <span>🔒 Compra Protegida</span>
            <span>📱 Acesso Imediato</span>
            <span>💳 Pagamento Seguro</span>
            <span>📖 Ebook Digital</span>
          </div>

          <p className="text-[11px] text-white/40 max-w-3xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você saia do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos o possível para indicar claramente todos os termos e resultados.
          </p>

          <div className="text-xs text-white/30 pt-4">
            <p>© {new Date().getFullYear()} Método Rugas Nunca Mais • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
mx-auto">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Resultados podem variar de pessoa para pessoa.</p>
      </footer>
    </main>
  );
}
