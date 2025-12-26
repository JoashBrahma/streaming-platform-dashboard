import { LogOut } from "lucide-react"

const SidebarBottom = () => {
  return (
    <div className="mt-auto">
      <button className="flex items-center gap-2">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default SidebarBottom
