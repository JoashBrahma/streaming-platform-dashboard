import MainContentTop from "./main_content_top/MainContentTop.jsx"
import NowTrending from "./now_trending/NowTrending.jsx"
import ContinueWatching from "./continue_watching/ContinueWatching.jsx"

const MainContent = () => {
  return (
    <div className="overflow-hidden">
      <MainContentTop />
      <NowTrending />
      <ContinueWatching />
    </div>
  )
}

export default MainContent
