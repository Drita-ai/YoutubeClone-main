import React from "react";

const VideoCard = () => {
  return (
    <div className="card">
      {/* Thumbnail Image */}
      <img
        src="../src/assets/hq720.webp"
        alt="Loading..."
        className="thumbnail"
      ></img>

      <div className="card-body">
        {/* Channel Image */}
        <img
          src="https://robohash.org/69"
          alt="Loading"
          className="channelImage"
        ></img>

        <div className="card-text">
          {/* Thumbnail Data */}
          <p>Title</p>
          <p>Channel Name</p>
          <p>200k 2 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
