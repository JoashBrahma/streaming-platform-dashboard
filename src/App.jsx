import Sidebar from "./components/sidebar/Sidebar.jsx"
import MainContent from "./components/main_content/MainContent.jsx"

const App = () => {
  return (
    <div className="h-screen flex gap-4 overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App