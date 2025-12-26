const YouMightLikeCard = (props) => {
  return (
    <div className="w-93.75 aspect-[1.75/1] shrink-0 overflow-hidden rounded-xl relative">
      <img className="w-full h-full object-cover" src={props.img} alt="Image" />
      <div className="absolute bottom-0 w-full p-4 bg-linear-to-t from-[#000000cc] to-transparent">
        <h3 className="text-lg font-medium">{props.title}</h3>
      </div>
    </div>
  )
}

export default YouMightLikeCard
