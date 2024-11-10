import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";

const SideBarVideoCard = ({ items, videolength }) => {

  return (
    <div className="pl-4 border-b-[0.5px] shadow-sm py-2 px-2 cursor-pointer hover:bg-slate-300">
      <div className="flex w-[400px] cursor-pointer hover:bg-slate-300  text-sm">
        <div>{items.snippet.position}.</div>
        <div className="ml-2">{items.snippet.title}</div>
      </div>
      <div className="flex items-center gap-1 mt-[6px] text-slate-500 text-sm">
        <div><MdOutlineOndemandVideo /></div>
        <div className="text-sm">{videolength}</div>
      </div>
    </div>
  );
};

export default SideBarVideoCard;
