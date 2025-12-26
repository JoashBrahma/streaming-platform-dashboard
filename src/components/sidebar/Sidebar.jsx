import SidebarTop from "./SidebarTop.jsx"
import SidebarMid from "./SidebarMid.jsx"
import SidebarBottom from "./SidebarBottom.jsx"

const Sidebar = () => {
  return (
    <div className="w-93.5 p-4">
      <div className="h-full border-2 p-6 rounded-2xl bg-[#111] border-[#222] flex flex-col">
        <SidebarTop />
        <SidebarMid />
        <SidebarBottom />
      </div>
    </div>
  )
}

export default Sidebar
