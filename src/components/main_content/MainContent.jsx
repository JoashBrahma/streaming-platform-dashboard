import MainContentTop from "./main_content_top/MainContentTop.jsx"
import NowTrending from "./now_trending/NowTrending.jsx"
import ContinueWatching from "./continue_watching/ContinueWatching.jsx"
import YouMightLike from "./you_might_like/YouMightLike.jsx"
import style from "./MainContent.module.css"

const MainContent = () => {
  console.log(style);
  
  return (
    <div className={`overflow-y-scroll py-4 flex flex-col gap-4 ${style["main-content"]}`}>
      <MainContentTop />
      <NowTrending />
      <ContinueWatching />
      <YouMightLike />
    </div>
  )
}

export default MainContent
