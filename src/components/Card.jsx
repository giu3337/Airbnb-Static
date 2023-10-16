export const Card = (props) => {

  const{ img, rating, reviewCount, country, title, price, openSpots, location} = props

  let badgeText
  if (openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (location === "Online") {
      badgeText = "ONLINE"
  }``
  


  return (
        <div className="mx-auto">
            <div className="relative">
                <img src={img} alt="" className="h-60 object-cover w-full"/>
                { badgeText  && <div className="absolute top-2 left-2 bg-white px-1.5 py-0.5"><span className="text-xs">{badgeText}</span></div>}
            </div>

            <div className="pb-10">
                <div className="flex gap-1.5 pt-3">
                    <img src="star-1.png" alt="" className="h-3 w-3"/>
                    <span className="text-xs">{rating}</span> 
                    <span className="text-[#918E9B] text-xs">({reviewCount}) &middot; {country}</span>
                </div>
                <p className="font-light py-0.5 text-xs overflow-hidden text-overflow-ellipsis whitespace-nowrap">{title}</p>
                <p className="font-semibold text-xs">From ${price} / <span className="font-light">person</span></p> 
            </div>
        </div> 
  )
}
