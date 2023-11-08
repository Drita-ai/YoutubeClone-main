import React from "react";
import VideoCard from "./VideoCard";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div className="main-flex-container">
      <div className="page">
        <Sidebar />
        <div className="main">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
