import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoCardDetails from "./VideoCard/VideoCardDetails";
import axios from "axios";
import { searchAPI, apiKey } from "../data/data";
import { IoSearchOutline } from "react-icons/io5";
// import { studyMotivationQuotes } from "../data/studyMotivationQuotes";

const Body = () => {
  const [userQuery, setUserQuery] = useState("");
  const [playlistData, setPlaylistData] = useState(null);
  //   const [motivationQuotes, setMotivationQuotes] = useState("Education is the most powerful weapon which you can use to change the world");

  const featuresCardCss =
    "bg-green-400 text-white px-4 py-4 rounded font-medium shadow-md font-mono  bg-gradient-to-r from-blue-400 to-purple-500";

  const searchYoutubePlaylist = async () => {
    try {
      const response = await axios.get(
        `${searchAPI}?key=${apiKey}&q=${userQuery}&type=playlist&part=snippet&maxResults=15`
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

      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-mono font-semibold text-blue-400 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            FocusLearn – Your Ultimate Distraction-Free Learning Hub
          </h1>
          <h3 className="font-mono text-slate-500 mt-2 text-lg ">
            Empowering seamless learning experiences
          </h3>
        </div>
        <div className=" sticky top-5">
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
              className="rounded-lg bg-blue-500 px-6 py-[9.5px] ml-[-2px] text-white font-medium rounded-r-full hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              <IoSearchOutline className="text-2xl" />
            </button>
          </form>
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

        <div className="mt-20 text-center flex items-center justify-center">
          {/* <div className="font-mono ">{`‘ ${motivationQuotes} ’`}</div> */}
          {/* <p className="text-2xl font-sans">"Focus on what matters, learn with clarity."</p> */}
          {/* <h3 className="w-[60%]">WatchPlaylist is an innovative platform designed to provide users with a focused, distraction-free way to watch YouTube courses and track their learning progress. It includes features like customizable video playlists, the ability to mark videos as watched, and a sleek, user-friendly interface tailored for continuous learning."</h3> */}
        </div>

        <div className="mt-32 pb-16 flex justify-center text-center">
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
