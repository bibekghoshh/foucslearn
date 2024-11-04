import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import WatchPlaylist from "./Components/WatchPlaylist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/watchcourse/:playlistid" element={<WatchPlaylist/>}/>
      </Routes>
      {/* <Body/> */}
    </Router>
  );
}

export default App;
