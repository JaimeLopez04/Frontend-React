import { datas } from "../Data";

const SidebarData = () => {

    return (
        <div className="">
            {datas.map((data) => {
                return (
                    <div
                        className="flex items-center mt-2 p-3 rounded-lg cursor-pointer hover:bg-purple hover:bg-opacity-20 transition-all duration-300 last:absolute last:bottom-4 last:w-72 last:mr-4"
                        key={data.id}>
                            <a href={data.ruta}
                                className="flex justify-center items-center">
                                <div className="mr-8 text-xl text-white">
                                    {data.icon}
                                </div>
                                <div className={`text-base text-white whitespace-pre`}>
                                    {data.text}
                                </div>
                            </a>
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarData