import React, { useState } from "react";
import { Reorder } from "framer-motion";
import Playlist from "./Playlist";

const App = () => {
  const [items, setItems] = useState(musics);

  return (
    <div id="container">
      <div className="text-container">
        <h1>Playlist - PXULIN musics</h1>
      </div>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Playlist key={item.song} item={item} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default App;

const musics = [
  { image: "/img-1.jpg", song: "THE END", artist: "pxulin", time: "2:47" },
  {
    image: "/img-2.jpg",
    song: "CALAMITY",
    artist: "pxulin w/nikick & grvnnek",
    time: "2:37",
  },
  {
    image: "/img-3.jpg",
    song: "CURSED",
    artist: "pxulin w/ marty menning",
    time: "2:32",
  },
  {
    image: "/img-4.jpg",
    song: "WALK NIGHT",
    artist: "pxulin",
    time: "1:36",
  },
  {
    image: "/img-5.jpg",
    song: "PSYCHO",
    artist: "pxulin w/lvcifer",
    time: "1:36",
  },
];
