import React from 'react';
import ReactPlayer from 'react-player';
import { ResponsivePlayerProps } from 'src/components/ResponsivePlayer/responsivePlayer.model';
import './responsivePlayer.css';

const ResponsivePlayer: React.FC<ResponsivePlayerProps> = ({ url }) => {
    return (
        <div className="youtubeVideo">
            <ReactPlayer className="react-player" 
                        url={url} 
                        controls={true} 
                        width="100%" 
                        height="100%" />
        </div>
    )
};

export default ResponsivePlayer;