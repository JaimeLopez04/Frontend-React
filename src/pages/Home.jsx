import Sidebar from "../Components/side-bar"
import SearchBar from "../Components/SearchBar"

function Home() {

    return (
        <>
        <div className="flex flex-row">
            <div className="w-full h-screen bg-back object-cover flex items-center">
                <Sidebar/>
            </div>
            <SearchBar/>
            
        </div>
        </>
    )
}

export default Home
