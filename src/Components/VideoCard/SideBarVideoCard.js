import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";

const SideBarVideoCard = ({ items, videolength }) => {

  return (
    <div className="pl-4 border-b-[0px] shadow py-2 px-2">
      <div className="flex w-[400px] cursor-pointer hover:bg-slate-300  ">
        <div>{items.snippet.position}.</div>
        <div className="ml-2">{items.snippet.title}</div>
      </div>
      <div className="flex items-center gap-1 mt-1 text-slate-400">
        <div><MdOutlineOndemandVideo /></div>
        <div className="text-sm">{videolength}</div>
      </div>
    </div>
  );
};

export default SideBarVideoCard;
