type Testimonial = { name: string; text: string; rating?: number };

// Iniciais do primeiro e último nome, ex.: "Camila Rodrigues Souza" → "CS"
function initials(name: string) {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Card({ t, hidden }: { t: Testimonial; hidden?: boolean }) {
  return (
    <figure className="tcard" aria-hidden={hidden || undefined}>
      {/* Balão de mensagem, como uma resposta no direct */}
      <div className="tcard__bubble">
        {/* As estrelas são pintadas até a porcentagem da nota (4.5 → 90%), o que gera a meia estrela */}
        <div
          className="tcard__stars"
          style={{ "--fill": `${((t.rating ?? 5) / 5) * 100}%` } as React.CSSProperties}
          role="img"
          aria-label={`${String(t.rating ?? 5).replace(".", ",")} de 5 estrelas`}
        >
          ★★★★★
        </div>
        <blockquote>{t.text}</blockquote>
      </div>
      <figcaption>
        <span className="tcard__avatar" aria-hidden="true">{initials(t.name)}</span>
        <span>
          <strong>{t.name}</strong>
          <small>Confeiteira</small>
        </span>
      </figcaption>
    </figure>
  );
}

// Letreiro contínuo feito só com CSS: a lista é renderizada duas vezes e anda -50%,
// então o fim encaixa no começo sem "pulo". Pausa ao passar o mouse.
function Row({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
        {items.map((t) => <Card key={t.name} t={t} />)}
        {items.map((t) => <Card key={`${t.name}-copy`} t={t} hidden />)}
      </div>
    </div>
  );
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <div className="testimonials">
      <Row items={items.slice(0, half)} />
      <Row items={items.slice(half)} reverse />
    </div>
  );
}
