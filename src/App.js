import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import WatchPlaylist from "./Components/VideoCard/WatchPlaylist";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/watchcourse/:playlistid" element={<WatchPlaylist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
