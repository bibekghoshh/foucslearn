import React from "react";

const SideBarVideoCard = ({ items }) => {
  return (
    <div>
      <div className="flex w-[400px] cursor-pointer hover:bg-slate-300 px-2 py-2 pl-4 border-b-[0px] shadow">
        <div>{items.snippet.position}.</div>
        <div className="ml-2">{items.snippet.title}</div>
      </div>
    </div>
  );
};

export default SideBarVideoCard;
