import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Clock, Lock, ChevronDown, ArrowRight, Sparkles, ChevronsLeftRight, Heart, Award, Coffee, BookOpen, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { "media-id"?: string; aspect?: string }, HTMLElement>;
    }
  }
}

const n1 = { url: "/1.png" };
const n2 = { url: "/2.png" };
const n3 = { url: "/3.png" };
const n4 = { url: "/4.png" };
const n5 = { url: "/5.png" };
const n6 = { url: "/6.png" };
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
  const petals = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-petal {
          0% { transform: translateY(-10%) rotate(0deg) translateX(0px); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(80px); opacity: 0; }
        }
        .rose-petal {
          position: absolute;
          background: linear-gradient(135deg, rgba(254,219,223,0.6) 0%, rgba(243,156,168,0.3) 100%);
          border-radius: 70% 20% 60% 20%;
          transform-origin: center;
          animation: float-petal 20s linear infinite;
        }
      `}} />
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const size = 10 + Math.random() * 18;
        const delay = Math.random() * -20;
        const duration = 15 + Math.random() * 10;
        return (
          <div
            key={i}
            className="rose-petal"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * 1.4}px`,
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
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#C84B61] px-6 py-4 md:px-8 md:py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_10px_25px_-5px_rgba(200,75,97,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(200,75,97,0.6)] whitespace-nowrap ${block ? "w-full overflow-hidden" : "max-w-full"}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C84B61] to-[#E2697E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}

function Stars({ size = "h-4 w-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5 text-rose-400">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`${size} fill-current`} />)}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#FFE4E8] bg-white rounded-2xl px-6 mb-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-lg font-medium text-[#4A3B39] md:text-xl">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#C84B61] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-[15px] leading-relaxed text-[#6E5A58]">{a}</p>
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
    <div className="flex items-center gap-2 font-mono text-2xl tabular-nums text-[#C84B61] md:text-3xl">
      <span className="rounded-lg bg-[#FFE4E8] px-3 py-1.5 font-bold">{pad(t.h)}</span>:
      <span className="rounded-lg bg-[#FFE4E8] px-3 py-1.5 font-bold">{pad(t.m)}</span>:
      <span className="rounded-lg bg-[#FFE4E8] px-3 py-1.5 font-bold">{pad(t.s)}</span>
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
        className="relative aspect-square w-full select-none overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl bg-white"
        onMouseDown={(e) => start(e.clientX)}
        onTouchStart={(e) => start(e.touches[0].clientX)}
      >
        <img src={depoisImg.url} alt="Depois" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={antesImg.url} alt="Antes" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-xs px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C84B61] shadow-sm">Antes</span>
        <span className="absolute right-4 top-4 rounded-full bg-[#C84B61]/90 backdrop-blur-xs px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">Depois</span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-1 bg-white shadow-[0_0_15px_rgba(200,75,97,0.5)]" />
        </div>
        <button
          type="button"
          aria-label="Arraste para comparar"
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-white bg-[#C84B61] text-white shadow-2xl active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform"
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
        className="mt-5 w-full accent-[#C84B61] cursor-pointer"
      />
    </div>
  );
}

