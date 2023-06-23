import Sidebar from "./Components/side-bar"
import SearchBar from "./Components/SearchBar"

function App() {

  return (
    <>
    <div className="bg-black">
      {/* <div className="text-5xl text-center">Hello MusicApp</div> */}
      <div className="w-full h-screen bg-back object-cover flex items-center">
        <Sidebar/>
      </div>

      <div className="">
        <SearchBar/>
      </div>



    </div>
    </>
  )
}

export default App
