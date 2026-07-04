import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Clock, Lock, ChevronDown, ArrowRight, Sparkles, ChevronsLeftRight } from "lucide-react";
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
import ofertaProduto from "@/assets/oferta-produto.png.asset.json";
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

const CHECKOUT = "#oferta";

function CTA({ children = "QUERO MEU ACESSO AGORA", block = false }: { children?: React.ReactNode; block?: boolean }) {
  return (
    <a
      href={CHECKOUT}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full bg-cta-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_-8px_rgba(120,50,20,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(120,50,20,0.6)] animate-pulse-soft ${block ? "w-full" : ""}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
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
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-lg text-ink md:text-xl">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-copper transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-6 pr-8 text-[15px] leading-relaxed text-muted-foreground">{a}</p>}
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
    <div className="flex items-center gap-2 font-mono text-xl tabular-nums text-ink md:text-2xl">
      <span className="rounded bg-ink px-2 py-1 text-white">{pad(t.h)}</span>:
      <span className="rounded bg-ink px-2 py-1 text-white">{pad(t.m)}</span>:
      <span className="rounded bg-ink px-2 py-1 text-white">{pad(t.s)}</span>
    </div>
  );
}

function StatRing({ pct, label }: { pct: number; label: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  return (
    <div className="flex items-center gap-5">
      <div className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="none" className="text-copper/15" />
          <circle
            cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"
            className="text-copper" strokeDasharray={c} strokeDashoffset={off}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-xl font-semibold text-ink">
          {pct}%
        </div>
      </div>
      <p className="text-[15px] leading-snug text-ink">{label}</p>
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
        className="relative aspect-square w-full select-none overflow-hidden rounded-xl shadow-2xl"
        onMouseDown={(e) => start(e.clientX)}
        onTouchStart={(e) => start(e.touches[0].clientX)}
      >
        {/* DEPOIS (base, embaixo visualmente — revelado à direita) */}
        <img src={depoisImg.url} alt="Depois" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        {/* ANTES (por cima, clipado da esquerda até pos%) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={antesImg.url} alt="Antes" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        </div>

        {/* rótulos */}
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Antes</span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Depois</span>

        {/* linha divisória */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        </div>
        {/* handle */}
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
        className="mt-5 w-full accent-copper"
      />
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-gradient">
        <div className="mx-auto max-w-3xl px-4 pt-8 pb-12 md:pt-20 md:pb-24">
          <div>
            <h1 className="font-display text-[2rem] leading-[1.05] text-ink sm:text-4xl md:text-6xl lg:text-7xl">
              Rugas visivelmente <em className="text-copper">suavizadas</em> em poucas semanas —
              <span className="block">sem cremes caros.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Um protocolo caseiro com <strong className="text-ink">3 ingredientes</strong> que você já tem na cozinha. Aplicado por mais de <strong className="text-ink">27.000 mulheres</strong> com resultados reais.
            </p>

            <div className="mt-6 space-y-2.5 md:mt-8 md:space-y-3">
              {[
                "Reduz linhas de expressão em 2–3 semanas",
                "Rotina de 15 minutos, 2x por semana",
                "Sem procedimentos, sem agulhas, sem risco",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                  <span className="text-[14px] text-ink md:text-[15px]">{t}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-8 md:mt-10">
              <div className="absolute -inset-4 rounded-[2rem] bg-copper/10 blur-2xl" />
              <div className="relative">
                <WistiaPlayer />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center md:mt-9">
              <CTA block />
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Stars />
                <span className="text-xs text-muted-foreground">4.9 · 3.284 avaliações</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground sm:justify-start md:mt-8 md:text-xs">
              <div className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Pagamento seguro</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Garantia de 30 dias</div>
              <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Acesso imediato</div>
            </div>
          </div>
        </div>

      </section>
      {/* ANTES E DEPOIS */}
      <section className="px-4 py-16 md:py-20" style={{ backgroundColor: "#fdf5ef" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Antes & depois</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">Resultado Visível</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">Arraste para ver a transformação.</p>
        </div>
        <div className="mt-10">
          <BeforeAfter />
        </div>
      </section>



      {/* PROBLEMA */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">O problema real</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Você não está envelhecendo rápido demais.<br />
            <em className="text-copper">Você está cuidando errado.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Cremes de R$ 400, séruns importados, procedimentos que ardem — e mesmo assim, as rugas continuam aparecendo. Não é falta de esforço. É falta do método certo.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          {[
            "Você evita se olhar de perto no espelho",
            "Já gastou fortunas em cremes que não entregaram",
            "Sente a pele mais seca, opaca, sem viço",
            "Tem medo de parecer mais velha do que se sente",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
              <p className="text-[15px] text-ink">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INGREDIENTES */}
      <section className="bg-ink-gradient px-4 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img src={n1.url} alt="Feito com ingredientes naturais" className="w-full" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">O método</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              3 ingredientes.<br />
              <em className="text-copper">Resultado profissional em casa.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Uma máscara caseira rica em antioxidantes, vitaminas A, B, C e potássio que estimula renovação celular e devolve firmeza à pele.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { n: "01", t: "Renovação celular", d: "Antioxidantes neutralizam radicais livres e aceleram a formação de novas células." },
                { n: "02", t: "Hidratação profunda", d: "Nutre a derme já nas primeiras aplicações, devolvendo maciez e viço." },
                { n: "03", t: "Proteção antioxidante", d: "Reduz danos causados pelos raios UV e pela poluição diária." },
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
      <section className="bg-cream/50 px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_1fr]">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={n2.url} alt="Aplique e relaxe" className="w-full" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Aplicação simples</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Aplique. <em className="text-copper">Relaxe.</em> Renove.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A fórmula natural ajuda a pele a absorver nutrientes e se renovar. Deixe agir por 15 minutos e sinta a diferença já nas primeiras semanas.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm md:justify-start">
              <div className="text-center md:text-left"><div className="font-display text-3xl text-ink">15<span className="text-copper">min</span></div><div className="text-xs uppercase tracking-widest text-muted-foreground">de ritual</div></div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center md:text-left"><div className="font-display text-3xl text-ink">2×<span className="text-copper">/sem</span></div><div className="text-xs uppercase tracking-widest text-muted-foreground">frequência</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO USAR — imagem oficial dos 4 passos */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Passo a passo</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">4 passos. 15 minutos.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Do lavatório à pele renovada — o ritual completo em uma sequência simples.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[n3, n4, n5].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-border shadow-xl">
                <img src={img.url} alt={`Passo ${i + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTURA */}
      <section className="bg-ink-gradient px-4 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">A fórmula</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Textura sedosa,<br /><em className="text-copper">absorção profunda.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Nada de sensação pesada ou pegajosa. A máscara penetra rápido, hidrata em profundidade e deixa a pele visivelmente mais firme e luminosa.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Absorção rápida", "Sem parabenos", "Sem oleosidade", "Fragrância natural"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-white/80">
                  <Check className="h-4 w-4 text-copper" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={n6.url} alt="Textura sedosa e nutritiva" className="w-full" />
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-cream px-4 py-20 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Prova social</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">Histórias reais de quem já testou</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[tSandra, tMarlene, tDebora].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-xl">
              <img src={img.url} alt={`Depoimento ${i + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ESTATÍSTICAS — anéis de porcentagem */}
      <section className="border-y border-border bg-background px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Resultados reais</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">O que as usuárias relatam</h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            <StatRing pct={94} label="notaram a pele visivelmente mais macia em até 3 semanas" />
            <StatRing pct={97} label="perceberam linhas de expressão suavizadas com o uso contínuo" />
            <StatRing pct={96} label="continuariam usando diariamente após o período de teste" />
            <StatRing pct={92} label="recomendariam o método para uma amiga ou familiar" />
          </div>
        </div>
      </section>

      {/* AUTOCUIDADO */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Ritual de autocuidado</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              Um momento seu.<br /><em className="text-copper">Um resultado para a vida.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Não é só sobre pele. É sobre reservar 15 minutos duas vezes por semana para você. E ver, semana após semana, uma versão mais luminosa no espelho.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={n7.url} alt="Ritual de autocuidado" className="w-full" />
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-ink-gradient px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">
              <Sparkles className="h-3 w-3" /> Esta oferta expira em
            </div>
            <div className="flex items-center justify-center">
              <Countdown />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-white text-ink shadow-2xl">
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="p-8 md:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">O que você recebe</p>

                <ul className="mt-6 space-y-3.5">
                  {[
                    "Ebook completo Método Rugas Nunca Mais",
                    "Guia passo a passo de aplicação",
                    "Frequência ideal e erros a evitar",
                    "BÔNUS: Corpo dos sonhos",
                    "BÔNUS: Ritual anti-idade de 5 minutos ao acordar",
                    "Acesso vitalício + atualizações gratuitas",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-[15px] text-ink">{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-border pt-6 text-center">
                  <div className="text-sm text-muted-foreground line-through">De R$ 197</div>
                  <div className="mt-1 flex items-baseline justify-center gap-2">
                    <span className="font-display text-6xl leading-none text-ink sm:text-7xl">R$ 27</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/70">
                    Pagamento único · acesso vitalício
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={CHECKOUT}
                    className="group relative flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cta-gradient px-4 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_-8px_rgba(120,50,20,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(120,50,20,0.6)] animate-pulse-soft sm:text-sm"
                  >
                    <span>QUERO ACESSAR AGORA</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Compra 100% segura</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30 dias de garantia</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center bg-cream p-8 md:p-12">
                <img src={ofertaProduto.url} alt="Método Rugas Nunca Mais — ebook e guias" className="w-full max-w-md" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-copper/40 bg-white/95 p-6 text-ink shadow-xl md:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-10 w-10 shrink-0 text-copper" />
              <div>
                <h3 className="font-display text-xl text-ink md:text-2xl">Garantia blindada de 30 dias</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Aplique por 30 dias. Se não notar diferença, devolvemos 100% do valor. Sem burocracia.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Dúvidas frequentes</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Tudo o que você precisa saber</h2>
          </div>
          <div className="mt-10">
            <FAQ q="O método funciona para qualquer tipo de ruga?" a="É indicado para rugas leves e linhas de expressão. Ameniza rugas mais profundas e retarda o surgimento de novas. Não substitui tratamento dermatológico para casos avançados." />
            <FAQ q="Preciso comprar produtos caros?" a="Não. Os 3 ingredientes são naturais, baratos e fáceis de encontrar. Provavelmente você já tem tudo em casa agora." />
            <FAQ q="Com que frequência devo aplicar?" a="O ideal é de 2 a 3 vezes por semana. Aplicação em excesso não acelera resultados e pode causar oleosidade." />
            <FAQ q="Quanto tempo até ver resultado?" a="A maioria das mulheres nota diferença já nas primeiras 2 a 3 semanas de uso consistente." />
            <FAQ q="Como recebo o acesso?" a="Imediatamente após a compra, você recebe o ebook e todos os bônus por e-mail e em uma área de membros vitalícia." />
            <FAQ q="E se eu não gostar?" a="Você tem 30 dias para testar. Se não notar diferença, devolvemos 100% do valor sem perguntas." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-warm-gradient px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={n8.url} alt="Método Rugas Nunca Mais — ebook" className="w-full" />
          </div>
          <div>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              Sua pele merece <em className="text-copper">o cuidado certo.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Comece o Método Rugas Nunca Mais hoje. Acesso imediato, garantia de 30 dias, resultado que aparece no espelho.
            </p>
            <div className="mt-8"><CTA>QUERO COMEÇAR AGORA</CTA></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink px-4 py-10 text-center text-xs text-white/60">
        <p>© Método Rugas Nunca Mais · Todos os direitos reservados</p>
        <p className="mt-2 max-w-2xl mx-auto">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Resultados podem variar de pessoa para pessoa.</p>
      </footer>
    </main>
  );
}
