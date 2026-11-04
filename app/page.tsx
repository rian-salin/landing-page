import Carousel from "@/components/Carousel";
import ImageSlot from "@/components/ImageSlot";

/* ---------- Conteúdo (edite aqui) ---------- */

const features = [
  { icon: "sparkle", title: "Stories Mais Bonitos", text: "Aparência profissional e elegante que reflete o valor do seu trabalho." },
  { icon: "eye", title: "Retenha a Atenção", text: "Elementos que fazem as pessoas pararem e lerem o que você tem a dizer." },
  { icon: "heart", title: "Mais Engajamento", text: "Figurinhas estratégicas que incentivam cliques, respostas e interações reais." },
  { icon: "bolt", title: "Conteúdo Rápido", text: "Não perca mais tempo tentando criar. Copie, cole e poste em segundos." },
] as const;

const receiveItems = [
  "+15.000 figurinhas exclusivas",
  "Organizadas por categorias",
  "Só copiar e colar no Instagram",
  "Acesso imediato após pagamento",
  "Funciona para Android e iPhone",
];

const bonuses = [
  { n: "01", title: "Figurinhas Exclusivas", text: "+3.000 figurinhas únicas e modernas que você não encontra em lugar nenhum — prontas para transformar qualquer story em conteúdo de impacto." },
  { n: "02", title: "+200 Sombras Elegantes", text: "Efeitos de sombra profissionais que elevam o visual dos seus stories instantaneamente. O detalhe que separa um perfil amador de um perfil que impressiona." },
  { n: "03", title: "Templates Prontos no Canva", text: "Modelos de story já montados e fáceis de personalizar. Edite em segundos e poste com a confiança de quem tem um designer on-line." },
  { n: "04", title: "Suporte Prioritário no WhatsApp", text: "Ficou com alguma dúvida? Nossa equipe responde rapidinho pelo WhatsApp. Você nunca vai ficar na mão na hora de usar suas figurinhas." },
];

const faq = [
  { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento, você recebe o link de acesso no seu email." },
  { q: "Funciona em Android?", a: "Sim! O pack funciona em Android e iPhone." },
  { q: "Preciso baixar aplicativo pesado?", a: "Não. Basta copiar e colar as figurinhas direto no Instagram." },
  { q: "Por quanto tempo terei acesso?", a: "No Plano Premium o acesso é vitalício. No Básico, por 6 meses." },
];

// Coloque aqui os links do checkout (Kiwify, Hotmart, etc.)
const CHECKOUT_BASICO = "#";
const CHECKOUT_PREMIUM = "#";

/* ---------- Ícones ---------- */

const icons = {
  sparkle: <><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
  eye: <><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />,
  bolt: <path d="M13 2L3 14h9l-1 8 10-12h-9z" />,
};

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {icons[name]}
    </svg>
  );
}

