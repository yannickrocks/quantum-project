import React from 'react';
import Background from 'src/assets/background.png';
import Minutes22 from 'src/assets/22mins-top_web.png';
import './puzzle1.css';

const Puzzle1: React.FC = () => {
    return (
        <div className="22Minutes">
            <img className="background" src={Background} alt="Background" />
            <figure className="puzzle1">
                <img className="puzzle1__text" src={Minutes22} alt="22 minutes" />      
            </figure>
            {/* Make Video Emded */}
            {/*Add Planets and input boxes  */}
            {/* Add buttons */}
        </div>
    )
};

export default Puzzle1;