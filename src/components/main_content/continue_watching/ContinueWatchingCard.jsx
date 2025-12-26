const ContinueWatchingCard = (props) => {
  return (
    <div className="w-93.75 aspect-[1.75/1] shrink-0 overflow-hidden rounded-xl relative">
      <img className="w-full h-full object-cover" src={props.img} alt="Image" />
      <div className="absolute bottom-0 w-full p-4 bg-linear-to-t from-[#000000cc] to-transparent">
        <h3 className="text-lg font-medium mb-2">{props.title}</h3>
        <div className="text-xs flex justify-between items-center mb-2">
          <span className="bg-[#00000066] px-3 py-0.5 rounded-full border border-[#222]">S1, Ep-3</span>
          <span>30min 55sec</span>
        </div>
        <div className="w-full h-1 bg-linear-to-r from-purple-500 from-50% to-[#ffffff33] to-50% rounded-full"></div>
      </div>
    </div>
  )
}

export default ContinueWatchingCard
