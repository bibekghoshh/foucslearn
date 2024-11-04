import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoCardDetails from "./VideoCard/VideoCardDetails";
import axios from "axios";

const Body = () => {
  const [userQuery, setUserQusery] = useState("");
  const [playlistData, setPlaylistData] = useState("");

  const URLtoFetchPlaylist =
    "https://www.googleapis.com/youtube/v3/search?key=";
  const apiKey = "AIzaSyAe34oWLT1ceMfGZZhV_RD4xH8tA0dCF1M";

  const searchYoutubePlaylist = async () => {
    // console.log("clicked search button");
    try {
      const response = await axios.get(
        URLtoFetchPlaylist +
          apiKey +
          "&q=" +
          userQuery +
          "&type=playlist&part=snippet&maxResults=15"
      );
      console.log(response.data.items);
      setPlaylistData(response.data.items);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };
    // console.log(playlistData);

  const handleInputChange = (event) => {
    setUserQusery(event.target.value);
  };
  return (
    <>
      <Header />

      <div className="mt-32">
        {/* <div>{userQuery}</div> */}
        <div className="flex items-center justify-center sticky top-8">
          <div>
            <input
              type="text"
              name="searchInput"
              id="searchBox"
              onChange={handleInputChange}
              className="border-2 px-4 py-2 w-[35vw] outline-none rounded-l-full"
              placeholder="Paste your Link here....."
            />
          </div>
          <div>
            <button
              onClick={searchYoutubePlaylist}
              className="rounded-lg bg-blue-700 px-8 py-[9px] text-white font-medium rounded-r-full"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
        {playlistData && (
          <div className="mt-20 flex justify-center flex-col items-center gap-4">
            {playlistData.map((item, index) => (
              <div key={index}>
                <VideoCardDetails data={item} />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Body;
