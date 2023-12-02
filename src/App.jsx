import React, { useState } from "react";
import { Reorder } from "framer-motion";
import Playlist from "./Playlist";
import { songs } from "./songs";

const App = () => {
  const [items, setItems] = useState(songs);

  return (
    <section id="container">
      <header className="background">
        <h1>Playlist - Pop Hits</h1>
      </header>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Playlist key={item.id} item={item} />
        ))}
      </Reorder.Group>
    </section>
  );
};

export default App;
