import React from "react";
import SuggestionCard from "./SuggestionCard";

const VideoPage = () => {
  return (
    <div className="videoPage">
      <div className="videoItem">
        <iframe
          className="iframe-video"
          src="https://www.youtube.com/embed/ReXw6TOnUOc?si=mqwgu-I4mUtBQ896"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className="description">
          {/* Channel Image */}
          <img
            src="https://robohash.org/69"
            alt="Loading"
            className="channelImage"
          ></img>
          <div className="channelText">
            <p>Channel Name</p>
            <p>293K</p>
          </div>

          <button className="subscribe-button">Subscribe</button>
        </div>
        <br />

        <div className="description-text">
          <p>
            <b>92K views 5 months ago</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            doloribus officiis, delectus cupiditate incidunt impedit corrupti
            aut! Numquam, dolorum odio ratione asperiores consequuntur in
            voluptatem enim veniam quos? Totam, ratione.
          </p>
        </div>
      </div>
      <div className="suggestionBar">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  );
};

export default VideoPage;
