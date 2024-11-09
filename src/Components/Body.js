import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoCardDetails from "./VideoCard/VideoCardDetails";
import axios from "axios";
import { searchAPI, apiKey } from "../data/data";
import { myContext } from "../Context/userContext";

const Body = () => {
  const [userQuery, setUserQusery] = useState("");
  const [playlistData, setPlaylistData] = useState("");

  const searchYoutubePlaylist = async () => {
    try {
      const response = await axios.get(
        `${searchAPI}?key=${apiKey}&q=${userQuery}&type=playlist&part=snippet&maxResults=15`
      );
      setPlaylistData(response.data.items);
        // console.log(response.data.items);
      //   console.log(response);

    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };
  // console.log(playlistData);

  const handleInputChange = (event) => {
    setUserQusery(event.target.value);
  };
  return (
    <myContext.Provider value={{}}>
      <Header />

      <div className="mt-32">
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
    </myContext.Provider>
  );
};

export default Body;