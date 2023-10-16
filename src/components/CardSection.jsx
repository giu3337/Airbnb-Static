import {Card} from "./Card"

export const CardSection = ({data}) => {

    const renderCards = data.map(card => {
        return <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.country}
        title={card.title}
        price={card.price}
        location={card.location}
        openSpots={card.openSpots}
        />
      })

  return (
    <section className="mt-12 p-7  flex  gap-3 flex-wrap sm:flex-row">
    {renderCards}
    </section>
  )
}
