import Sidebar from "./Components/side-bar"
import SearchBar from "./Components/SearchBar"

function App() {

  return (
    <>
    <div className="bg-black flex flex-row" >

      {/* Barra Lateral */}
      <div className="w-full h-screen bg-back object-cover flex items-center">
        <Sidebar/>
      </div>

      <div className="left-[5rm]">
        <SearchBar/>
      </div>



    </div>
    </>
  )
}

export default App
