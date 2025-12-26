import { Play, Download, Ellipsis } from "lucide-react"

const NowTrending = () => {
  return (
    <div className="h-130 pr-8">
      <div className="h-full rounded-2xl overflow-hidden relative border-2 border-[#222]">
        <img className="w-full h-full object-cover object-top" src="https://images8.alphacoders.com/661/thumb-1920-661199.png" alt="Image" />
        <div className="absolute top-0 w-full h-full p-5 bg-linear-to-r from-[#000000dd] to-transparent flex flex-col justify-between gap-4">
          <div className="w-fit text-sm px-3 py-1.5 bg-[#11111199] border border-[#ffffff66] capitalize rounded-full">🔥 Now Trending</div>

          <div className="w-[40%]">
            <div className="flex gap-2 mb-6">
              <div className="w-fit text-sm px-3 py-1.5 bg-[#11111199] border border-[#ffffff66] capitalize rounded-full">Sci-fi</div>
              <div className="w-fit text-sm px-3 py-1.5 bg-[#11111199] border border-[#ffffff66] capitalize rounded-full">Adventure</div>
            </div>
            <div className="mb-8">
              <h1 className="text-6xl font-medium mb-4">Doraemon: Nobita and the Steel Troops</h1>
              <p className="text-[18px] text-[#ffffffcc]">The story centers on Nobita, who, jealous of his friend Suneo's new radio-controlled robot, demands that Doraemon build him a giant robot to surpass it.</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 bg-purple-500 text-black font-medium rounded-md flex items-center gap-1">
                <Play className="w-5 h-5" />
                <span>Watch Now</span>
              </button>
              <button className="p-3 bg-[#111111cc] rounded-md">
                <Download />
              </button>
              <button className="p-3 bg-[#111111cc] rounded-md">
                <Ellipsis />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NowTrending
