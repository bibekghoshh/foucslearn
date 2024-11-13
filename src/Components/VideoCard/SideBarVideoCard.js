import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdOutlineOndemandVideo } from "react-icons/md";

const SideBarVideoCard = ({ items, videolength,currentVideoId,isSelected,handleSelectToggle }) => {
  return (
    <div className={`pl-4 w-[400px] border-b-[0.1px] shadow-sm py-2 px-2 cursor-pointer hover:bg-slate-300  ${currentVideoId===items.contentDetails.videoId?"bg-slate-300":"bg-white"}`}>
      <div className="flex gap-3">
        <div className="mt-[2px] text-[20px]" onClick={()=>handleSelectToggle(items.contentDetails.videoId)}>
        {isSelected?<MdCheckBox />:<MdCheckBoxOutlineBlank />}
        </div>
        <div>
          <div className="flex  text-sm">
            <div>{items.snippet.position}.</div>
            <div className="ml-1">{items.snippet.title}</div>
          </div>
          <div className="flex items-center gap-1 mt-[6px] text-slate-500 ">
            <div className="text-[16px]">
              <MdOutlineOndemandVideo />
            </div>
            <div className="text-xs">{videolength}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarVideoCard;
