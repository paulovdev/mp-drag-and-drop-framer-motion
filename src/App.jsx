import React, { useState } from "react";
import { Reorder } from "framer-motion";
import Playlist from "./Playlist";
import { songs } from "./songs";

const App = () => {
  const [items, setItems] = useState(songs);

  return (
    <div id="container">
      <div className="background">
        <h1>Playlist - Pop Hits</h1>
      </div>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Playlist key={item.id} item={item} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default App;
