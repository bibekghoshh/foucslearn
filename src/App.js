import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import WatchPlaylist from "./Components/VideoCard/WatchPlaylist";
import Login from "./Components/Login/Login";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/watchcourse/:playlistid" element={<WatchPlaylist/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
