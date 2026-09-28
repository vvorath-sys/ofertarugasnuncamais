import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Clock, Lock, ChevronDown, ArrowRight, ChevronsLeftRight } from "lucide-react";
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
const n1 = { url: "/images/n1.jpg" };
const n2 = { url: "/images/como-funciona.jpg" };
const n3 = { url: "/images/n3.jpg" };
const n4 = { url: "/images/n4.jpg" };
const n5 = { url: "/images/n5.jpg" };
const n6 = { url: "/images/n6.jpg" };
const n7 = { url: "/images/n7.jpg" };
const n8 = { url: "/images/n8.jpg" };
import antesImg from "@/assets/antes.png.asset.json";
import depoisImg from "@/assets/depois.png.asset.json";
import seloGarantia from "@/assets/selo-garantia-30-dias-removebg-preview.png.asset.json";
import resultadoVisivelImg from "@/assets/resultado-visivel.png.asset.json";
const t1 = { url: "/images/t-sandra.png" };
const t2 = { url: "/images/t-marlene.png" };
const t3 = { url: "/images/t-cristiane.png" };

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Método Rugas Nunca Mais | Receita Caseira" },
      { name: "description", content: "Conheça o método caseiro com 3 ingredientes para uma rotina simples de cuidado com rugas e linhas de expressão." },
      { property: "og:title", content: "Método Rugas Nunca Mais" },
      { property: "og:description", content: "Uma rotina caseira de 15 minutos para cuidar da pele com ingredientes simples." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      className={`group relative flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-cta-gradient px-3 py-4 text-center text-[11px] font-bold uppercase leading-none tracking-[0.04em] text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl animate-pulse-soft min-[380px]:text-[12px] sm:gap-3 sm:px-8 sm:text-sm sm:tracking-[0.08em] ${block ? "" : "sm:inline-flex sm:w-auto"}`}
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

        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">Antes</span>
        <span className="absolute right-3 top-3 rounded-full bg-rose px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg">Depois</span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        </div>
        <button
          type="button"
          aria-label="Arraste para comparar"
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-primary-foreground bg-rose text-primary-foreground shadow-xl active:cursor-grabbing"
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
const SECTION = "px-5 py-16 md:py-24";
const CONTAINER = "mx-auto max-w-6xl";
const H2 = "font-display text-[2rem] leading-[1.08] text-ink sm:text-4xl md:text-5xl";

function TopMarquee() {
  const items = [
    "+27 MIL MULHERES JÁ USARAM ESSA RECEITA",
    "SEGREDO NATURAL DE BELEZA CASEIRO",
    "PELE MAIS FIRME EM ATÉ 3 SEMANAS",
    "GARANTIA DE REEMBOLSO DE 30 DIAS",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden bg-ink py-2.5 text-primary-foreground">
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

function Landing() {
  return (
    <main className="min-h-screen overflow-hidden">
      <TopMarquee />

      {/* HERO */}
      <section className="relative bg-warm-gradient px-5 pb-16 pt-10 md:pb-24 md:pt-16">
        <div className={`${CONTAINER} text-center`}>
          <Eyebrow>O segredo que virou ritual</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[2.35rem] font-bold leading-[1.02] text-ink sm:text-5xl md:text-6xl">
            <strong className="text-rose">3 Ingredientes</strong> Que Já Estão Na Sua Cozinha <strong className="text-rose">Apagam Rugas</strong> Em Apenas 3 Semanas
          </h1>
          <div className="mt-8">
            <BeforeAfter />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-[15px] font-medium leading-relaxed text-ink/75 sm:text-lg">
            Cansada De Cremes Caros Que Não Fazem Nada? Essa Colher De Caramelo Caseira Está Surpreendendo Mulheres Em Todo Brasil
          </p>
          <div className="mx-auto mt-7 max-w-md">
            <CTA block href="#oferta">QUERO A RECEITA AGORA</CTA>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Acesso imediato · Pagamento seguro · Garantia de 30 dias</p>
        </div>
      </section>


      <section className="border-y border-border bg-background px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <Eyebrow>Assista e entenda</Eyebrow>
            <h2 className="mt-3 font-display text-2xl leading-tight text-ink sm:text-4xl">Descubra por que esse ritual chamou tanta atenção</h2>
          </div>
          <WistiaPlayer />
        </div>
      </section>

      {/* COMO FUNCIONA — seção aberta */}
      <section className={`bg-secondary/50 ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-14`}>
          <div className="overflow-hidden rounded-2xl bg-card p-2 shadow-xl ring-1 ring-rose/15">
            <img src={resultadoVisivelImg.url} alt="Resultado visível antes e depois, com os benefícios para a pele" className="h-auto w-full rounded-xl object-contain" />
          </div>
          <div>
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className={`mt-3 ${H2}`}>
              Uma máscara natural feita com <em className="text-copper">3 ingredientes secretos</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              O método usa uma máscara skin care natural feita com <strong className="text-ink">3 ingredientes secretos</strong> que você provavelmente já tem em casa. Juntos, eles criam uma combinação rica em antioxidantes, vitaminas e fibras que ajudam a pele a absorver nutrientes e se renovar de dentro pra fora.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              A máscara é aplicada no rosto e deixada agir por até <strong className="text-ink">15 minutos, 2 a 3 vezes por semana</strong> — e os primeiros resultados costumam aparecer já nas primeiras semanas de uso constante.
            </p>
          </div>
        </div>
      </section>



      {/* PROBLEMA */}
      <section className={SECTION}>
        <div className={`${CONTAINER} grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end`}>
          <div className="text-left">
          <Eyebrow>O problema real</Eyebrow>
          <h2 className={`mt-3 ${H2}`}>
            Talvez o problema não seja a sua idade. <br />
               <em className="text-rose">Nem a falta de cremes.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Muitas mulheres passam anos investindo em cosméticos caros, séruns importados e procedimentos — sem entender o que realmente influencia a pele ao longo do tempo. O mercado ensina você a comprar. Aqui, você aprende a cuidar.
          </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Compra um creme novo cheia de esperança e quase nada muda",
            "Passa maquiagem só para esconder o que não queria enxergar",
            "Evita fotos de perto e aumenta o espelho procurando defeitos",
            "Sente que a pele perdeu o brilho de alguns anos atrás",
          ].map((t) => (
             <div key={t} className="flex items-start gap-3 rounded-r-xl border-l-4 border-rose bg-card p-5 shadow-sm">
               <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
              <p className="text-[15px] text-ink">{t}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTES */}
      <section className={`bg-ink-gradient text-primary-foreground ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-12`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img src={n1.url} alt="Feito com ingredientes naturais" className="w-full" />
          </div>
          <div>
            <Eyebrow>Benefício principal</Eyebrow>
            <h2 className={`mt-3 font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl`}>
              O Segredo Natural Que Ajuda a <em className="text-copper">Amenizar Rugas</em> e Linhas de Expressão
            </h2>
             <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/70 sm:text-lg">
               O Método Rugas Nunca Mais foi criado a partir de uma combinação exclusiva de <strong className="text-primary-foreground">3 ingredientes naturais</strong> que aumentam a absorção de nutrientes pela pele. Diferente de cremes industrializados com nutrientes sintéticos, essa fórmula caseira ajuda a pele a se renovar com o que ela já reconhece.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { n: "01", t: "Amenização de rugas e linhas de expressão", d: "A combinação de antioxidantes dos ingredientes protege contra radicais livres. Isso permite que novas células saudáveis se formem com mais intensidade." },
                { n: "02", t: "Hidratação e maciez da pele", d: "Um dos ingredientes é rico em potássio, fibras e vitaminas A, B e C. Esses nutrientes hidratam e dão maciez à derme já nas primeiras aplicações." },
                { n: "03", t: "Proteção antioxidante extra", d: "Os ingredientes ajudam a reduzir os efeitos nocivos dos raios ultravioleta. Isso soma força à proteção solar que você já usa no dia a dia." },
              ].map(({ n, t, d }) => (
                 <div key={n} className="flex gap-5 border-t border-primary-foreground/10 pt-4">
                  <span className="font-display text-2xl text-copper">{n}</span>
                  <div>
                     <h3 className="font-display text-xl text-primary-foreground">{t}</h3>
                     <p className="mt-1 text-sm text-primary-foreground/60">{d}</p>
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
          <div className="overflow-hidden rounded-2xl shadow-xl">
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
                <div key={i} className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <img src={img.url} alt={`Passo ${i + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTURA */}
      <section className={`bg-ink-gradient text-primary-foreground ${SECTION}`}>
        <div className={`${CONTAINER} grid items-center gap-8 md:grid-cols-2 md:gap-12`}>
          <div>
            <Eyebrow>A fórmula</Eyebrow>
            <h2 className={`mt-3 font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl`}>
              Textura sedosa,<br /><em className="text-copper">absorção profunda.</em>
            </h2>
             <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/70 sm:text-lg">
              Nada de sensação pesada ou pegajosa. A máscara penetra rápido, hidrata em profundidade e deixa a pele visivelmente mais firme e luminosa.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Absorção rápida", "Sem parabenos", "Sem oleosidade", "Fragrância natural"].map((t) => (
                 <div key={t} className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-copper" /> {t}
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
               className="flex h-full flex-col rounded-xl border border-rose/15 bg-background p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
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
            <StatRing pct={94} label="disseram — notaram a pele mais macia e hidratada ao toque" />
            <StatRing pct={97} label="disseram — perceberam amenização nas linhas de expressão" />
            <StatRing pct={96} label="disseram — continuariam o protocolo mesmo após o teste inicial" />
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
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={n7.url} alt="Ritual de autocuidado" className="w-full" />
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className={`bg-ink-gradient text-primary-foreground ${SECTION} scroll-mt-4`}>
        <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-16`}>
          <div>
            <Eyebrow>Comece hoje</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">Tudo o que você precisa para começar seu ritual.</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-primary-foreground/70 sm:text-lg">Receba o passo a passo completo, os bônus e todas as futuras atualizações em um único acesso.</p>
            <ul className="mt-8 divide-y divide-primary-foreground/10 border-y border-primary-foreground/10">
                {[
                  { t: "Método Rugas Nunca Mais — guia completo passo a passo", v: "R$ 197" },
                  { t: "BÔNUS: Corpo dos Sonhos — plano alimentar prático", v: "R$ 67" },
                  { t: "BÔNUS: Ritual Matinal Anti-Idade de 5 minutos", v: "R$ 47" },
                  { t: "Atualizações vitalícias sem custo adicional", v: "R$ 97" },
                ].map(({ t, v }) => (
                  <li key={t} className="flex items-start justify-between gap-3 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper text-primary-foreground">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-[14px] text-primary-foreground sm:text-[15px]">{t}</span>
                    </div>
                    <span className="shrink-0 text-xs text-primary-foreground/45 line-through sm:text-sm">{v}</span>
                  </li>
                ))}
            </ul>
          </div>
           <div className="rounded-2xl border border-copper/40 bg-background p-6 text-center text-ink shadow-2xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Oferta especial</p>
            <p className="mt-5 text-sm text-muted-foreground">De <span className="line-through">R$ 408</span> por apenas</p>
            <div className="mt-2 flex items-start justify-center gap-1">
              <span className="mt-3 text-xl text-ink/60">R$</span>
              <span className="font-display text-8xl leading-none text-ink">27</span>
            </div>
            <p className="mt-3 text-[13px] text-muted-foreground">Pagamento único · sem mensalidades</p>
            <div className="mt-7">
              <CTA block>QUERO A RECEITA AGORA</CTA>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Compra 100% segura</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30 dias de garantia</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Acesso imediato</span>
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
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={n8.url} alt="Método Rugas Nunca Mais" className="w-full" />
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
      <footer className="border-t border-border bg-ink px-4 py-8 text-center text-xs text-primary-foreground/60">
        <p>© Método Rugas Nunca Mais · Todos os direitos reservados</p>
        <p className="mx-auto mt-2 max-w-2xl">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Resultados podem variar de pessoa para pessoa.</p>
      </footer>
    </main>
  );
}
