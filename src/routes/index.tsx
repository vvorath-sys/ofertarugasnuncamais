import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Clock, Lock, ChevronDown, ArrowRight, Sparkles, Flame } from "lucide-react";
import { useEffect, useState } from "react";
import antesDepois from "@/assets/antes-depois.png.asset.json";
import img2 from "@/assets/img2.png.asset.json";
import img3 from "@/assets/img3.png.asset.json";
import img4 from "@/assets/img4.png.asset.json";
import img6 from "@/assets/img6.png.asset.json";
import img7 from "@/assets/img7.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: antesDepois.url },
      { name: "twitter:image", content: antesDepois.url },
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

function Landing() {
  return (
    <main className="min-h-screen">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] md:text-xs">
          <Flame className="h-3.5 w-3.5 text-copper" />
          <span>Oferta relâmpago · frete digital grátis · acesso imediato</span>
        </div>
      </div>

      {/* NAV */}
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-display text-xl text-ink md:text-2xl">
            Rugas <em className="text-copper">Nunca Mais</em>
          </div>
          <a href={CHECKOUT} className="hidden rounded-full border border-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-white md:inline-block">
            Acessar oferta
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">
              <Sparkles className="h-3 w-3" /> Método 100% Natural
            </div>
            <h1 className="font-display text-[2.6rem] leading-[1.02] text-ink md:text-6xl lg:text-7xl">
              Rugas visivelmente <em className="text-copper">suavizadas</em> em poucas semanas —
              <span className="block">sem cremes caros.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Um protocolo caseiro com <strong className="text-ink">3 ingredientes</strong> que você já tem na cozinha. Aplicado por mais de <strong className="text-ink">27.000 mulheres</strong> com resultados reais.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Reduz linhas de expressão em 2–3 semanas",
                "Rotina de 15 minutos, 2x por semana",
                "Sem procedimentos, sem agulhas, sem risco",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                  <span className="text-[15px] text-ink">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTA />
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-xs text-muted-foreground">4.9 · 3.284 avaliações</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Pagamento seguro</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Garantia de 30 dias</div>
              <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Acesso imediato</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-copper/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 shadow-2xl">
              <img src={antesDepois.url} alt="Antes e depois do Método Rugas Nunca Mais" className="w-full" />
              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/95">
                <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur">Antes</span>
                <span className="rounded-full bg-copper px-3 py-1">Depois</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border bg-card px-4 py-3 text-center text-xs text-muted-foreground">
              Resultado real após <strong className="text-ink">4 semanas</strong> seguindo o protocolo
            </div>
          </div>
        </div>
      </section>

      {/* PRESS / LOGOS BAR */}
      <section className="border-y border-border bg-cream/60">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-6">
          <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Recomendado por especialistas em skincare natural
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-display text-xl text-muted-foreground/70 md:text-2xl">
            <span>VOGUE</span>
            <span className="italic">Elle</span>
            <span>MARIE CLAIRE</span>
            <span className="italic">Harper's</span>
            <span>GLAMOUR</span>
          </div>
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
            Cremes de R$ 400, séruns importados, procedimentos que ardem — e mesmo assim, a rugas continuam aparecendo. Não é falta de esforço. É falta do método certo.
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

      {/* SOLUÇÃO / COMO FUNCIONA */}
      <section className="bg-ink-gradient px-4 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <img src={img2.url} alt="Máscara natural sendo aplicada" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-copper px-5 py-4 text-sm font-semibold text-white shadow-xl md:block">
              15 min<br /><span className="text-xs font-normal opacity-80">2x por semana</span>
            </div>
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

      {/* COMO USAR */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Simples de aplicar</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">4 passos. 15 minutos.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { t: "Limpe o rosto", d: "Pele limpa e seca para máxima absorção." },
              { t: "Aplique a máscara", d: "Espalhe uma camada uniforme, evite área dos olhos." },
              { t: "Relaxe 15 min", d: "Deite, respire. Deixe os ativos agirem." },
              { t: "Enxágue", d: "Água morna. Sinta a diferença imediatamente." },
            ].map((s, i) => (
              <div key={s.t} className="relative rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-5xl text-copper/30">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-xl text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL — depoimento destaque */}
      <section className="bg-cream px-4 py-20 md:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 overflow-hidden rounded-3xl bg-card shadow-xl md:grid-cols-2">
          <img src={img6.url} alt="Sandra M." className="h-full w-full object-cover md:min-h-[420px]" />
          <div className="p-8 md:p-12">
            <Stars size="h-5 w-5" />
            <blockquote className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
              "Depois de 3 semanas, minha filha perguntou o que eu tinha feito na pele. <em className="text-copper">Nunca imaginei que algo tão simples funcionasse tanto.</em>"
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-white">S</div>
              <div>
                <div className="text-sm font-semibold text-ink">Sandra M., 52</div>
                <div className="text-xs text-muted-foreground">Cliente verificada · usa há 6 semanas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade de depoimentos */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            { name: "Marlene R.", age: 47, quote: "Uso 3x por semana. A textura da pele mudou completamente em 1 mês.", time: "2 meses de uso" },
            { name: "Cristiane A.", age: 55, quote: "Minhas linhas de expressão ficaram muito mais suaves. Meu marido percebeu.", time: "5 semanas de uso" },
            { name: "Débora L.", age: 43, quote: "Gastei uma fortuna em produtos importados. Este é o único que entregou de verdade.", time: "3 meses de uso" },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <Stars />
              <p className="mt-4 text-[15px] leading-relaxed text-ink">"{t.quote}"</p>
              <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="font-semibold text-ink">{t.name}, {t.age}</div>
                <div className="mt-0.5">{t.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="border-y border-border bg-sand/40 px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-4">
          {[
            { n: "27k+", l: "mulheres transformadas" },
            { n: "94%", l: "notaram pele mais macia" },
            { n: "97%", l: "linhas de expressão suavizadas" },
            { n: "4.9★", l: "avaliação média" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-ink">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
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
          <img src={img7.url} alt="Ritual de autocuidado" className="rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-ink-gradient px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper">Oferta por tempo limitado</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Comece hoje por apenas <em className="text-copper">R$ 27</em>
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/70">
              <span>Esta oferta expira em:</span>
              <Countdown />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-white text-ink shadow-2xl">
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="p-8 md:p-12">
                <div className="flex items-baseline gap-3">
                  <span className="text-lg text-muted-foreground line-through">R$ 97</span>
                  <span className="font-display text-6xl text-ink md:text-7xl">R$ 27</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Pagamento único · acesso vitalício</p>

                <ul className="mt-8 space-y-3.5">
                  {[
                    "Ebook completo do Método Rugas Nunca Mais",
                    "Guia passo a passo de aplicação",
                    "Frequência ideal e erros a evitar",
                    "BÔNUS: 5 hábitos que envelhecem a pele",
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

                <div className="mt-8">
                  <CTA block>QUERO ACESSAR AGORA</CTA>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Compra 100% segura</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30 dias de garantia</span>
                  </div>
                </div>
              </div>

              <div className="relative bg-cream p-8 md:p-12">
                <img src={img3.url} alt="Ingredientes naturais" className="rounded-2xl shadow-lg" />
                <div className="mt-6 rounded-2xl border border-copper/30 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-8 w-8 shrink-0 text-copper" />
                    <div>
                      <h3 className="font-display text-lg text-ink">Garantia blindada de 30 dias</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        Aplique por 30 dias. Se não notar diferença, devolvemos 100% do valor. Sem burocracia.
                      </p>
                    </div>
                  </div>
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
      <section className="bg-cream px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <img src={img4.url} alt="Método Rugas Nunca Mais" className="rounded-2xl shadow-xl" />
          <div>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
              Sua pele não precisa de mais promessas.
            </h2>
            <p className="mt-6 font-display text-2xl italic text-copper">
              Ela precisa de um cuidado simples, consistente e inteligente.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Junte-se às mais de 27.000 mulheres que já redescobriram uma pele mais firme, hidratada e luminosa — usando apenas o que já está na cozinha.
            </p>
            <div className="mt-8"><CTA>Começar agora por R$ 27</CTA></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink px-4 py-12 text-white/70">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="font-display text-xl text-white">
              Rugas <em className="text-copper">Nunca Mais</em>
            </div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-white">Termos</a>
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Contato</a>
            </div>
          </div>
          <p className="mt-8 text-center text-[11px] leading-relaxed text-white/40">
            © 2026 Rugas Nunca Mais. Todos os direitos reservados. Este produto não substitui aconselhamento médico profissional. Resultados podem variar de acordo com a consistência do uso e características individuais da pele.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground line-through">R$ 97</span>
              <span className="font-display text-xl text-ink">R$ 27</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-copper">Oferta de hoje</div>
          </div>
          <a href={CHECKOUT} className="rounded-full bg-cta-gradient px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            Quero agora
          </a>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </main>
  );
}
