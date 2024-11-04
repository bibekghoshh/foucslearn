import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const VideoCardDetails = ({ data }) => {
  const playlistid = data.id.playlistId;
  return (
    <div className="flex gap-4  w-[800px] shadow-sm ">
      <div className="w-[320px]  h-[180px]  flex-none">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={data.snippet.thumbnails.medium.url}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <h2 className="font-medium text-lg">{data.snippet.title}</h2>
        <h3 className="text-slate-400 text-xs flex gap-2 items-center">
          {data.snippet.channelTitle}
          <MdVerified />
        </h3>
        <h3 className="text-xs">{data.snippet.description}</h3>
        <Link to={`/watchcourse/${playlistid}`}>
          <div className="font-medium text-slate-600 text-xs cursor-pointer">
            VIEW FULL PLAYLIST
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCardDetails;
