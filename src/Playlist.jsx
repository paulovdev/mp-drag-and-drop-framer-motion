import React from "react";
import { Reorder } from "framer-motion";
import { RiDraggable } from "react-icons/ri";

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
        <span>{item.duration}</span>
      </div>
    </Reorder.Item>
  );
};

export default Playlist;