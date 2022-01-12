import React, { useState, useEffect } from "react";
import axios from "axios";
import SongList from "./components/SongList";
import Header from "./components/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081").then((res) => {
      // filter out the tracks
      const tracks = res.data.collection.filter(
        (item) => item.type === "track" || item.type === "track-repost"
      );
      // console.log(tracks);
      setData(tracks);
    });
  }, []);

  return (
    <div>
      <SongList tracks={data} />
    </div>
  );
}

export default App;
