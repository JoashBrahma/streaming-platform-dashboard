import YouMightLikeCard from "./YouMightLikeCard.jsx"

const YouMightLike = () => {
  const movies = [
    {
      img: "https://imgs.search.brave.com/CMbm-yKdoEb0k-M7SDm3s8Zk_HiITHUv46TGBryeiZo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC9mL2QvNC8x/NDA4OTE4LW1vc3Qt/cG9wdWxhci1zaGlu/Y2hhbi13YWxscGFw/ZXJzLTE5MjB4MTA4/MC1zYW1zdW5nLWdh/bGF4eS5qcGc",
      title: "Crayon Shin Chan"
    },
    {
      img: "https://wallpapercave.com/dwp1x/wp6327738.jpg",
      title: "Phir Hera Pheri"
    },
    {
      img: "https://wallpapercave.com/dwp1x/wp7288501.jpg",
      title: "Kung Fu Hustle"
    },
    {
      img: "https://images3.alphacoders.com/249/thumbbig-2499.webp",
      title: "Bleach"
    }
  ]

  return (
    <div className="w-full flex flex-col pr-4 mb-3">
      <div className="flex justify-between items-center py-2 mb-2 pr-8">
        <h2 className="text-2xl font-medium">You Might Like</h2>
        <button className="bg-[#ffffff22] py-1 px-3 rounded-md">See All</button>
      </div>
      <div className="flex flex-wrap gap-4">
        {
          movies.map(({ img, title }, idx) => {
            return <YouMightLikeCard key={idx} img={img} title={title} />
          })
        }
      </div>
    </div>
  )
}

export default YouMightLike
