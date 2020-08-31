import React from "react";
import ReactPlayer from "react-player";
import "./responsivePlayer.css";

type ResponsivePlayerProps = {
  url: string;
};

const ResponsivePlayer: React.FC<ResponsivePlayerProps> = ({ url }) => {
  return (
    <div className="youtubeVideo">
      <ReactPlayer
        className="react-player"
        url={url}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ResponsivePlayer;