function StatRing({ pct, label }: { pct: number; label: string }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-[#FFE4E8] shadow-sm">
      <div className="relative flex items-center justify-center shrink-0 w-20 h-20">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-[#FFE4E8]"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-[#C84B61]"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xl font-bold font-display text-[#4A3B39]">{pct}%</span>
      </div>
      <p className="text-sm font-medium text-[#6E5A58]">{label}</p>
    </div>
  );
}

function SkincareTabs() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: "Receita 1", subtitle: "Primeiro Passo", img: n3.url, text: "Uma combinação de ingredientes utilizada como primeiro passo do protocolo. Você aprende as proporções, o preparo e a aplicação corretos, além do tempo ideal e da frequência." },
    { title: "Receita 2", subtitle: "Segunda Etapa", img: n4.url, text: "A segunda etapa do protocolo, criada especificamente para complementar o ritual e potencializar toda a rotina." },
    { title: "Receita 3", subtitle: "Fechamento", img: n5.url, text: "O fechamento do protocolo com orientações detalhadas para manter a regularidade e fixar os cuidados da pele." },
    { title: "Guia Geral", subtitle: "Aplicação Prática", img: n6.url, text: "Aprenda como preparar corretamente, quanto aplicar, quanto tempo deixar agir, como remover e quando repetir." }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 space-y-3">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${activeTab === idx ? "border-[#C84B61] bg-[#FFF0F2] shadow-sm" : "border-[#FFE4E8] bg-white hover:border-[#C84B61]/40"}`}
          >
            <div>
              <p className={`font-display text-lg font-bold ${activeTab === idx ? "text-[#C84B61]" : "text-[#4A3B39]"}`}>{tab.title}</p>
              <p className="text-xs text-[#6E5A58]">{tab.subtitle}</p>
            </div>
            <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${activeTab === idx ? "translate-x-1 text-[#C84B61]" : "text-[#6E5A58]/50"}`} />
          </button>
        ))}
      </div>
      
      <div className="lg:col-span-7 bg-white p-6 rounded-[2.5rem] border border-[#FFE4E8] shadow-xl flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-md">
          <img src={tabs[activeTab].img} alt={tabs[activeTab].title} className="w-full h-64 object-cover" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Conteúdo do Ebook</span>
          <h4 className="font-display text-2xl font-bold text-[#4A3B39]">{tabs[activeTab].title}</h4>
          <p className="text-sm leading-relaxed text-[#6E5A58]">{tabs[activeTab].text}</p>
        </div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF5F6] via-[#FFFDFD] to-[#FFF0F2] text-[#4A3B39] relative">
      
      {/* FLOATING ROSE PETALS */}
      <FloatingPetals />

      {/* BRAND HEADER */}
      <header className="py-6 px-4 border-b border-[#FFE4E8] bg-white/60 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#C84B61]" />
            <span className="font-display text-lg md:text-xl font-bold tracking-wider uppercase text-[#C84B61]">Método Rugas Nunca Mais</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold bg-[#FFF0F2] text-[#C84B61] px-3 py-1 rounded-full border border-[#FFE4E8]">
            <ShieldCheck className="h-4 w-4" /> Garantia Incondicional de 30 Dias
          </span>
        </div>
      </header>

      {/* HERO SECTION - SPLIT LAYOUT WITH BEFORE/AFTER ON TOP */}
      <section className="relative pt-8 pb-20 px-4 md:pt-16 md:pb-24 z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile-only header layout: Title + Badge + Slider */}
          <div className="flex flex-col items-center text-center gap-4 mb-8 lg:hidden">
            <div className="flex items-center justify-center gap-2 text-[#C84B61]">
              <Sparkles className="h-6 w-6 shrink-0" />
              <h2 className="font-display text-2xl font-bold tracking-wider uppercase">
                Método Rugas Nunca Mais
              </h2>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-[#FFF0F2] border border-[#FFE4E8] rounded-full px-4 py-2 text-xs font-semibold text-[#C84B61] uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Ritual de Beleza Caseiro
            </div>
            
            {/* BeforeAfter Image Slider right below it on mobile */}
            <div className="w-full max-w-[480px] my-4">
              <BeforeAfter />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#C84B61]">
                Arraste para ver a transformação
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 space-y-8 flex flex-col text-center lg:text-left">
              {/* Desktop-only Title & Badge */}
              <div className="hidden lg:block space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#FFF0F2] border border-[#FFE4E8] rounded-full px-4 py-2 text-xs font-semibold text-[#C84B61] uppercase tracking-widest">
                  <Sparkles className="h-3.5 w-3.5" /> Ritual de Beleza Caseiro
                </div>
                
                <h1 className="font-display text-3xl leading-[1.15] text-[#4A3B39] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                  Realce sua beleza de dentro para fora, com cuidados que <span className="text-[#C84B61] font-semibold italic underline decoration-[#C84B61]/30">fazem a diferença</span>.
                </h1>
              </div>

              {/* Mobile-only Description Heading */}
              <h1 className="block lg:hidden font-display text-2xl leading-[1.15] text-[#4A3B39] sm:text-3xl">
                Realce sua beleza de dentro para fora, com cuidados que <span className="text-[#C84B61] font-semibold italic underline decoration-[#C84B61]/30">fazem a diferença</span>.
              </h1>
              
              <p className="text-base md:text-lg leading-relaxed text-[#6E5A58] max-w-2xl mx-auto lg:mx-0">
                Descubra o passo a passo de uma máscara natural inspirada em estudos sobre antioxidantes e renovação da pele, utilizando ingredientes simples e acessíveis que podem fazer parte da sua rotina de autocuidado — sem depender de procedimentos caros ou dolorosos.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  "Apenas 15 minutos por aplicação",
                  "Ingredientes fáceis de encontrar",
                  "Rotina simples para fazer em casa",
                  "Ebook com acesso imediato",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/90 border border-[#FFE4E8] rounded-2xl p-4 shadow-sm">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF0F2] text-[#C84B61] border border-[#FFE4E8]">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#4A3B39]/90">{text}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-center lg:justify-start">
                  <CTA children="QUERO REALÇAR MINHA BELEZA" />
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-[#6E5A58] pt-2">
                  <div className="flex items-center gap-2">
                    <Stars />
                    <span className="font-bold text-[#4A3B39]">4,9 de 5</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <span>Mais de 3.200 mulheres já adquiriram</span>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#6E5A58]/80 border-t border-[#FFE4E8] pt-4">
                  <div className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-[#C84B61]" /> Pagamento seguro</div>
                  <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#C84B61]" /> Acesso imediato</div>
                  <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#C84B61]" /> Garantia de 30 dias</div>
                </div>
              </div>
            </div>

            {/* Right Column: BEFORE/AFTER SLIDER ON DESKTOP */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFF0F2] to-amber-200/10 rounded-[2.5rem] blur-3xl opacity-60 pointer-events-none" />
              <div className="relative text-center">
                <BeforeAfter />
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#C84B61]">Arraste para ver a transformação</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MARQUEE BAR */}
      <div className="bg-[#C84B61] text-[#FFF0F2] py-4 overflow-hidden border-y border-[#FFE4E8]/20 relative z-10">
        <div className="flex whitespace-nowrap text-xs md:text-sm gap-8 justify-center flex-wrap px-4 font-semibold uppercase tracking-wider">
          <span>✓ Amenização de Rugas</span>
          <span>✓ Redução de Linhas de Expressão</span>
          <span>✓ Hidratação Profunda</span>
          <span>✓ Proteção Antioxidante</span>
          <span>✓ Ingredientes Naturais</span>
          <span>✓ Ritual de 15 Minutos</span>
        </div>
      </div>

      {/* SEÇÃO 2: NÃO É SOBRE MUDAR QUEM VOCÊ É (FLANKED LAYOUT FROM REFERENCE IMAGE 1) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Autoaceitação</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.2] mt-3 text-[#4A3B39]">
              Não é sobre mudar quem você é!<br />É sobre se reconhecer no espelho.
            </h2>
            <div className="h-1 w-20 bg-[#FFE4E8] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 2 Text Blocks */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-2 text-center lg:text-right">
                <h4 className="font-display text-xl font-bold text-[#C84B61]">Já tentei de tudo, mas nada funcionou</h4>
                <p className="text-sm leading-relaxed text-[#6E5A58]">
                  Você não precisa desistir da sua pele. Aqui você encontra orientações reais para criar uma rotina simplificada e natural.
                </p>
              </div>
              <div className="space-y-2 text-center lg:text-right">
                <h4 className="font-display text-xl font-bold text-[#C84B61]">Tenho medo de exageros e resultados artificiais</h4>
                <p className="text-sm leading-relaxed text-[#6E5A58]">
                  Nosso método é natural, gradual e respeita sua essência, sempre com segurança para sua saúde.
                </p>
              </div>
            </div>

            {/* Central Column: Circular/Rounded Woman Skincare Image */}
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block rounded-[3rem] overflow-hidden border-8 border-[#FFF0F2] shadow-2xl max-w-xs mx-auto">
                <img src={n7.url} alt="Cuidado natural da pele" className="w-full object-cover aspect-[3/4]" />
              </div>
            </div>

            {/* Right Column: 2 Text Blocks */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-2 text-center lg:text-left">
                <h4 className="font-display text-xl font-bold text-[#C84B61]">Não tenho tempo pra mim</h4>
                <p className="text-sm leading-relaxed text-[#6E5A58]">
                  A agenda é rápida e o atendimento acolhedor. Cuidar de si não precisa ser um peso na sua rotina.
                </p>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <h4 className="font-display text-xl font-bold text-[#C84B61]">Não sei se vou me sentir à vontade</h4>
                <p className="text-sm leading-relaxed text-[#6E5A58]">
                  O acolhimento é o primeiro passo. Você será ouvida, respeitada e cuidada do seu jeito.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <CTA children="QUERO MEU RITUAL AGORA" />
          </div>

        </div>
      </section>

      {/* SEÇÃO 2 COPY: REFLEXÃO SOBRE A PELE */}
      <section className="py-20 bg-[#FFF5F6]/40 border-y border-[#FFE4E8]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-display text-2xl md:text-3xl text-[#4A3B39]">Talvez o problema não seja a sua idade.</h3>
          <p className="text-lg text-[#C84B61] font-semibold italic">E nem a falta de cremes. Muito menos a quantidade de colágeno que você já tentou tomar.</p>
          <div className="h-0.5 w-16 bg-[#FFE4E8] mx-auto rounded-full" />
          <p className="text-base leading-relaxed text-[#6E5A58] max-w-2xl mx-auto">
            A verdade é que muitas mulheres passam anos investindo em cosméticos caros, séruns importados, cápsulas, procedimentos e tratamentos estéticos... sem nunca entender o que realmente influencia a aparência da pele ao longo do tempo.
          </p>
          <p className="text-base leading-relaxed text-[#6E5A58] max-w-2xl mx-auto">
            Enquanto isso... Todos os dias sua pele continua sendo exposta ao sol, à poluição, ao estresse e a outros fatores ambientais que fazem parte da rotina.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="bg-[#4A3B39] text-[#FFF5F6] rounded-2xl p-6 text-center shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FFF0F2] mx-auto flex items-center justify-center text-xl mb-4">🌿</div>
              <h3 className="font-display text-lg font-bold mb-2">Resultado Percebido em Semanas</h3>
              <p className="text-sm text-[#FFF5F6]/85">A rotina ajuda a suavizar linhas de expressão desde as primeiras aplicações consistentes.</p>
            </div>
            <div className="bg-white border-2 border-[#4A3B39] text-[#4A3B39] rounded-2xl p-6 text-center shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FFF0F2] mx-auto flex items-center justify-center text-xl mb-4">💧</div>
              <h3 className="font-display text-lg font-bold mb-2 text-[#4A3B39]">Hidratação Intensa e Duradoura</h3>
              <p className="text-sm text-[#6E5A58]">Ingredientes naturais ajudam a pele a reter mais hidratação, com sensação de maciez.</p>
            </div>
            <div className="bg-[#4A3B39] text-[#FFF5F6] rounded-2xl p-6 text-center shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FFF0F2] mx-auto flex items-center justify-center text-xl mb-4">✨</div>
              <h3 className="font-display text-lg font-bold mb-2">Envelheça Mais Devagar</h3>
              <p className="text-sm text-[#FFF5F6]/80">A combinação de antioxidantes ajuda a proteger a pele do estresse oxidativo diário.</p>
            </div>
          </div>
          <p className="text-sm text-[#6E5A58] italic pt-4">
            Não porque você deixou de ser bonita. Mas porque você sente que sua aparência já não acompanha a mulher que continua sendo por dentro.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3: VOCÊ JÁ SENTIU QUE... (AUTOANÁLISE) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Autoanálise</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] mt-2">Você já sentiu que...</h2>
            <div className="h-1 w-12 bg-[#FFE4E8] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "✓ Compra um creme novo cheia de esperança... mas depois de algumas semanas percebe que quase nada mudou?",
              "✓ Passa maquiagem apenas para esconder aquilo que gostaria de não enxergar?",
              "✓ Evita fotos de perto.",
              "✓ Aumenta o espelho para procurar \"defeitos\".",
              "✓ Sente que sua pele perdeu o brilho de alguns anos atrás.",
              "✓ Já pensou: \"Será que agora só um procedimento resolve?\""
            ].map((text, idx) => (
              <div key={idx} className="flex gap-4 bg-[#FFF5F6]/30 border border-[#FFE4E8] p-5 rounded-2xl hover:border-[#C84B61]/30 transition-all duration-300">
                <div className="text-[#C84B61] text-lg font-bold shrink-0">✓</div>
                <p className="text-[15px] leading-relaxed text-[#4A3B39]/90">{text.replace("✓", "").trim()}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-[#FFF0F2] border border-[#FFE4E8] text-[#C84B61] font-bold text-sm md:text-base rounded-full px-8 py-4 shadow-sm">
              Se respondeu "sim" para qualquer uma dessas perguntas... Saiba que você não está sozinha.
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: O MERCADO ENSINA A COMPRAR VS CUIDAR */}
      <section className="py-20 bg-[#FFF0F2]/40 border-y border-[#FFE4E8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Diferença Crucial</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] leading-tight">
                O mercado ensina você a comprar.<br />
                <span className="text-[#C84B61] italic font-semibold">Nós queremos ensinar você a cuidar.</span>
              </h2>
              <p className="text-base text-[#6E5A58] leading-relaxed">
                Existe uma diferença enorme. Todos os meses surge um novo creme. Uma nova cápsula. Um novo sérum. Uma nova promessa.
              </p>
              <p className="text-base text-[#6E5A58] leading-relaxed">
                Mas poucas pessoas falam sobre algo muito mais importante: criar uma rotina consistente que ajude sua pele a receber os cuidados certos. Porque nenhum produto faz milagres se você não entende como cuidar da pele de forma inteligente.
              </p>
              <p className="text-base font-semibold text-[#C84B61]">
                Foi justamente por isso que nasceu o Método Rugas Nunca Mais.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-white p-6 rounded-[2rem] border border-[#FFE4E8] shadow-lg space-y-4">
              <h4 className="font-display text-lg font-bold text-[#4A3B39]">Método Rugas Nunca Mais</h4>
              <p className="text-xs text-[#6E5A58] leading-relaxed">
                Um protocolo simples, inspirado em ingredientes naturais conhecidos por suas propriedades antioxidantes. Reúne receitas e orientações para preparar máscaras caseiras utilizando ingredientes comuns e acessíveis.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-[#FFF0F2] text-[#C84B61] px-3 py-1 rounded-full border border-[#FFE4E8] font-bold">Sem Equipamentos</span>
                <span className="text-xs bg-[#FFF0F2] text-[#C84B61] px-3 py-1 rounded-full border border-[#FFE4E8] font-bold">Sem Clínicas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 DO LAYOUT DE REFERÊNCIA: TRATAMENTOS PENSADOS PARA CUIDAR DE VOCÊ (CARDS COM SIGLA/LETRA) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Estrutura do Ebook</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39]">
              Tratamentos pensados para cuidar de você
            </h2>
            <p className="text-sm text-[#6E5A58] mt-2">Do primeiro toque ao resultado final • Conheça nossos protocolos</p>
            <div className="h-1 w-20 bg-[#FFE4E8] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "1", title: "Primeiro Passo do Protocolo", desc: "Uma combinação de ingredientes utilizada como primeira máscara do ritual, preparando a pele para a absorção." },
              { id: "2", title: "Complementação e Nutrição", desc: "A segunda etapa do protocolo. Criada para nutrir e potencializar toda a rotina antioxidante celular." },
              { id: "3", title: "Fechamento do Protocolo", desc: "Com orientações detalhadas para manter a regularidade e os cuidados da pele ao longo da semana." },
              { id: "G", title: "Guia Completo de Aplicação", desc: "Você aprende como preparar corretamente, quanto aplicar, quanto tempo deixar agir e como remover." },
              { id: "E", title: "Erros Comuns de Skincare", desc: "Entenda pequenos hábitos errados que praticamente anulam os resultados da máscara natural." },
              { id: "S", title: "Simplicidade e Constância", desc: "Como adaptar o protocolo à sua rotina real, sem complicar ou depender de produtos de centenas de reais." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-[#FFE4E8] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-[#C84B61] text-white flex items-center justify-center font-bold text-lg rounded-lg shadow-sm">
                  {card.id}
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-[#4A3B39]">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-[#6E5A58]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <CTA children="QUERO COMEÇAR AGORA" />
          </div>

        </div>
      </section>

      {/* SEÇÃO 6: ANTIOXIDANTES (CIÊNCIA E PELE) */}
      <section className="py-20 bg-[#FFF5F6]/40 border-y border-[#FFE4E8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
                <img src={n1.url} alt="Ingredientes ricos em antioxidantes" className="w-full object-cover" />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Por que Antioxidantes?</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] leading-tight">
                Por que tanta gente fala sobre antioxidantes quando o assunto é pele?
              </h2>
              <p className="text-base text--[#6E5A58] leading-relaxed">
                Todos os dias nossa pele entra em contato com fatores externos como radiação solar, poluição, estresse, poeira e fumaça. Esses fatores podem contribuir para o estresse oxidativo da pele ao longo do tempo.
              </p>
              <p className="text-base text--[#6E5A58] leading-relaxed">
                É justamente por isso que ingredientes naturalmente ricos em compostos antioxidantes despertam tanto interesse em pesquisas relacionadas aos cuidados com a pele. No Método Rugas Nunca Mais você aprende como utilizar essa combinação na sua rotina.
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-2">
                {["Radiação Solar", "Poluição", "Estresse", "Poeira", "Fumaça"].map((item, idx) => (
                  <span key={idx} className="bg-white border border-[#FFE4E8] text-xs font-semibold px-4 py-2 rounded-full text-[#C84B61] shadow-xs">
                    ⚠️ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 DO LAYOUT DE REFERÊNCIA: CONHEÇA NOSSO ESPAÇO (INTERACTIVE TABS DESIGN) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">O Ritual em Detalhes</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39]">Conheça nosso espaço e protocolo</h2>
            <p className="text-sm text-[#6E5A58] mt-2">Clique nas guias abaixo para entender a sequência lógica dos cuidados</p>
            <div className="h-1 w-20 bg-[#FFE4E8] mx-auto mt-4 rounded-full" />
          </div>

          <SkincareTabs />

        </div>
      </section>

      {/* SEÇÃO 7 & 8: O VERDADEIRO OBJETIVO E IMAGINE (CONVITE AO AUTOCUIDADO) */}
      <section className="py-20 bg-[#FFF0F2]/40 border-y border-[#FFE4E8]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">O Verdadeiro Objetivo</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#4A3B39]">O verdadeiro objetivo não é esconder a sua pele. É cuidar dela.</h2>
          <div className="h-0.5 w-16 bg-[#FFE4E8] mx-auto rounded-full" />
          <p className="text-base leading-relaxed text-[#6E5A58] max-w-3xl mx-auto">
            Você não precisa parecer outra pessoa. Você não precisa buscar um rosto artificial. Você não precisa viver com medo do envelhecimento. O que muitas mulheres procuram, na verdade, é muito mais simples. Elas querem olhar para o espelho e reconhecer novamente a própria beleza. Querem sentir prazer em sair sem tanta maquiagem, receber elogios, voltar a sorrir nas fotos e sentir que continuam bonitas.
          </p>

          <div className="bg-white border border-[#FFE4E8] p-8 md:p-10 rounded-[2.5rem] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left mt-12">
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-display text-2xl font-bold text-[#C84B61]">Imagine reservar apenas 15 minutos...</h4>
              <p className="text-sm leading-relaxed text-[#6E5A58]">
                Enquanto o café passa... Enquanto escuta sua música favorita... Enquanto lê um livro...
              </p>
              <p className="text-sm leading-relaxed text-[#6E5A58]">
                Você transforma esse momento em um ritual exclusivamente seu. Sem pressa. Sem pressão. Sem agulhas. Sem desconforto. Um momento para desacelerar, respirar e cuidar da pessoa mais importante da sua vida: Você.
              </p>
            </div>
            
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
              <img src={n2.url} alt="Momento relaxante no ritual" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 / COMPARE: WOMAN 1 VS WOMAN 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Por que ter um Método?</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39]">O que torna esse método diferente?</h2>
            <p className="text-sm text-[#6E5A58] mt-2">A internet está cheia de receitas caseiras soltas, mas receitas soltas não criam rotina.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50/40 border border-red-100 p-6 rounded-2xl space-y-4">
              <h4 className="font-display text-lg font-bold text-red-700 flex items-center gap-2">
                <span>❌</span> Mulher sem Protocolo
              </h4>
              <p className="text-xs text-[#6E5A58]">
                Procura vídeos aleatórios na internet. Cada vídeo ensina uma coisa diferente. Cada blogueira recomenda um tempo diferente. Cada receita muda completamente.
              </p>
              <ul className="text-xs text-[#6E5A58] space-y-2 pt-2">
                <li>• Não sabe as quantidades exatas dos ingredientes</li>
                <li>• Fica na dúvida se deve aplicar antes ou depois de lavar</li>
                <li>• Acaba usando ingredientes incompatíveis</li>
                <li className="font-semibold text-red-600">• Testa, erra, se frustra e desiste no caminho</li>
              </ul>
            </div>

            <div className="bg-emerald-50/40 border border-emerald-100 p-6 rounded-2xl space-y-4">
              <h4 className="font-display text-lg font-bold text-emerald-700 flex items-center gap-2">
                <span>✅</span> Mulher com o Método
              </h4>
              <p className="text-xs text-[#6E5A58]">
                Apenas abre o ebook Método Rugas Nunca Mais. Segue exatamente o passo a passo lógico do protocolo, sem dúvidas, sem improvisos e sem perda de tempo.
              </p>
              <ul className="text-xs text-[#6E5A58] space-y-2 pt-2">
                <li>• Sabe exatamente as proporções e o preparo</li>
                <li>• Sabe a frequência ideal de aplicação na semana</li>
                <li>• Conhece os erros comuns de pele a evitar</li>
                <li className="font-semibold text-emerald-700">• Cria consistência e vê os resultados no espelho</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL PASSO A PASSO (IMAGENS 3, 4 E 5) */}
      <section className="py-20 bg-[#FFF5F6]/40 border-y border-[#FFE4E8]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Roteiro Visual</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] mt-2 mb-12">4 passos simples. 15 minutos de autocuidado.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[n3, n4, n5].map((img, i) => (
              <div key={i} className="bg-white rounded-3xl p-4 border border-[#FFE4E8] shadow-md hover:scale-102 transition-transform duration-300">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img src={img.url} alt={`Passo ${i + 1}`} className="w-full h-64 object-cover" />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#C84B61] font-bold">Passo 0{i + 1}</span>
                <p className="text-sm font-semibold text-[#4A3B39] mt-1">Aplicação Fácil e Rápida</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTURA SEDOSA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Textura e Sensação</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#4A3B39] leading-tight">
                Textura sedosa,<br /><span className="text-[#C84B61]">absorção profunda.</span>
              </h2>
              <p className="text-base text-[#6E5A58] leading-relaxed">
                Nada de sensação pesada ou pegajosa na pele. A máscara natural penetra rápido, hidrata em profundidade e deixa a pele visivelmente mais firme e luminosa já nas primeiras semanas.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {["Absorção rápida", "Sem parabenos", "Sem oleosidade", "Fragrância natural"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#4A3B39]/90 font-medium">
                    <Check className="h-4 w-4 text-[#C84B61]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-[2rem] overflow-hidden border-8 border-[#FFF0F2] shadow-xl">
              <img src={n6.url} alt="Máscara natural" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ESTÁTISTICAS DO TESTE */}
      <section className="py-20 bg-[#FFF5F6]/40 border-y border-[#FFE4E8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Eficácia Comprovada</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] mt-2">O que as alunas costumam dizer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatRing pct={94} label="notaram a pele visivelmente mais macia em até 3 semanas" />
            <StatRing pct={97} label="perceberam linhas de expressão suavizadas com o uso contínuo" />
            <StatRing pct={96} label="continuariam usando diariamente após o período de teste" />
            <StatRing pct={92} label="recomendariam o método para uma amiga ou familiar" />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS REAL COM FOTO (IMAGENS SANDRA, MARLENE E DEBORA) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Opinião de quem testou</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] mt-2">O que as alunas costumam dizer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: tSandra, text: "Hoje eu me sinto muito mais confiante quando olho no espelho.", name: "Sandra M." },
              { img: tMarlene, text: "Passei anos gastando dinheiro com cosméticos e finalmente encontrei uma rotina que consegui seguir.", name: "Marlene K." },
              { img: tDebora, text: "O melhor de tudo é que virou um momento só meu durante a semana. Eu achei que seria complicado, mas foi muito mais simples do que imaginava.", name: "Débora T." }
            ].map((dep, idx) => (
              <div key={idx} className="bg-white border border-[#FFE4E8] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden rounded-2xl mb-4 border border-[#FFF0F2]">
                    <img src={dep.img.url} alt={`Depoimento de ${dep.name}`} className="w-full object-cover aspect-video" />
                  </div>
                  <Stars />
                  <p className="text-sm italic text-[#6E5A58] mt-4 leading-relaxed">"{dep.text}"</p>
                </div>
                <div className="mt-6 border-t border-[#FFE4E8] pt-4">
                  <p className="text-sm font-bold text-[#4A3B39]">{dep.name}</p>
                  <p className="text-xs text-[#C84B61] font-semibold">Aluna do Método</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#FFE4E8]">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
                alt="Mulher satisfeita com o resultado"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#4A3B39] leading-tight">
                Mais de 3.200 mulheres já transformaram sua rotina de cuidado com o Método Rugas Nunca Mais
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Aluna" />
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Aluna" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Aluna" />
                </div>
                <span className="text-sm text-[#6E5A58] font-semibold">4,9 (+3.200 avaliações)</span>
              </div>
              <Stars />
              <p className="text-sm text-[#6E5A58] leading-relaxed">
                E você pode ser a próxima. Experimente por 30 dias sem risco — se não gostar, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 DO LAYOUT DE REFERÊNCIA: SOBRE MIM (FEMININE EXPERT BRIEF) */}
      <section className="py-20 bg-[#FFF5F6]/40 border-y border-[#FFE4E8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left: Professional Skincare Expert image */}
            <div className="md:col-span-5 relative text-center">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFE4E8] to-transparent rounded-[3rem] blur-xl opacity-60" />
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-xl max-w-xs mx-auto">
                <img src={n8.url} alt="Método Rugas Nunca Mais" className="w-full object-cover aspect-[3/4]" />
              </div>
            </div>

            {/* Right: biography text */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Sobre Mim</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39]">Método Rugas Nunca Mais</h2>
              <div className="h-1 w-16 bg-[#FFE4E8] rounded-full" />
              
              <p className="text-sm leading-relaxed text-[#6E5A58]">
                Desenvolvido com o intuito de trazer a ciência da fitoterapia e o poder dos antioxidantes de forma prática para dentro do lar. Entendemos que a beleza real e duradoura é construída nos pequenos rituais repetidos ao longo do tempo, e não apenas no consumo de cremes milagrosos.
              </p>
              <p className="text-sm leading-relaxed text-[#6E5A58]">
                Nossa missão é acolher e guiar cada mulher na jornada de redescobrir a autoconfiança de forma consciente, saudável, respeitando a própria essência e a saúde natural da pele.
              </p>
              
              <div className="pt-4 border-t border-[#FFE4E8]">
                <p className="font-display text-xl italic text-[#C84B61]">Equipe Rugas Nunca Mais</p>
                <p className="text-xs text-[#6E5A58]">Cuidados e Rituais Naturais</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO OFERTA / VALOR STACK */}
      <section id="oferta" className="py-20 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFF0F2] border border-[#FFE4E8] rounded-full px-4 py-2 text-xs font-semibold text-[#C84B61] uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Oferta Especial de Lançamento
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-[#C84B61] uppercase font-bold tracking-wider">Aproveite enquanto o cronômetro está ativo:</p>
              <Countdown />
            </div>
          </div>

          <div className="bg-white text-[#4A3B39] rounded-[2.5rem] border border-[#FFE4E8] shadow-2xl overflow-hidden">
            
            <div className="bg-[#FFF0F2] px-8 py-8 border-b border-[#FFE4E8] text-center">
              <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Acesso Imediato</span>
              <h3 className="font-display text-2xl md:text-3xl text-[#4A3B39] mt-1">Veja tudo o que você recebe hoje</h3>
            </div>

            <div className="p-8 md:p-10 space-y-8">
              
              <div className="space-y-4">
                
                <div className="flex justify-between items-center gap-4 border-b border-[#FFE4E8] pb-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-[#C84B61] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-[#4A3B39]">Ebook Completo Método Rugas Nunca Mais</p>
                      <p className="text-xs text-[#6E5A58]">O protocolo detalhado com as receitas e passo a passo completo.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-[#C84B61] font-bold">R$ 197</span>
                </div>

                <div className="flex justify-between items-center gap-4 border-b border-[#FFE4E8] pb-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#C84B61] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-[#4A3B39]">Bônus: Guia Corpo dos Sonhos</p>
                      <p className="text-xs text-[#6E5A58]">Receitas simples e um plano alimentar prático para complementar sua rotina.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-[#C84B61] font-bold">R$ 67</span>
                </div>

                <div className="flex justify-between items-center gap-4 border-b border-[#FFE4E8] pb-4">
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-[#C84B61] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-[#4A3B39]">Ritual Matinal Anti-Idade</p>
                      <p className="text-xs text-[#6E5A58]">Uma sequência rápida de hábitos para começar o dia priorizando sua pele.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-[#C84B61] font-bold">R$ 47</span>
                </div>

                <div className="flex justify-between items-center gap-4 pb-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-[#C84B61] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm md:text-base text-[#4A3B39]">Atualizações Vitalícias</p>
                      <p className="text-xs text-[#6E5A58]">Sempre que houver melhorias ou novos materiais, você recebe sem pagar de novo.</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-[#C84B61] font-bold">R$ 97</span>
                </div>

              </div>

              {/* Price comparison Box */}
              <div className="bg-[#FFF0F2] border border-[#FFE4E8] rounded-2xl p-6 text-center space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6E5A58]">
                  Valor total dos materiais: <span className="line-through">R$ 408</span>
                </p>
                
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#6E5A58]">Hoje o acesso completo está disponível por apenas</p>
                  <p className="font-display text-6xl md:text-7xl font-extrabold text-[#C84B61] tracking-tight">R$ 27</p>
                  <p className="text-xs text-[#6E5A58] font-semibold">Pagamento único • Sem taxas • Acesso para sempre</p>
                </div>
              </div>

              {/* Secure checkout elements */}
              <div className="space-y-6 pt-2">
                <div className="text-center">
                  <CTA children="QUERO COMEÇAR O MÉTODO AGORA" block />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-[#6E5A58]/80 justify-center">
                  <span className="flex items-center gap-1">🔒 Compra protegida</span>
                  <span className="flex items-center gap-1">📱 Acesso imediato</span>
                  <span className="flex items-center gap-1">💳 Pagamento seguro</span>
                  <span className="flex items-center gap-1">📖 Ebook digital</span>
                  <span className="flex items-center gap-1">🎁 Bônus inclusos</span>
                  <span className="flex items-center gap-1">✅ Garantia de 30 dias</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO GARANTIA */}
      <section className="py-20 bg-[#4A3B39] text-[#FFF5F6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,75,97,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E2697E] font-bold">30 Dias de Garantia</span>
            <h3 className="font-display text-3xl md:text-4xl text-white font-bold leading-tight">
              Satisfação garantida ou seu dinheiro de volta.
            </h3>
            <p className="text-sm leading-relaxed text-[#FFF5F6]/85 max-w-xl mx-auto md:mx-0">
              Confiamos tanto no Método Rugas Nunca Mais que, se em 30 dias você não sentir diferença aplicando o protocolo, devolvemos 100% do seu dinheiro. Sem burocracia — o risco é todo nosso.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C84B61] to-[#E2697E] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <img
                src={seloGarantia.url}
                alt="Garantia de 30 Dias"
                className="relative w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C84B61] font-bold">Dúvidas Frequentes</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#4A3B39] mt-2">Ainda está em dúvida?</h2>
            <div className="h-1 w-20 bg-[#FFE4E8] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            <FAQ
              q="E se eu nunca tiver feito nenhuma máscara caseira?"
              a="Não tem problema. O material foi criado justamente para iniciantes e tudo é explicado passo a passo de forma muito simples."
            />
            <FAQ
              q="Vou precisar comprar produtos caros?"
              a="Não. A proposta do método é justamente ensinar receitas utilizando ingredientes acessíveis que você provavelmente já tem na cozinha ou encontra no mercado."
            />
            <FAQ
              q="Quanto tempo demora?"
              a="A rotina foi planejada para caber na vida de mulheres que têm pouco tempo. Cada aplicação leva apenas cerca de 15 minutos."
            />
            <FAQ
              q="Preciso sair de casa?"
              a="Não. Todo o protocolo pode ser realizado de forma confortável e privada na sua própria casa."
            />
            <FAQ
              q="Recebo em casa?"
              a="Não. O acesso é 100% digital. Assim que o pagamento for confirmado, o material chega imediatamente em formato de ebook no seu e-mail cadastrado."
            />
            <FAQ
              q="Posso acessar pelo celular?"
              a="Sim. Você pode ler o ebook no celular, tablet, notebook ou computador de onde quiser."
            />
          </div>

          {/* Três caminhos conclusivos */}
          <div className="mt-16 bg-[#FFF0F2]/40 border border-[#FFE4E8] rounded-3xl p-8 shadow-sm space-y-6">
            <h4 className="font-display text-xl text-center text-[#4A3B39] font-semibold">Existem três caminhos a partir daqui:</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2 p-4 bg-white rounded-xl border border-[#FFE4E8]">
                <span className="font-bold text-red-600">1. Fechar esta página</span>
                <p className="text-xs text-[#6E5A58]">Continuar procurando uma solução diferente todos os meses, comprando novos cremes que não mudam nada.</p>
              </div>
              <div className="space-y-2 p-4 bg-white rounded-xl border border-[#FFE4E8]">
                <span className="font-bold text-[#C84B61]">2. Continuar adiando</span>
                <p className="text-xs text-[#6E5A58]">Pensar "depois eu vejo isso". As semanas passam, os meses passam e a sua pele e autoestima continuam na mesma.</p>
              </div>
              <div className="space-y-2 p-4 bg-white rounded-xl border border-emerald-300 bg-emerald-50/20">
                <span className="font-bold text-emerald-700">3. Começar hoje</span>
                <p className="text-xs text-[#6E5A58]">Criar uma rotina simples, reservar 15 minutos para você, e dar o primeiro passo para gostar novamente do seu reflexo.</p>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm font-semibold text-[#4A3B39] italic mb-4">Talvez este seja o momento de cuidar da única pessoa que sempre esteve ao seu lado: Você.</p>
              <CTA children="QUERO COMEÇAR O MÉTODO AGORA" />
            </div>
          </div>

        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#4A3B39] text-white/70 py-12 px-4 border-t border-[#FFE4E8]/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-[#C84B61]" />
            <span className="font-display text-lg font-bold tracking-wider uppercase text-white">Método Rugas Nunca Mais</span>
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
