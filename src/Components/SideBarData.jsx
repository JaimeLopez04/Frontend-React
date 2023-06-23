import { datas } from "../Data";

const SidebarData = () => {
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            className={`sidebar last:absolute left-4 bottom-4`}
            key={data.id}
          >
            <div className="mr-8 text-[1.7rem] text-white">{data.icon}</div>
            <div
              className={`text-[1rem] text-white whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarData