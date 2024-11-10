import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBarVideoCard from "./SideBarVideoCard";
import {
  playlistItemsAPI,
  apiKey,
  playlistsAPI,
} from "../../data/data";
import { myContext } from "../../Context/userContext";
import { studyMotivationQuotes } from "../../data/studyMotivationQuotes";


const WatchPlaylist = () => {
  const [currentVideoId, setCurrentVideoId] = useState(undefined);
  const [motivationQuotes,setMotivationQuotes]=useState("Small steps every day.");
  
 
  const { playlistid } = useParams();

  const {userSelectedPlaylistItems, setUserSelectedPlaylistItems,totalPlaylistDuration,eachVideoLength } = useContext(myContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const itemCount = await axios(
          `${playlistsAPI}?key=${apiKey}&id=${playlistid}&part=contentDetails`
        );
        const noOfVideos = itemCount.data.items[0].contentDetails.itemCount;
        // console.log(noOfVideos);

        const response = await axios(
          `${playlistItemsAPI}?key=${apiKey}&playlistId=${playlistid}&part=snippet,contentDetails&maxResults=${noOfVideos}`
        );

        setUserSelectedPlaylistItems(response.data.items);
        // console.log(response);

        // //By Default setting the video
        if (response.data.items.length > 0) {
          setCurrentVideoId(response.data.items[0].contentDetails.videoId);
        }

        // console.log(response.data.items);
      } catch (error) {
        console.error("Error while fetching playlistDetails", error);
      }
    };

    fetchdata();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistid]);


  const handleVideoSelect = (videoId) => {
    setCurrentVideoId(videoId);
    const randomNumber = Math.floor(Math.random() * 100);
    setMotivationQuotes(studyMotivationQuotes[randomNumber]);
  };

  return (
    <div className="flex">
      <div className="w-full">
        <div className="shadow-md">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
        <div className="mt-6 ml-2 font-medium shadow-lg inline-block px-2 py-2">{totalPlaylistDuration}</div>
        <div className="justify-center flex py-4 border-2 font-mono">{motivationQuotes}</div>
        </div>

      </div>
      <div className="">
        <div className="font-bold text-base pl-2 py-2 sticky top-0 bg-white border-b-2">
          <div>
          Course Content
          </div>
          <div>
      {totalPlaylistDuration}
          </div>
          
        </div>

        {userSelectedPlaylistItems && (
          <div className="overflow-y-scroll h-screen border-l-2">
            {userSelectedPlaylistItems.map((items, index) => (
              <div
                key={index}
                onClick={() => handleVideoSelect(items.contentDetails.videoId)}
              >
                <SideBarVideoCard items={items} videolength={eachVideoLength[index]}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPlaylist;
