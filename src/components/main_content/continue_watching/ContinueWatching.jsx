import ContinueWatchingCard from "./ContinueWatchingCard.jsx"
import style from "./ContinueWatchingCards.module.css"

const ContinueWatching = () => {
  const movies = [
    {
      img: "https://imgs.search.brave.com/EKE5tZyL3KtIA5Tp8YgSejpHJcQVGFHdPl1gQAsvY4o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXItaG91c2Uu/Y29tL2RhdGEvb3V0/LzIxL3dhbGxwYXBl/cjJ5b3VfOTM2Ny5q/cGc",
      title: "Shaolin Soccer"
    },
    {
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/11990.jpeg",
      title: "Spider-Man"
    },
    {
      img: "https://wallpapers.com/images/high/crayon-shin-chan-honeymoon-hurricane-cover-wgwthaxe7fb8qc7k.webp",
      title: "Crayon Shin Chan"
    },
    {
      img: "https://images.wallpapersden.com/image/wxl-avatar-fire-and-ash-movie-2025_93219.jpg",
      title: "Avatar"
    },
    {
      img: "https://wallpapercat.com/w/middle-retina/8/1/a/170859-3500x1969-desktop-hd-venom-background-photo.jpg",
      title: "Venom"
    }
  ]

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center py-4 pr-10 mb-3">
        <h2 className="text-3xl font-medium">Continue Watching</h2>
        <button className="bg-[#ffffff22] py-1 px-3 rounded-md">See All</button>
      </div>
      <div className={`w-full flex gap-4 overflow-x-scroll ${style.cards}`}>
        {
          movies.map(({img, title}, idx) => {
            return <ContinueWatchingCard key={idx} img={img} title={title} />
          })
        }
      </div>
    </div>
  )
}

export default ContinueWatching
