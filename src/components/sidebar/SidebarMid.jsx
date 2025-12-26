import {
  House, Compass, Layers, Bookmark,
  Play, Clock, FolderOpen, Download, Settings
} from "lucide-react"

const SidebarMid = () => {
  const menuGroups = [
    [
      { icon: House, label: "home" },
      { icon: Compass, label: "explore" },
      { icon: Layers, label: "genres" },
      { icon: Bookmark, label: "favorites" }
    ],
    [
      { icon: Play, label: "continue watching" },
      { icon: Clock, label: "recently added" },
      { icon: FolderOpen, label: "my collections" },
      { icon: Download, label: "downloads" }
    ],
    [
      { icon: Settings, label: "Settings" },
    ]
  ]

  return (
    <div>
      {
        menuGroups.map((menu, idx) => {
          return <div key={idx} className="border-b-2 border-[#222] py-8 last:border-none">
            <ul className="flex flex-col gap-6">
              {
                menu.map(({ icon: Icon, label }, idx) => {
                  return <li key={idx} className="flex items-center gap-2">
                    {<Icon className="w-5 h-5" />}
                    <span className="capitalize">{label}</span>
                  </li>
                })
              }
            </ul>
          </div >
        })
      }
    </div>
  )
}

export default SidebarMid
