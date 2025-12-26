import SearchBar from "./SearchBar.jsx"
import Notification from "./Notification.jsx"
import Profile from "./Profile.jsx"

const MainContentTop = () => {
  return (
    <div className="pt-5 pr-10 mb-4 flex justify-between items-center">
      <SearchBar />
      <div className="flex items-center gap-4">
        <Notification />
        <Profile />
      </div>
    </div>
  )
}

export default MainContentTop
