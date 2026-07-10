import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Clock, Lock, ChevronDown, ArrowRight, Sparkles, ChevronsLeftRight, Coffee } from "lucide-react";
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
import t1 from "@/assets/t1.png.asset.json";
import t2 from "@/assets/t2.png.asset.json";
import t3 from "@/assets/t3.png.asset.json";
import heroMain from "@/assets/hero-main.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: heroMain.url },
      { name: "twitter:image", content: heroMain.url },
    ],
  }),
});

const CHECKOUT = "https://checkout.ofertadamulher.online/VCCL1O8SD5T6";

function CTA({ children = "QUERO A RECEITA AGORA", block = false, href = CHECKOUT }: { children?: React.ReactNode; block?: boolean; href?: string }) {
  const isAnchor = href.startsWith("#");
  return (
    <a
      href={href}
      {...(isAnchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={`group relative flex w-full items-center justify-center gap-2 rounded-full bg-cta-gradient px-4 py-4 text-center text-[12px] font-bold uppercase leading-none tracking-[0.08em] text-white shadow-[0_12px_30px_-8px_rgba(120,50,20,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(120,50,20,0.6)] animate-pulse-soft sm:gap-3 sm:px-8 sm:text-sm sm:tracking-[0.12em] ${block ? "" : "sm:inline-flex sm:w-auto"}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-copper/60" />
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-copper sm:text-[11px]">{children}</p>
      <span className="h-px w-6 bg-copper/60" />
    </div>
  );
}

function Stars({ size = "h-4 w-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5 text-copper">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`${size} fill-current`} />)}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5">
        <span className="font-display text-[16px] text-ink sm:text-lg md:text-xl">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-copper transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 pr-6 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">{a}</p>}
    </div>
  );
}

function ComoFunciona() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-border bg-cream/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink">Como funciona</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-copper transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border/70 bg-background px-4 py-4 text-[14px] leading-relaxed text-muted-foreground">
          O método usa uma máscara skin care natural feita com <strong className="text-ink">3 ingredientes secretos</strong> que você provavelmente já tem em casa. Juntos, eles criam uma combinação rica em antioxidantes, vitaminas e fibras que ajudam a pele a absorver nutrientes e se renovar de dentro pra fora. A máscara é aplicada no rosto e deixada agir por até <strong className="text-ink">15 minutos, 2 a 3 vezes por semana</strong> — e os primeiros resultados costumam aparecer já nas primeiras semanas de uso constante.
        </div>
      )}
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
  const Box = ({ n, l }: { n: string; l: string }) => (
    <div className="flex flex-col items-center">
      <span className="rounded-lg bg-ink px-3 py-2 font-mono text-xl tabular-nums text-white shadow-lg sm:text-2xl">{n}</span>
      <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">{l}</span>
    </div>
  );
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <Box n={pad(t.h)} l="hrs" />
      <span className="pt-2 font-mono text-xl text-white/40 sm:text-2xl">:</span>
      <Box n={pad(t.m)} l="min" />
      <span className="pt-2 font-mono text-xl text-white/40 sm:text-2xl">:</span>
      <Box n={pad(t.s)} l="seg" />
    </div>
  );
}

function StatRing({ pct, label }: { pct: number; label: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="none" className="text-copper/15" />
          <circle
            cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"
            className="text-copper" strokeDasharray={c} strokeDashoffset={off}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold text-ink sm:text-xl">
          {pct}%
        </div>
      </div>
      <p className="text-[14px] leading-snug text-ink sm:text-[15px]">{label}</p>
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
        className="relative aspect-square w-full select-none overflow-hidden rounded-2xl shadow-2xl ring-1 ring-copper/20"
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

        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">Antes</span>
        <span className="absolute right-3 top-3 rounded-full bg-copper px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg">Depois</span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        </div>
        <button
          type="button"
          aria-label="Arraste para comparar"
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-white bg-copper text-white shadow-xl active:cursor-grabbing"
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
        className="mt-4 w-full accent-copper"
      />
    </div>
  );
}

/* Tokens de ritmo consistentes */
const SECTION = "px-4 py-14 md:py-20";
const CONTAINER = "mx-auto max-w-6xl";
const H2 = "font-display text-[2rem] leading-[1.1] text-ink sm:text-4xl md:text-5xl";

function TopMarquee() {
  const items = [
    "+27 MIL MULHERES JÁ USARAM ESSA RECEITA",
    "SEGREDO NATURAL DE BELEZA CASEIRO",
    "PELE MAIS FIRME EM ATÉ 3 SEMANAS",
    "GARANTIA DE REEMBOLSO DE 30 DIAS",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden bg-ink py-2.5 text-white">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-[12px]">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-copper">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BrandBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="font-display text-xl tracking-[0.02em] text-ink sm:text-2xl">
          Rugas <em className="text-copper">Nunca Mais</em>
        </a>
        <div className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:flex">
          <Sparkles className="h-3.5 w-3.5 text-copper" /> Método oficial
        </div>
      </div>
      <div className="border-t border-border/70 bg-cream/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-2 text-center sm:flex-row sm:gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink sm:text-[11px]">A oferta termina em:</span>
          <Countdown />
        </div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen">
      <TopMarquee />

      {/* HERO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-4 py-6 md:py-12">
          <div className="flex items-center gap-2">
            <Stars size="h-4 w-4" />
            <span className="text-[12px] font-medium text-ink">Avaliado em 4,9/5 · +3.284 mulheres transformadas</span>
          </div>

          <h1 className="mt-4 font-display text-[1.85rem] leading-[1.1] text-ink sm:text-[2.2rem] md:text-[2.6rem]">
            Diga <strong className="text-copper">Adeus Às Rugas</strong> Em Apenas 3 Semanas Com Essa <strong className="text-copper">Colher Caseira</strong>
          </h1>

          {/* Imagem principal abaixo do título */}
          <div className="mt-6 overflow-hidden rounded-2xl bg-cream shadow-lg ring-1 ring-border">
            <img src={heroMain.url} alt="Método Rugas Nunca Mais" className="w-full object-cover" />
          </div>

          {/* Descrição com emojis */}
          <ul className="mt-6 space-y-2.5">
            <li className="flex items-start gap-2 text-[15px] text-ink"><span aria-hidden>✨</span><span>Amenize rugas com um segredo natural caseiro</span></li>
            <li className="flex items-start gap-2 text-[15px] text-ink"><span aria-hidden>🔒</span><span>3 ingredientes secretos que você já tem em casa</span></li>
            <li className="flex items-start gap-2 text-[15px] text-ink"><span aria-hidden>🌙</span><span>Pele mais macia e hidratada em semanas</span></li>
          </ul>

          {/* Como Funciona — colapsável */}
          <ComoFunciona />

          {/* CTA */}
          <div className="mt-6">
            <CTA block>QUERO A RECEITA AGORA</CTA>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border border-border bg-cream/50 p-2">
                <Lock className="mx-auto h-4 w-4 text-copper" />
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink">Compra segura</p>
              </div>
              <div className="rounded-lg border border-border bg-cream/50 p-2">
                <ShieldCheck className="mx-auto h-4 w-4 text-copper" />
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink">Garantia 30d</p>
              </div>
              <div className="rounded-lg border border-border bg-cream/50 p-2">
                <Clock className="mx-auto h-4 w-4 text-copper" />
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink">Acesso imediato</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="bg-warm-gradient px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center">
            <Eyebrow>Assista antes de decidir</Eyebrow>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-copper/10 blur-2xl" />
            <div className="relative">
              <WistiaPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className={SECTION} style={{ backgroundColor: "#fdf5ef" }}>
        <div className={`${CONTAINER} text-center`}>
          <Eyebrow>Antes & depois</Eyebrow>
          <h2 className={`mt-3 ${H2}`}>Resultado Visível</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:text-base">Arraste o controle e veja a transformação da pele.</p>
        </div>
        <div className="mt-8">
          <BeforeAfter />
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={SECTION}>
        <div className={`${CONTAINER} text-center`}>
          <Eyebrow>O problema real</Eyebrow>
          <h2 className={`mt-3 ${H2}`}>
            Talvez o problema não seja a sua idade.<br />
            <em className="text-copper">Nem a falta de cremes.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Muitas mulheres passam anos investindo em cosméticos caros, séruns importados e procedimentos — sem entender o que realmente influencia a pele ao longo do tempo. O mercado ensina você a comprar. Aqui, você aprende a cuidar.
          </p>
        </div>

        <div className={`${CONTAINER} mt-8 grid gap-3 md:grid-cols-2`}>
          {[
            "Compra um creme novo cheia de esperança e quase nada muda",
            "Passa maquiagem só para esconder o que não queria enxergar",
            "Evita fotos de perto e aumenta o espelho procurando defeitos",
            "Sente que a pele perdeu o brilho de alguns anos atrás",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
              <p className="text-[15px] text-ink">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INGREDIENTES */}
      <section className={`bg-ink-gradient text-white ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-12`}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src={n1.url} alt="Feito com ingredientes naturais" className="w-full" />
          </div>
          <div>
            <Eyebrow>Benefício principal</Eyebrow>
            <h2 className={`mt-3 font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl`}>
              O Segredo Natural Que Ajuda a <em className="text-copper">Amenizar Rugas</em> e Linhas de Expressão
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-lg">
              O Método Rugas Nunca Mais foi criado a partir de uma combinação exclusiva de <strong className="text-white">3 ingredientes naturais</strong> que aumentam a absorção de nutrientes pela pele. Diferente de cremes industrializados com nutrientes sintéticos, essa fórmula caseira ajuda a pele a se renovar com o que ela já reconhece.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { n: "01", t: "Amenização de rugas e linhas de expressão", d: "A combinação de antioxidantes dos ingredientes protege contra radicais livres. Isso permite que novas células saudáveis se formem com mais intensidade." },
                { n: "02", t: "Hidratação e maciez da pele", d: "Um dos ingredientes é rico em potássio, fibras e vitaminas A, B e C. Esses nutrientes hidratam e dão maciez à derme já nas primeiras aplicações." },
                { n: "03", t: "Proteção antioxidante extra", d: "Os ingredientes ajudam a reduzir os efeitos nocivos dos raios ultravioleta. Isso soma força à proteção solar que você já usa no dia a dia." },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-5 border-t border-white/10 pt-4">
                  <span className="font-display text-2xl text-copper">{n}</span>
                  <div>
                    <h3 className="font-display text-xl text-white">{t}</h3>
                    <p className="mt-1 text-sm text-white/60">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APLIQUE E RELAXE */}
      <section className={`bg-cream/50 ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-[1.15fr_1fr] md:gap-12`}>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={n2.url} alt="Aplique e relaxe" className="w-full" />
          </div>
          <div>
            <Eyebrow>Como usar</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>
              Simples de Preparar, <em className="text-copper">Fácil de Aplicar</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              A máscara é feita em duas etapas rápidas, usando apenas <strong className="text-ink">3 ingredientes secretos</strong> que se combinam pra potencializar os resultados. Depois é só aplicar no rosto limpo, relaxar por até <strong className="text-ink">15 minutos</strong> e enxaguar — sem complicação, direto da sua cozinha.
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm">
              <div><div className="font-display text-3xl text-ink">15<span className="text-copper">min</span></div><div className="text-[11px] uppercase tracking-widest text-muted-foreground">de ritual</div></div>
              <div className="h-10 w-px bg-border" />
              <div><div className="font-display text-3xl text-ink">2-3×<span className="text-copper">/sem</span></div><div className="text-[11px] uppercase tracking-widest text-muted-foreground">frequência</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO USAR */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <div className="text-center">
            <Eyebrow>Passo a passo</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>4 passos. 15 minutos.</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-muted-foreground sm:text-base">Do lavatório à pele renovada — o ritual completo em uma sequência simples.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[n3, n4, n5].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-border shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <img src={img.url} alt={`Passo ${i + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTURA */}
      <section className={`bg-ink-gradient text-white ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-12`}>
          <div>
            <Eyebrow>A fórmula</Eyebrow>
            <h2 className={`mt-3 font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl`}>
              Textura sedosa,<br /><em className="text-copper">absorção profunda.</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-lg">
              Nada de sensação pesada ou pegajosa. A máscara penetra rápido, hidrata em profundidade e deixa a pele visivelmente mais firme e luminosa.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Absorção rápida", "Sem parabenos", "Sem oleosidade", "Fragrância natural"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-copper" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img src={n6.url} alt="Textura sedosa e nutritiva" className="w-full" />
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className={`bg-cream ${SECTION}`}>
        <div className={`${CONTAINER} text-center`}>
          <Eyebrow>Prova social</Eyebrow>
          <h2 className={`mt-3 ${H2}`}>Histórias reais de quem já testou</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Relatos verificados de mulheres que aplicaram o método por pelo menos 3 semanas.
          </p>
        </div>
        <div className={`${CONTAINER} mt-10 grid gap-5 md:grid-cols-3`}>
          {[
            {
              nome: "Sandra M.",
              local: "Ariquemes, RO",
              foto: t1.url,
              texto:
                "Fiquei surpresa que os ingredientes já estavam na minha cozinha. Em poucas semanas minha pele ficou muito mais macia e hidratada.",
            },
            {
              nome: "Marlene R.",
              local: "Porto Velho, RO",
              foto: t2.url,
              texto:
                "Uso 3 vezes por semana como o método ensina. É simples de fazer em casa e o resultado na textura da pele é visível.",
            },
            {
              nome: "Cristiane A.",
              local: "Ji-Paraná, RO",
              foto: t3.url,
              texto:
                "Nunca imaginei que algo tão simples pudesse fazer diferença assim. Minhas linhas de expressão ficaram bem mais suaves.",
            },
          ].map((d) => (
            <figure
              key={d.nome}
              className="flex h-full flex-col rounded-2xl border border-copper/15 bg-background p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center gap-1 text-copper" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-left text-[15px] leading-relaxed text-foreground">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <img
                  src={d.foto}
                  alt={d.nome}
                  className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-copper/30"
                />
                <div className="min-w-0 text-left">
                  <div className="truncate font-semibold text-foreground">{d.nome}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {d.local} · Compra verificada
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className={`border-y border-border bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="text-center">
            <Eyebrow>Resultados</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>
              Mulheres Que Seguiram o Protocolo <em className="text-copper">Notaram Diferença Real</em>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
              Os resultados variam de pessoa pra pessoa, mas a maioria percebe diferença já nas primeiras semanas de aplicação recorrente:
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-x-10 gap-y-6 md:grid-cols-2">
            <StatRing pct={94} label="disse Sandra M. — notou a pele mais macia e hidratada ao toque" />
            <StatRing pct={97} label="disse Marlene R. — percebeu amenização nas linhas de expressão" />
            <StatRing pct={96} label="disse Cristiane A. — continuaria o protocolo mesmo após o teste inicial" />
            <StatRing pct={92} label="das usuárias recomendariam o método para uma amiga ou familiar" />
          </div>
        </div>
      </section>

      {/* AUTOCUIDADO */}
      <section className={SECTION}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-12`}>
          <div>
            <Eyebrow>Ritual de autocuidado</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>
              Um momento seu.<br /><em className="text-copper">Um resultado para a vida.</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              Não é só sobre pele. É sobre reservar 15 minutos duas vezes por semana para você. E ver, semana após semana, uma versão mais luminosa no espelho.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={n7.url} alt="Ritual de autocuidado" className="w-full" />
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className={`bg-ink-gradient text-white ${SECTION} scroll-mt-4`}>
        <div className={`${CONTAINER} max-w-3xl mx-auto`}>
          <div className="text-center">
            <Eyebrow>Oferta por tempo limitado</Eyebrow>
          </div>


          <div className="mt-8 overflow-hidden rounded-3xl bg-white text-ink shadow-2xl">
            <div className="bg-copper/10 px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
              Oferta especial de lançamento
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">O que você recebe hoje</p>

              <ul className="mt-4 space-y-3">
                {[
                  { t: "Método Rugas Nunca Mais — guia completo passo a passo", v: "R$ 197" },
                  { t: "BÔNUS: Corpo dos Sonhos — plano alimentar prático", v: "R$ 67" },
                  { t: "BÔNUS: Ritual Matinal Anti-Idade de 5 minutos", v: "R$ 47" },
                  { t: "Atualizações vitalícias sem custo adicional", v: "R$ 97" },
                ].map(({ t, v }) => (
                  <li key={t} className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-[14px] text-ink sm:text-[15px]">{t}</span>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground line-through sm:text-sm">{v}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-cream/60 p-5 text-center">
                <div className="text-sm text-muted-foreground">Valor total: <span className="line-through">R$ 408</span></div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">Hoje por apenas</div>
                <div className="mt-1 flex items-baseline justify-center gap-2">
                  <span className="text-2xl text-ink/60">R$</span>
                  <span className="font-display text-6xl leading-none text-ink sm:text-7xl">27</span>
                </div>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-ink/70">
                  <Coffee className="h-3.5 w-3.5 text-copper" /> menos que um café por semana
                </p>
                <p className="mt-2 text-[13px] text-ink/70">
                  Pagamento único · sem mensalidades · acesso vitalício
                </p>
              </div>

              <div className="mt-5">
                <CTA block>QUERO A RECEITA AGORA</CTA>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Compra 100% segura</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30 dias de garantia</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className={`bg-cream ${SECTION}`}>
        <div className="mx-auto grid max-w-4xl items-center gap-6 md:grid-cols-[auto_1fr] md:gap-10">
          <img
            src={seloGarantia.url}
            alt="Selo Garantia 30 Dias — Satisfação Garantida"
            className="mx-auto w-40 sm:w-48 md:w-56"
          />
          <div className="text-center md:text-left">
            <Eyebrow>Garantia incondicional</Eyebrow>
            <h2 className={`mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl`}>30 dias de garantia total</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Experimente por 30 dias. Se você não notar diferença seguindo o protocolo, devolvemos <strong className="text-ink">100% do seu dinheiro</strong>, sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={SECTION}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>Tudo o que você precisa saber</h2>
          </div>
          <div className="mt-8">
            <FAQ q="O método funciona pra qualquer tipo de ruga?" a="O método é indicado para rugas de grau leve e linhas de expressão. Ele ameniza rugas de graus maiores e ajuda a evitar ou retardar o surgimento de novas, mas não substitui tratamento dermatológico para rugas de médio a alto grau." />
            <FAQ q="Preciso comprar produtos caros pra fazer a máscara?" a="Não. Os 3 ingredientes usados são simples, naturais e fáceis de encontrar — muito provavelmente você já tem tudo em casa." />
            <FAQ q="Com que frequência devo aplicar?" a="O ideal é de 2 a 3 vezes por semana. Aplicação exagerada pode reduzir a eficácia e causar oleosidade ou acne, então é importante respeitar a frequência indicada." />
            <FAQ q="Quanto tempo leva pra ver resultado?" a="A maioria das pessoas nota diferença já nas primeiras semanas de uso recorrente. O resultado varia de pessoa pra pessoa por fatores genéticos, então o importante é acompanhar sua própria evolução." />
            <FAQ q="Substitui protetor solar ou outros cuidados com a pele?" a="Não. O método reforça a proteção antioxidante da pele, mas não substitui o protetor solar nem compensa hábitos como tabagismo ou má alimentação — ele funciona melhor combinado com esses cuidados." />
            <FAQ q="E se eu não notar diferença?" a="Você tem 30 dias de garantia total. Se não perceber resultado seguindo o protocolo corretamente, devolvemos seu investimento integralmente." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={`bg-warm-gradient ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-12`}>
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img src={n8.url} alt="Método Rugas Nunca Mais — ebook" className="w-full" />
          </div>
          <div className="text-center md:text-left">
            <Eyebrow>Última chamada</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>
              Sua pele merece <em className="text-copper">o cuidado certo.</em>
            </h2>
            <p className="mt-4 text-[15px] text-muted-foreground sm:text-lg">
              Reserve 15 minutos da sua semana para você. Acesso imediato, garantia de 30 dias e um ritual simples para reencontrar sua confiança no espelho.
            </p>
            <div className="mt-6"><CTA block>QUERO ME LIVRAR DAS RUGAS</CTA></div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground md:justify-start">
              <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento seguro</span>
              <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30 dias garantia</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink px-4 py-8 text-center text-xs text-white/60">
        <p>© Método Rugas Nunca Mais · Todos os direitos reservados</p>
        <p className="mx-auto mt-2 max-w-2xl">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Resultados podem variar de pessoa para pessoa.</p>
      </footer>
    </main>
  );
}
