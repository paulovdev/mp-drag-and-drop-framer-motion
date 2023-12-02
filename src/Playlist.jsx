import React from "react";
import { Reorder } from "framer-motion";
import { RiDraggable } from "react-icons/ri";

<<<<<<< HEAD

=======
>>>>>>> cb617efe33a58fbcaf985846ec9797957cb6551d
const Playlist = ({ item }) => {
  return (
    <Reorder.Item value={item} id={item.song}>
      <div className="playlist-container">
        <div className="song-wrapper">
          <RiDraggable size={24} />
          <img src={item.image} alt={item.song} />
          <div className="texts">
            <h5>{item.song}</h5>
            <h6>{item.artist}</h6>
          </div>
        </div>
<<<<<<< HEAD
        <span>{item.duration}</span>
=======
        <span>{item.time}</span>
>>>>>>> cb617efe33a58fbcaf985846ec9797957cb6551d
      </div>
    </Reorder.Item>
  );
};

<<<<<<< HEAD
export default Playlist;
=======
export default Playlist;
>>>>>>> cb617efe33a58fbcaf985846ec9797957cb6551d
