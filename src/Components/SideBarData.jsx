import { datas } from "../Data";

function SidebarData({ setCurrentPage }){

    return (
        <div className="">
            {datas.map((data) => {
                const handleClick = () => {
                    setCurrentPage(data.navItem);
                };
                return (
                    <div
                        className="flex items-center mt-2 p-3 rounded-lg cursor-pointer hover:bg-purple hover:bg-opacity-20 transition-all duration-300 last:absolute last:bottom-4 last:w-72 last:mr-4 max-md:last:w-[4.3rem]"
                        key={data.id}
                        onClick={handleClick}>
                            <a href={data.ruta}
                                className="flex justify-center items-center">
                                <div className="mr-8 text-xl text-white max-md:ml-3">
                                    {data.icon}
                                </div>
                                <div className="text-base text-white whitespace-pre max-md:hidden">
                                    {data.text}
                                </div>
                            </a>
                    </div>
                );
            })}
        </div>
    );
}

export default SidebarData