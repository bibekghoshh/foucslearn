import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBarVideoCard from "./SideBarVideoCard";
import { playlistItemsAPI, apiKey, playlistsAPI} from "../../data/data";

const WatchPlaylist = () => {
  const [playlistItemDetails, setPlaylistItemDeatils] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [contentLength, setContentLength]=useState(0);

  const { playlistid } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const itemCount = await axios(
          `${playlistsAPI}?key=${apiKey}&id=${playlistid}&part=contentDetails`
        );
        const noOfVideos = itemCount.data.items[0].contentDetails.itemCount;
        console.log(noOfVideos);

        // const contentLength=itemCount.headers['content-length'];


        setContentLength(itemCount.headers['content-length']);
        console.log(contentLength);

        const response = await axios(
          `${playlistItemsAPI}?key=${apiKey}&playlistId=${playlistid}&part=snippet,contentDetails&maxResults=${noOfVideos}`
        );
        setPlaylistItemDeatils(response.data.items);

        // console.log(response);
        if(response.data.items.length>0){
          setCurrentVideoId(response.data.items[0].contentDetails.videoId);
        }
        
        // console.log(response.data.items);
      } catch (error) {
        console.error("Error while fetching playlistDetails", error);
      }
    };

    fetchdata();
  }, [playlistid]);


  const handleVideoSelect = (videoId) => {
    setCurrentVideoId(videoId);
  };
  

  return (
    <div className="flex">
      <div className="w-full">
        <div>
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
          {contentLength}
        </div>
        
      </div>
      <div className="">
        <div className="font-bold text-xl pl-2 py-2 sticky top-0 bg-white border-b-2">
          Course Content
        </div>

        {playlistItemDetails && (
          <div className="overflow-y-scroll h-screen border-l-2">
            {playlistItemDetails.map((items, index) => (
              <div
                key={index}
                onClick={() => handleVideoSelect(items.contentDetails.videoId)}
              >
                <SideBarVideoCard items={items} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPlaylist;
