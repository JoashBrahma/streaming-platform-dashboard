import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="w-1/3 rounded-lg bg-[#111] border-2 border-[#222] flex items-center gap-4 p-3">
      <Search className="w-5 h-5" />
      <input className="w-full outline-none" type="text" placeholder="Search for films, directors, or actors..." />
    </div>
  )
}

export default SearchBar
