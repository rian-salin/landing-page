import Carousel from "@/components/Carousel";
import ImageSlot from "@/components/ImageSlot";
import StickyCta from "@/components/StickyCta";
import Testimonials from "@/components/Testimonials";

/* ---------- Conteúdo (edite aqui) ---------- */

const features = [
  { icon: "sparkle", title: "Stories mais bonitos", text: "Transforme publicações simples em conteúdos encantadores, com elementos visuais que combinam perfeitamente com o universo da confeitaria." },
  { icon: "eye", title: "Chame a atenção dos clientes", text: "Use frases, ilustrações e elementos criativos para destacar seus produtos e fazer seus seguidores prestarem atenção nas suas publicações." },
  { icon: "heart", title: "Mais criatividade e interação", text: "Tenha figurinhas para divulgar novidades, apresentar seus doces, anunciar encomendas e interagir com seus clientes." },
  { icon: "bolt", title: "Economize tempo", text: "Chega de perder tempo criando elementos do zero. Escolha suas figurinhas, adicione aos Stories e publique!" },
] as const;

const receiveItems = [
  "+140 figurinhas exclusivas para confeiteiras",
  "Organizadas por categorias",
  "Só copiar e colar no Instagram",
  "Acesso imediato após pagamento",
  "Funciona para Android e iPhone",
];

const bonuses = [
  { n: "01", img: "/img/bonus-1.webp", title: "Coleção especial de Páscoa 🐰", text: "Deixe seus Stories no clima mais doce do ano! Figurinhas temáticas com coelhinhos, ovos de chocolate, bombons e elementos especiais para divulgar suas encomendas de Páscoa." },
  { n: "02", img: "/img/bonus-2.webp", title: "Coleção especial de Natal 🎄", text: "Entre no clima natalino e deixe suas publicações ainda mais encantadoras! Figurinhas com árvores de Natal, presentes, doces natalinos e elementos decorativos para suas campanhas de fim de ano." },
  { n: "03", img: "/img/bonus-3.webp", title: "Coleção especial de Dia das Mães 🌷", text: "Prepare seus Stories para uma das datas mais especiais do ano! Figurinhas delicadas, florais e românticas para divulgar caixas de doces, bolos especiais e presentes personalizados." },
  { n: "04", img: "/img/bonus-4.webp", title: "Coleção especial de Dia dos Namorados ❤️", text: "Deixe suas publicações apaixonantes! Figurinhas com corações, chocolates, presentes e elementos românticos para divulgar suas opções especiais para casais." },
];

// rating é opcional (padrão 5). Aceita meia estrela, ex.: 4.5
const testimonials = [
  { name: "Camila Rodrigues Souza", text: "Eu tinha vergonha de postar meus doces porque os stories ficavam sem graça. Com as figurinhas, meu perfil ganhou outra cara e já recebi elogios de clientes novas!" },
  { name: "Fernanda Martins Lopes", text: "As figurinhas deram identidade visual ao meu Instagram. Economizo tempo e meus stories ficam muito mais profissionais." },
  { name: "Juliana Santos Ferreira", rating: 4.5, text: "Gostei da variedade: tem figurinha para promoção, cardápio e datas comemorativas. Usei na Páscoa e foi um sucesso." },
  { name: "Patrícia Lima Andrade", text: "Já testei outros pacotes, mas nenhum tinha essa qualidade e delicadeza. O preço é justo e valeu cada centavo." },
  { name: "Bruna Teixeira Costa", text: "Prático e bonito! Consegui organizar meus stories sem saber design. Minhas seguidoras até perguntam onde eu consigo as figurinhas." },
  { name: "Mariana Alves Pereira", rating: 4.5, text: "As cores combinam demais com o universo dos doces. Meu feed e meus stories agora parecem uma coisa só." },
  { name: "Larissa Pinheiro Duarte", text: "Eu vivia gastando horas montando artes. Hoje abro o app, aplico a figurinha e pronto. Foi uma economia enorme de tempo." },
  { name: "Aline Cardoso Ribeiro", text: "Comecei a vender para a vizinhança e hoje divulgo para a cidade toda. As figurinhas deixaram meu trabalho com cara de marca de verdade." },
  { name: "Renata Barbosa Nunes", text: "O pacote de datas comemorativas me salvou no Dia das Mães. Vendi todas as encomendas da semana!" },
  { name: "Tatiane Freitas Moreira", text: "Muito fofas e fáceis de usar. Minhas clientes elogiam sempre que posto um story novo." },
  { name: "Gabriela Nogueira Araújo", text: "As figurinhas temáticas são lindas e combinam com o público que eu atendo. Já indiquei para três amigas confeiteiras." },
  { name: "Priscila Dias Carvalho", rating: 4.5, text: "Tenho pouco tempo, então praticidade é tudo. Consigo fazer um story bonito em dois minutos." },
  { name: "Débora Kruger Oliveira", text: "Meu cardápio do dia ficou muito mais atrativo. Percebi que o engajamento dos stories aumentou bastante." },
  { name: "Vanessa Oliveira Machado", rating: 4.5, text: "Achei que seria mais um pacote comum, mas me surpreendi. A qualidade das artes é ótima e nada fica pixelado." },
  { name: "Carolina Guedes Mendes", text: "Eu não entendo nada de design e mesmo assim consegui deixar meus stories lindos. Recomendo muito para quem está começando." },
  { name: "Sabrina Vieira Campos", text: "Atendo um público mais sofisticado e as figurinhas combinaram perfeitamente com a minha proposta. Elegantes e delicadas." },
  { name: "Elisa Henrique Rocha", rating: 4.5, text: "O atendimento foi muito atencioso e tiraram todas as minhas dúvidas antes da compra. Já virei cliente fiel." },
  { name: "Natália Jesus Barros", text: "Minhas vendas por encomenda aumentaram depois que passei a divulgar com as figurinhas. O investimento se pagou rápido." },
  { name: "Isabela Werner Cunha", text: "Uso nos meus tutoriais e nos stories de bastidores. Meus seguidores sempre comentam que ficou tudo muito bem feito." },
  { name: "Rafaela Quintana Silva", rating: 4.5, text: "Entrega rápida, material de qualidade e preço acessível. Já estou esperando os próximos lançamentos." },
];

