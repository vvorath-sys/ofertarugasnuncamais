import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles, Leaf, ShieldCheck, Star, Clock, Droplet, Award, ChevronDown } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.png.asset.json";
import img1 from "@/assets/img1.png.asset.json";
import img2 from "@/assets/img2.png.asset.json";
import img3 from "@/assets/img3.png.asset.json";
import img4 from "@/assets/img4.png.asset.json";
import img5 from "@/assets/img5.png.asset.json";
import img6 from "@/assets/img6.png.asset.json";
import img7 from "@/assets/img7.png.asset.json";
import img8 from "@/assets/img8.png.asset.json";
import img9 from "@/assets/img9.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: img1.url },
      { name: "twitter:image", content: img1.url },
    ],
  }),
});

const CTA = ({ children = "QUERO COMEÇAR AGORA" }: { children?: React.ReactNode }) => (
  <a
    href="#oferta"
    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-plum-gradient px-10 py-5 text-base font-semibold uppercase tracking-wider text-primary-foreground shadow-xl shadow-plum/30 transition-all hover:scale-[1.02] hover:shadow-2xl"
  >
    <Sparkles className="h-4 w-4" />
    <span>{children}</span>
  </a>
);

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg text-plum">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-plum transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-4 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-plum/20 bg-lavender-soft px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-plum">
              <Leaf className="h-3.5 w-3.5" /> Método 100% Natural
            </span>
          </div>
          <h1 className="text-center text-5xl leading-[1.05] text-plum md:text-7xl lg:text-8xl">
            Método <em className="not-italic text-gold">Rugas</em>
            <br /> Nunca Mais
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center font-display text-xl italic text-muted-foreground md:text-2xl">
            O segredo natural para amenizar rugas e linhas de expressão — usando apenas 3 ingredientes que já estão na sua cozinha.
          </p>

          <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
            <div className="relative animate-float">
              <div className="absolute -inset-6 rounded-[2rem] bg-lavender-gradient blur-2xl opacity-70" />
              <img src={img1.url} alt="Método Rugas Nunca Mais — ebook" className="relative w-full rounded-3xl shadow-2xl" />
            </div>
            <div className="space-y-6">
              {[
                "Amenize rugas naturalmente em casa",
                "3 ingredientes secretos que você já tem",
                "Resultados visíveis em poucas semanas",
              ].map((t) => (
                <div key={t} className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-gradient text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-lg text-foreground">{t}</p>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Leaf, label: "Natural" },
                  { icon: ShieldCheck, label: "Seguro" },
                  { icon: Sparkles, label: "Eficaz" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 rounded-2xl bg-lavender-soft py-4 text-plum">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-center md:text-left">
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-plum/15 bg-card/70 p-10 text-center shadow-xl backdrop-blur">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Aviso importante</p>
          <h2 className="font-display text-3xl leading-tight text-plum md:text-4xl">
            Você não precisa aceitar que sua pele “está envelhecendo”.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Talvez você esteja cuidando dela da forma errada. Enquanto a maioria investe em cremes caros e promessas milagrosas, existe um método simples, natural e pouco conhecido que muitas mulheres já estão usando em casa.
          </p>
        </div>
      </section>

      {/* SE VOCÊ SE IDENTIFICA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-4xl text-plum md:text-5xl">Se você se identifica com isso…</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "Evita se olhar de perto no espelho",
              "Percebeu o surgimento de rugas e linhas de expressão",
              "Sente a pele mais seca ou sem viço",
              "Já gastou com cremes caros sem resultado real",
              "Tem medo de parecer mais velha do que se sente",
              "Quer uma rotina simples que caiba no seu dia",
            ].map((t) => (
              <div key={t} className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <p className="text-foreground">{t}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl italic text-plum">
            Então o que você vai ver agora pode ser exatamente o que estava faltando.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <img src={img2.url} alt="Aplique e relaxe" className="rounded-3xl shadow-xl" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Como funciona</p>
            <h2 className="mt-3 font-display text-4xl text-plum md:text-5xl">O Método Rugas Nunca Mais</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Uma máscara skincare natural feita com <strong className="text-plum">3 ingredientes secretos</strong> que você provavelmente já tem em casa. Juntos, criam uma combinação rica em antioxidantes, vitaminas e fibras que ajudam a pele a absorver nutrientes e se renovar de dentro pra fora.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Aplique no rosto e deixe agir por até 15 minutos, 2 a 3 vezes por semana. Os primeiros resultados costumam aparecer já nas primeiras semanas.
            </p>
          </div>
        </div>
      </section>

      {/* INGREDIENTES */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl text-plum md:text-5xl">Feito com ingredientes naturais</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Uma combinação exclusiva que aumenta a absorção de nutrientes pela pele.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { icon: Sparkles, title: "Renovação celular", desc: "Antioxidantes protegem contra radicais livres, permitindo que novas células saudáveis se formem." },
                  { icon: Droplet, title: "Hidratação profunda", desc: "Rico em potássio e vitaminas A, B e C, hidrata a derme já nas primeiras aplicações." },
                  { icon: ShieldCheck, title: "Proteção antioxidante", desc: "Reduz os efeitos nocivos dos raios UV, somando força à proteção solar do dia a dia." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lavender-soft text-plum">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-plum">{title}</h3>
                      <p className="mt-1 text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={img3.url} alt="Ingredientes naturais" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* COMO USAR */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-display text-4xl text-plum md:text-5xl">Simples de preparar, fácil de aplicar</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Direto da sua cozinha para o seu ritual de beleza. Sem complicação, apenas resultados reais.
            </p>
          </div>
          <img src={img4.url} alt="Como usar em 4 passos" className="mx-auto mt-12 w-full max-w-3xl rounded-3xl shadow-xl" />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Limpe o rosto",
              "Aplique a máscara",
              "Relaxe por 15 minutos",
              "Enxágue e sinta a diferença",
            ].map((t, i) => (
              <div key={t} className="rounded-2xl border border-border bg-card/60 p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-plum-gradient font-display text-lg text-primary-foreground">{i + 1}</div>
                <p className="mt-3 font-display text-lg text-plum">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTURA */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <img src={img5.url} alt="Textura sedosa e nutritiva" className="rounded-3xl shadow-xl" />
          <div>
            <h2 className="font-display text-4xl text-plum md:text-5xl">Textura sedosa e nutritiva</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Absorção rápida e profunda. A pele recebe nutrientes essenciais enquanto você relaxa por apenas alguns minutos.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "94%", l: "pele mais macia" },
                { n: "97%", l: "linhas suavizadas" },
                { n: "96%", l: "seguiram usando" },
              ].map(({ n, l }) => (
                <div key={n} className="rounded-2xl bg-lavender-soft p-5 text-center">
                  <div className="font-display text-3xl text-plum">{n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr]">
            <img src={img9.url} alt="Antes e depois" className="rounded-3xl shadow-xl" />
            <div>
              <h2 className="font-display text-4xl text-plum md:text-5xl">Resultado visível</h2>
              <p className="mt-3 font-display text-2xl italic text-gold">Veja a transformação</p>
              <ul className="mt-8 space-y-4">
                {[
                  "Rugas profundas visivelmente suavizadas",
                  "Pele muito mais firme",
                  "Hidratação intensa",
                  "Luminosidade natural",
                  "Aparência rejuvenescida",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-lg text-foreground">
                    <Check className="h-5 w-5 text-gold" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTO destacado */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-lavender-soft">
          <div className="grid items-center md:grid-cols-2">
            <img src={img6.url} alt="Depoimento Sandra" className="h-full w-full object-cover" />
            <div className="p-10 md:p-14">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <blockquote className="mt-5 font-display text-2xl italic leading-snug text-plum md:text-3xl">
                “Uso duas vezes por semana e minha pele ficou muito mais macia. Percebi diferença já nas primeiras semanas!”
              </blockquote>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">— Sandra M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-4xl text-plum md:text-5xl">Avaliações 5 estrelas</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Sandra M.", city: "Ariquemes, RO", quote: "Fiquei surpresa que os ingredientes já estavam na minha cozinha. Em poucas semanas minha pele ficou muito mais macia." },
              { name: "Marlene R.", city: "Porto Velho, RO", quote: "Uso 3 vezes por semana como o método ensina. É simples e o resultado na textura da pele é visível." },
              { name: "Cristiane A.", city: "Ji-Paraná, RO", quote: "Nunca imaginei que algo tão simples pudesse fazer diferença assim. Minhas linhas de expressão ficaram bem mais suaves." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-muted-foreground italic">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-gradient font-display text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-plum">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOCUIDADO */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-plum md:text-5xl">Sua rotina de autocuidado</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Poucos minutos por dia fazem a diferença. Transforme o cuidado com a pele em um ritual acolhedor — para você.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5">
              <Clock className="h-8 w-8 text-plum" />
              <div>
                <div className="font-display text-xl text-plum">10 a 15 minutos</div>
                <div className="text-sm text-muted-foreground">2 a 3 vezes por semana</div>
              </div>
            </div>
          </div>
          <img src={img7.url} alt="Rotina de autocuidado" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section id="oferta" className="px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-plum-gradient p-8 text-primary-foreground shadow-2xl md:p-14">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={img8.url} alt="O que você recebe" className="rounded-3xl shadow-2xl" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">O que você recebe</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Acesso completo ao método</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "1 Ebook completo Método Rugas Nunca Mais",
                  "Guia passo a passo de aplicação",
                  "Frequência ideal e erros a evitar",
                  "Bônus: 5 hábitos que envelhecem a pele",
                  "Acesso vitalício ao conteúdo",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-lg">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-widest text-gold">Oferta de hoje</div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-lg line-through opacity-60">De R$ 97</span>
                  <span className="font-display text-5xl">R$ 27</span>
                </div>
                <div className="mt-1 text-sm opacity-80">Pagamento único · Acesso imediato</div>
                <div className="mt-6"><CTA /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-plum/15 bg-card/70 p-10 text-center shadow-xl backdrop-blur">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lavender-soft text-plum">
            <Award className="h-10 w-10" />
          </div>
          <h2 className="mt-6 font-display text-4xl text-plum md:text-5xl">Garantia blindada de 30 dias</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Experimente por 30 dias. Se não notar diferença seguindo o protocolo, devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
          <div className="mt-8"><CTA /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-4xl text-plum md:text-5xl">Perguntas frequentes</h2>
          <div className="mt-10 space-y-4">
            <FAQ q="1. O método funciona pra qualquer tipo de ruga?" a="O método é indicado para rugas de grau leve e linhas de expressão. Ele ameniza rugas maiores e ajuda a retardar o surgimento de novas, mas não substitui tratamento dermatológico para casos avançados." />
            <FAQ q="2. Preciso comprar produtos caros?" a="Não. Os 3 ingredientes são simples, naturais e fáceis de encontrar — provavelmente você já tem tudo em casa." />
            <FAQ q="3. Com que frequência devo aplicar?" a="O ideal é de 2 a 3 vezes por semana. Aplicação em excesso pode reduzir a eficácia e causar oleosidade." />
            <FAQ q="4. Quanto tempo leva pra ver resultado?" a="A maioria das pessoas nota diferença já nas primeiras semanas de uso recorrente. O resultado varia de pessoa para pessoa." />
            <FAQ q="5. Substitui protetor solar ou outros cuidados?" a="Não. O método reforça a proteção antioxidante da pele, mas não substitui protetor solar nem compensa hábitos como tabagismo ou má alimentação." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight text-plum md:text-6xl">
            Sua pele não precisa de mais promessas.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-display text-2xl italic text-muted-foreground">
            Ela precisa de um cuidado simples, consistente e inteligente.
          </p>
          <div className="mt-10"><CTA>Quero acessar o método agora</CTA></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-card/50 px-4 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-display text-2xl text-plum">Método Rugas Nunca Mais</div>
          <p className="mt-3 text-sm text-muted-foreground">
            © 2026 · Todos os direitos reservados. Este produto não substitui aconselhamento médico profissional.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-plum">Termos de Uso</a>
            <a href="#" className="hover:text-plum">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
