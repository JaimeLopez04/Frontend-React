import Sidebar from "../Components/side-bar"
import SearchBar from "../Components/SearchBar"
import CardSong from "../Components/CardSong"

function Home() {

    return (
        <>
            <div className="flex overflow-hidden">
                <aside class="h-screen flex items-center justify-center fixed top-0 left-0 z-10">
                    <Sidebar/>
                </aside>
            </div>
            <div className="flex flex-col w-full overflow-hidden relative">
                <nav className="h-[4.5rem] flex justify-between fixed top-3 ml-[22rem] mr-2 inset-x-0 z-10 bg-white/10 items-center rounded-xl border border-solid border-white border-opacity-10 ">
                    <h1 className="p-2 pl-6 pt-1 font-bold text-4xl text-white whitespace-pre opacity-100">Inicio</h1>
                    <SearchBar/>
                </nav>
                <div class="flex">
                    <main class="flex-auto min-h-screen p-4 overflow-hidden pt-24 pl-96 pr-60 mb-20">
                        <div class=" grid grid-cols-2 gap-y-2 gap-x-56 lg:grid-cols-4 ">
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                            <CardSong/>
                        </div>
                    </main>
                    <footer>
                        <div className="bottom-3 inset-x-0 justify-center z-10 text-xl h-20 flex fixed bg-black/80 items-center ml-[22rem] mr-2">
                            reproductor
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home