const faq = [
  { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento, você recebe o link de acesso no seu email." },
  { q: "Funciona em Android?", a: "Sim! O pack funciona em Android e iPhone." },
  { q: "Preciso baixar aplicativo pesado?", a: "Não. Basta copiar e colar as figurinhas direto no Instagram." },
  { q: "Por quanto tempo terei acesso?", a: "No Plano Premium o acesso é vitalício. No Básico, por 6 meses." },
];

const PRECO_BASICO = "R$ 5,99";
const PRECO_PREMIUM = "R$ 14,99";
const PRECO_PREMIUM_DE = "R$ 147";

// Coloque aqui os links do checkout (Kiwify, Hotmart, etc.)
const CHECKOUT_BASICO = "#";
const CHECKOUT_PREMIUM = "#";

/* ---------- Ícones ---------- */

const icons = {
  sparkle: <><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
  eye: <><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />,
  bolt: <path d="M13 2L3 14h9l-1 8 10-12h-9z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
};

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

/** Borda de calda escorrendo. `from` é a cor da seção de cima, que "pinga" na de baixo. */
function Drip({ from }: { from: "glace" | "calda" | "leite" }) {
  return <div className={`drip drip--${from}`} aria-hidden="true" />;
}

/* ---------- Página ---------- */

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="sticker hero__sticker">Exclusivo para confeiteiras 🍰</p>
            <h1><span className="nowrap">+140 figurinhas</span> para transformar seus Stories em vitrines irresistíveis</h1>
            <p className="hero__lead">
              Deixe seus Stories muito mais bonitos, criativos e profissionais com figurinhas
              exclusivas desenvolvidas especialmente para confeiteiras. Divulgue seus doces, destaque
              suas encomendas e desperte o desejo dos seus clientes com apenas alguns cliques!
            </p>
            <a href="#planos" className="btn" id="hero-cta">Quero minhas +140 figurinhas</a>
            <ul className="assurances">
              <li><Icon name="lock" /> Compra 100% segura</li>
              <li><Icon name="bolt" /> Acesso imediato</li>
            </ul>
          </div>
          <ImageSlot
            className="hero__img"
            src="/img/hero.webp"
            alt="Celular mostrando um Story de confeitaria com figurinhas de Páscoa, Natal, Dia das Mães e Dia dos Namorados"
            label="hero (mockup dos celulares)"
            priority
          />
        </div>
      </section>

      {/* CARROSSEL — logo depois do topo, para a pessoa ver o produto de cara */}
      <section className="section section--calda">
        <Drip from="glace" />
        <div className="container center">
          <h2>Veja algumas figurinhas que você vai receber</h2>
          <p className="sub">
            Chega de Stories sem graça! Adicione personalidade, charme e criatividade em cada
            publicação. Explore algumas das figurinhas da coleção exclusiva para confeiteiras.
          </p>
        </div>
        <Carousel />
        <div className="container center">
          <a href="#planos" className="btn btn--light">Quero transformar meus Stories</a>
        </div>
      </section>

      {/* POR QUE VOCÊ VAI AMAR */}
      <section className="section">
        <Drip from="calda" />
        <div className="container">
          <div className="why">
            <div className="why__intro">
              <h2>Por que você vai amar</h2>
              <p>
                Seus doces já são incríveis. Agora seus Stories também merecem ser! Tenha elementos
                visuais prontos para valorizar seus produtos, chamar a atenção dos clientes e deixar
                seu Instagram muito mais atrativo.
              </p>
            </div>
            <ul className="why__list">
              {features.map((f) => (
                <li key={f.title}>
                  <span className="why__icon"><Icon name={f.icon} /></span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="section section--glace">
        <div className="container receive">
          <div>
            <h2>O que você recebe na hora</h2>
            <p className="receive__lead">
              Um arsenal completo para você nunca mais ficar sem ideias do que postar ou como deixar
              seu conteúdo atraente.
            </p>
            <ul className="checklist">
              {receiveItems.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
            </ul>
          </div>
          <figure className="receive__demo">
            <div className="phone">
              {/* muted + playsInline são obrigatórios para o autoplay funcionar no celular */}
              <video src="/img/demo.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Demonstração: aplicando figurinhas em um Story" />
            </div>
            <figcaption>
              Demonstração rápida de como funciona. No material completo você recebe todas as
              categorias e figurinhas para Android e iPhone.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="section">
        <div className="container">
          <div className="center">
            <h2>Bônus exclusivos</h2>
            <p className="sub">
              No plano Premium você leva estas 4 coleções extras de graça, para usar nas datas que
              mais vendem no ano.
            </p>
          </div>
          <div className="bonuses">
            {bonuses.map((b) => (
              <article className="bonus" key={b.n}>
                <ImageSlot src={b.img} alt={`Bônus ${b.n}: ${b.title}`} label={`bônus ${b.n}`} />
                <div className="bonus__body">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section section--glace">
        <div className="container center">
          <h2>+5.000 confeiteiras já usam nossas figurinhas</h2>
          <p className="sub">Veja o que elas estão falando sobre os novos Stories. 💕</p>
        </div>
        <Testimonials items={testimonials} />
      </section>

      {/* PLANOS */}
      <section className="section" id="planos">
        <div className="container">
          <div className="center">
            <h2>Escolha seu plano</h2>
            <p className="sub">Um investimento pequeno para uma mudança gigante no visual do seu perfil.</p>
          </div>
          <div className="plans">
            <div className="plan">
              <h3 className="plan__name">Plano Básico</h3>
              <p className="plan__was">Por apenas</p>
              <p className="price">{PRECO_BASICO}<span>pagamento único</span></p>
              <ul className="plan__list">
                <li><Icon name="check" />+140 figurinhas</li>
                <li><Icon name="check" />Acesso por 6 meses</li>
              </ul>
              <a href={CHECKOUT_BASICO} className="btn btn--outline btn--block">Comprar o Básico</a>
            </div>
            <div className="plan plan--premium">
              <p className="sticker plan__tag">Mais escolhido ★</p>
              <h3 className="plan__name">Plano Premium</h3>
              <p className="plan__was">De <s>{PRECO_PREMIUM_DE}</s> por</p>
              <p className="price">{PRECO_PREMIUM}<span>pagamento único</span></p>
              <ul className="plan__list">
                <li><Icon name="check" />+140 figurinhas</li>
                <li><Icon name="check" />Bônus 1: Páscoa (+20 figurinhas)</li>
                <li><Icon name="check" />Bônus 2: Natal (+20 figurinhas)</li>
                <li><Icon name="check" />Bônus 3: Dia das Mães (+20 figurinhas)</li>
                <li><Icon name="check" />Bônus 4: Dia dos Namorados (+20 figurinhas)</li>
                <li><Icon name="check" /><strong>Acesso vitalício (para sempre)</strong></li>
                <li><Icon name="check" />Atualizações gratuitas</li>
                <li><Icon name="check" />Garantia de 7 dias</li>
              </ul>
              <a href={CHECKOUT_PREMIUM} className="btn btn--block">Comprar o Premium</a>
              <p className="plan__foot">Pagamento seguro e acesso imediato</p>
            </div>
          </div>

          {/* GARANTIA */}
          <div className="guarantee">
            <div className="seal" aria-hidden="true">
              <span>7</span>
              <small>dias</small>
            </div>
            <div>
              <h3>Zero risco: 7 dias de garantia</h3>
              <p>
                Você pode acessar o material, baixar suas figurinhas e testar nos seus stories. Se por
                qualquer motivo você achar que não é para você, basta nos enviar um email dentro de 7
                dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — <details> já abre/fecha sozinho, sem JavaScript */}
      <section className="section section--glace">
        <div className="container container--narrow">
          <div className="center">
            <h2>Perguntas frequentes</h2>
            <p className="sub">Tudo que você precisa saber antes de começar.</p>
          </div>
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
      <section className="cta" id="cta-final">
        <Drip from="glace" />
        <div className="container center">
          <h2>Pronta para deixar seus Stories irresistíveis?</h2>
          <p>Junte-se a muitas confeiteiras que já transformaram seus Stories com nosso pack de figurinhas.</p>
          <a href="#planos" className="btn btn--light">Escolher meu plano</a>
          <p className="cta__note"><Icon name="lock" /> Pagamento seguro processado em ambiente criptografado.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container center">
          <p>© {new Date().getFullYear()} Pack de Figurinhas. Todos os direitos reservados.</p>
          <p className="footer__links"><a href="#">Termos de Uso</a><a href="#">Política de Privacidade</a></p>
          <small>Este site não faz parte do Instagram ou Meta Platforms, Inc. Os resultados podem variar de pessoa para pessoa.</small>
        </div>
      </footer>

      <StickyCta price={PRECO_PREMIUM} />
    </main>
  );
}
