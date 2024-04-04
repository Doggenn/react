

export default function Card({card}) {
  return (
      <div className="box-b promo">
          <img src={card.img} alt={card.title} />
          <h3>{card.title}  {card.tag}</h3>
          <p>{card.price} {card.discount}%</p>
        </div>
  )
}
