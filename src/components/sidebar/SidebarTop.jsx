import { Tv, ListIndentDecrease } from "lucide-react"

const SidebarTop = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <Tv className="w-10 h-10" />
        <span className="text-3xl font-medium">Drameeo</span>
      </div>
      <button className="lg:cursor-pointer">
        <ListIndentDecrease className="w-5 h-5" />
      </button>
    </div>
  )
}

export default SidebarTop
