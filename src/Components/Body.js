import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoCardDetails from "./VideoCard/VideoCardDetails";
import axios from "axios";
import { searchAPI} from "../data/data";
import { IoSearchOutline } from "react-icons/io5";


const Body = () => {
  const [userQuery, setUserQuery] = useState("");
  const [playlistData, setPlaylistData] = useState(null);

  const apikey=process.env.REACT_APP_APIKEY;
  
  
  const featuresCardCss =
    "bg-green-400 text-white px-4 py-4 rounded font-medium shadow-md font-mono  bg-gradient-to-r from-blue-400 to-purple-500";

  const searchYoutubePlaylist = async () => {
    try {
      const response = await axios.get(
        `${searchAPI}?key=${apikey}&q=${userQuery}&type=playlist&part=snippet&maxResults=15`
      );
      setPlaylistData(response.data.items);
      // console.log(response.data.items);
      //   console.log(response);

      window.scrollTo({
        top: 230, // Change this value to set a different position
        behavior: "smooth", // Adds smooth scrolling animation
      });
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };
  // console.log(playlistData);

  const handleInputChange = (event) => {
    setUserQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (userQuery.trim()) {
      searchYoutubePlaylist();
    }
  };


  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center mt-10 ">
        <div className="mb-12 text-center ">
          <h1 className="font-mono text-4xl font-semibold text-transparent text-blue-400 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text">
            FocusLearn – Your Ultimate Distraction-Free Learning Hub
          </h1>
          <h3 className="mt-5 font-mono text-lg text-slate-500 ">
            Empowering seamless learning experiences
          </h3>
        </div>
        <div className="sticky top-5">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              name="searchInput"
              id="searchBox"
              onChange={handleInputChange}
              className="border-2 px-4 py-2 w-[35vw] outline-none rounded-l-full font-mono focus:border-blue-400 transition duration-300"
              placeholder="Search Your playlist here"
            />
            <button
              className="rounded-lg bg-blue-500 px-6 py-[9px] ml-[-2px] text-white font-medium rounded-r-full hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              <IoSearchOutline className="text-2xl" />
            </button>
          </form>
        </div>
        {playlistData && (
          <div className="flex flex-col items-center justify-center gap-4 mt-20">
            {playlistData.map((item, index) => (
              <div key={index}>
                <VideoCardDetails data={item} />
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center mt-20 text-center">
          
        </div>

        <div className="flex justify-center pb-16 mt-32 text-center">
          <div className="grid grid-flow-row grid-cols-2 gap-6">
            <div className={featuresCardCss}>
              Distraction-free <br />
              video playback.
            </div>
            <div className={featuresCardCss}>
              Progress tracking with <br />a video selection system
            </div>
            <div className={featuresCardCss}>
              User-friendly sidebar <br /> for easy navigation
            </div>
            <div className={featuresCardCss}>
              Motivational quotes <br />
              to inspire learning
            </div>
            <div className={featuresCardCss}>
              Playlists search <br />
              funcationlity
            </div>
            <div className={featuresCardCss}>
              Dark mode comfort <br />
              during late-night study{" "}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Body;
