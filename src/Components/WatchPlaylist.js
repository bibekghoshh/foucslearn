import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBarVideoCard from "./VideoCard/SideBarVideoCard";

const WatchPlaylist = () => {
  const [playlistItemDetails, setPlaylistItemDeatils] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const { playlistid } = useParams();

  const playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
  const playlistApiKey = "AIzaSyAe34oWLT1ceMfGZZhV_RD4xH8tA0dCF1M";

  useEffect(() => {
    const fetchdata = async () => {
      try {

        const itemCount= await axios(`https://www.googleapis.com/youtube/v3/playlists?key=${playlistApiKey}&id=${playlistid}&part=contentDetails`);
        const noOfVideos=itemCount.data.items[0].contentDetails.itemCount;
        console.log(itemCount.data.items[0].contentDetails.itemCount)

        const response = await axios(
          `${playlistUrl}?key=${playlistApiKey}&playlistId=${playlistid}&part=snippet,contentDetails&maxResults=${noOfVideos}`
        );
        setPlaylistItemDeatils(response.data.items);

        if (response.data.items.length > 0) {
          setCurrentVideoId(response.data.items[0].contentDetails.videoId);
        }

        console.log(response.data.items);
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
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube-nocookie.com/embed/${currentVideoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="">

        <div className="font-bold text-xl pl-2 py-2 sticky top-0 bg-white">Course Content</div>

        {playlistItemDetails && (
          <div>
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
