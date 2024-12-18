import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBarVideoCard from "./SideBarVideoCard";
import { playlistItemsAPI, playlistsAPI } from "../../data/data";
import { myContext } from "../../Context/userContext";
import { studyMotivationQuotes } from "../../data/studyMotivationQuotes";

const WatchPlaylist = () => {
  const [currentVideoId, setCurrentVideoId] = useState(undefined);
  const [motivationQuotes, setMotivationQuotes] = useState(
    "Small steps every day."
  );
  const [selectedVideos, setSelectedVideos] = useState([]);

  const apikey=process.env.REACT_APP_APIKEY;

  const { playlistid } = useParams();

  const {
    userSelectedPlaylistItems,
    setUserSelectedPlaylistItems,
    totalPlaylistDuration,
    eachVideoLength,
  } = useContext(myContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const itemCount = await axios(
          `${playlistsAPI}?key=${apikey}&id=${playlistid}&part=contentDetails`
        );
        const noOfVideos = itemCount.data.items[0].contentDetails.itemCount;
        // console.log(noOfVideos);

        const response = await axios(
          `${playlistItemsAPI}?key=${apikey}&playlistId=${playlistid}&part=snippet,contentDetails&maxResults=${noOfVideos}`
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
    if (currentVideoId !== videoId) {
      setCurrentVideoId(videoId);

      const randomNumber = Math.floor(Math.random() * 100);
      setMotivationQuotes(studyMotivationQuotes[randomNumber]);
    }
  };

  const handleSelectToggle = (videoId) => {
    setSelectedVideos((prevSelected) => {
      if (prevSelected.includes(videoId)) {
        // If the video is already selected, remove it from the list
        return prevSelected.filter((id) => id !== videoId);
      } else {
        // If the video is not selected, add it to the list
        return [...prevSelected, videoId];
      }
    });
  };

  const progressPercentage =
    userSelectedPlaylistItems.length > 0
      ? (selectedVideos.length / userSelectedPlaylistItems.length) * 100
      : 0;

  return (
    <div className="flex h-full">
      <div className="w-full h-full">
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
        <div className="flex flex-col items-center justify-center">
          <div className="inline-block py-4 mx-10 mt-4 font-mono text-center bg-slate-50">{`‘ ${motivationQuotes} ’`}</div>
        </div>
      </div>


      <div className="">
        <div className="sticky top-0 py-2 pl-2 text-base bg-white border-b-2 ">
          <div className="font-bold">Course Content</div>
          <div className="text-xs">{totalPlaylistDuration} <p className="inline-block px-1 rounded text-slate-400 bg-slate-100">({userSelectedPlaylistItems.length} Videos)</p></div>

          <div className="flex items-center w-full gap-1">
            {/* Progress bar */}
            <div className="w-[90%] bg-gray-200 rounded-lg h-2 overflow-hidden">
              <div
                className="h-full transition-all duration-300 bg-blue-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex mr-1 text-xs">{`${selectedVideos.length} / ${userSelectedPlaylistItems.length}`}</div>
          </div>
        </div>

        {userSelectedPlaylistItems && (
          <div className="overflow-y-scroll h-[90vh] border-l-2">
            {userSelectedPlaylistItems.map((items, index) => (
              <div
                key={index}
                onClick={() => handleVideoSelect(items.contentDetails.videoId)}
              >
                <SideBarVideoCard
                  items={items}
                  videolength={eachVideoLength[index]}
                  currentVideoId={currentVideoId}
                  isSelected={selectedVideos.includes(
                    items.contentDetails.videoId
                  )}
                  handleSelectToggle={handleSelectToggle}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPlaylist;