/* ---------- Página ---------- */

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <span className="badge"><i /> Mais vendido no Brasil</span>
            <h1>
              <span className="grad">+15.000 Figurinhas</span>
              <br />para Fazer Seus<br />Stories Viralizarem
            </h1>
            <p>
              Transforme seus stories comuns em conteúdos absurdamente bonitos e profissionais em
              segundos — copiando e colando direto no Instagram.
            </p>
            <a href="#planos" className="btn btn--grad">QUERO MINHAS FIGURINHAS</a>
            <p className="hero__note">✓ Compra 100% segura • Acesso imediato</p>
          </div>
          <ImageSlot className="hero__img" src="/img/hero.png" alt="Celulares mostrando o pack de figurinhas" label="hero (mockup dos celulares)" />
        </div>
      </section>

      {/* POR QUE VOCÊ VAI AMAR */}
      <section className="section">
        <div className="container">
          <h2>Por que você vai amar</h2>
          <p className="sub">O segredo das influenciadoras para ter um perfil que transmite confiança e beleza.</p>
          <div className="grid grid--4">
            {features.map((f) => (
              <article className="card" key={f.title}>
                <span className="icon"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CARROSSEL */}
      <section className="section section--gray">
        <div className="container">
          <h2>Veja Como Seus Stories Podem Ficar</h2>
          <p className="sub">Esqueça os textos sem graça. Adicione personalidade em cada postagem.</p>
        </div>
        <Carousel />
        <div className="center">
          <a href="#planos" className="btn btn--grad btn--sm">QUERO TRANSFORMAR MEUS STORIES</a>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="section">
        <div className="container receive">
          <div>
            <h2>O Que Você Recebe Imediatamente</h2>
            <p className="sub sub--left">
              Um arsenal completo para você nunca mais ficar sem ideias do que postar ou como deixar
              seu conteúdo atraente.
            </p>
            <ul className="checklist">
              {receiveItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="receive__img">
            <ImageSlot className="img-slot--phone" src="/img/demo.png" alt="Demonstração de uso" label="demonstração (celular)" />
            <small>
              Tela vista é apenas uma demonstração rápida de como funciona. Ao acessar o material
              completo, você receberá as categorias e figurinhas para Android e iPhone.
            </small>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="section section--gray">
        <div className="container">
          <h2>Bônus Exclusivos</h2>
          <p className="sub">Garantindo hoje, você leva estes presentes totalmente de graça.</p>
          <div className="grid grid--4">
            {bonuses.map((b) => (
              <article className="bonus" key={b.n}>
                <ImageSlot src={`/img/bonus-${Number(b.n)}.jpg`} alt={`Bônus ${b.n}`} label={`bônus ${b.n}`} />
                <div className="bonus__body">
                  <h3>Bônus {b.n}:<br />{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="section" id="planos">
        <div className="container">
          <h2>Escolha Seu Plano</h2>
          <p className="sub">Um investimento pequeno para uma mudança gigante no visual do seu perfil.</p>
          <div className="plans">
            <div className="plan">
              <h3 className="plan__name">PLANO BÁSICO</h3>
              <small>Por apenas</small>
              <div className="price">R$ 5,99<span>/único</span></div>
              <ul className="plan__list">
                <li>+3.000 figurinhas</li>
                <li>Acesso por 6 meses</li>
                <li>Suporte por email</li>
                <li>Garantia de 7 dias</li>
              </ul>
              <a href={CHECKOUT_BASICO} className="btn btn--soft btn--block">PLANO BÁSICO</a>
            </div>
            <div className="plan plan--premium">
              <span className="plan__tag">MAIS ESCOLHIDO ★</span>
              <h3 className="plan__name">PLANO PREMIUM</h3>
              <small><s>De R$ 147 por</s></small>
              <div className="price">R$ 14,99 <span>único</span></div>
              <ul className="plan__list">
                <li>+15.000 figurinhas</li>
                <li>Todos os 4 Bônus inclusos</li>
                <li>Acesso VITALÍCIO (para sempre)</li>
                <li>Atualizações gratuitas</li>
                <li>Suporte prioritário WhatsApp</li>
              </ul>
              <a href={CHECKOUT_PREMIUM} className="btn btn--grad btn--block">QUERO O PLANO PREMIUM</a>
              <small className="plan__foot">Pagamento seguro • Acesso imediato</small>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="guarantee">
        <div className="container guarantee__inner">
          <div className="seal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" />
            </svg>
            <small>GARANTIA TOTAL</small>
          </div>
          <div>
            <h3>Zero Risco! 7 Dias de Garantia</h3>
            <p>
              Você pode acessar o material, baixar suas figurinhas e testar nos seus stories. Se por
              qualquer motivo você achar que não é para você, basta nos enviar um email dentro de 7
              dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — <details> já abre/fecha sozinho, sem JavaScript */}
      <section className="section">
        <div className="container container--narrow">
          <h2>Perguntas Frequentes</h2>
          <p className="sub">Tudo que você precisa saber antes de começar.</p>
          <div className="faq">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <div className="container center">
          <h2>Pronta para deixar seus stories<br /><span className="grad">irresistíveis?</span></h2>
          <p>Junte-se a milhares de mulheres que já transformaram seus perfis com nosso pack de figurinhas.</p>
          <a href="#planos" className="btn btn--grad">LIBERAR MEU ACESSO AGORA</a>
          <small>Pagamento seguro processado em ambiente criptografado.</small>
        </div>
      </section>

      <footer className="footer">
        <div className="container center">
          <p>© {new Date().getFullYear()} Pack de Figurinhas. Todos os direitos reservados.</p>
          <p><a href="#">Termos de Uso</a> &nbsp;·&nbsp; <a href="#">Política de Privacidade</a></p>
          <small>Este site não faz parte do Instagram ou Meta Platforms, Inc. Os resultados podem variar de pessoa para pessoa.</small>
        </div>
      </footer>
    </main>
  );
}
