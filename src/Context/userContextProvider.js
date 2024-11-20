import { useEffect, useState } from "react";
import { myContext } from "./userContext";
import { VideoApi} from "../data/data";
import axios from "axios";

const UserContextProvider = ({ children }) => {
  const [userSelectedPlaylistItems, setUserSelectedPlaylistItems] = useState(
    []
  );
  const [totalPlaylistDuration,setTotalPlaylistDuration]=useState(0);
  const [eachVideoLength,setEachvideoLength]=useState([]);

  const apikey=process.env.REACT_APP_APIKEY;

  let totalDuration = 0;
  let videoLengthInSecond=[];
  //fetch any data or calculation
  //Extract all video Id

  useEffect(()=>{
    if(userSelectedPlaylistItems.length>0){
        calculateVideoLength();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userSelectedPlaylistItems]);

  const calculateVideoLength = async () => {
    const videoIds = userSelectedPlaylistItems
      .map((item) => item.contentDetails.videoId)
      .join(",");
    // console.log(videoIds);

    const VideoDuration = await axios(
      `${VideoApi}?key=${apikey}&id=${videoIds}&part=contentDetails`
    );
    // console.log(VideoDuration.data.items);

    VideoDuration.data.items.forEach((video) => {
      const d = video.contentDetails.duration;
      totalDuration += convertDurationToSeconds(d); 
    });
    // console.log(videoLengthInSecond)

    if(videoLengthInSecond.length>0){
        const duration = videoLengthInSecond.map((length)=>{
        const hours = Math.floor(length / 3600);
        const minutes = Math.floor((length % 3600) / 60);
        const h=hours>0?hours+"hour ":"";
        const m=minutes +"min ";
        return h+m;
    })
    setEachvideoLength(duration);
    // console.log(duration)
}

    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    // const seconds = totalDuration % 60;
    
    // console.log(
    //   `Total Playlist Duration: ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    // );

    setTotalPlaylistDuration(`Duration: ${hours} hours, ${minutes} minutes`)

  };
//   calculateVideoLength();
  

  const convertDurationToSeconds = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    const lengthInSeconds=(hours * 3600) + (minutes * 60) + seconds;
    videoLengthInSecond.push(lengthInSeconds);
    return lengthInSeconds;
  };

  return (
    <myContext.Provider
      value={{
        userSelectedPlaylistItems,
        setUserSelectedPlaylistItems,
        totalPlaylistDuration,
        eachVideoLength,
        calculateVideoLength,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default UserContextProvider;
