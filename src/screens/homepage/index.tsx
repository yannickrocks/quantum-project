import React from 'react';
import OuterWildsLogo from 'src/assets/Outerwilds-Logo_web.png';
import { HomePageText1, HomePageText2, HomePageText3 } from 'src/assets/Texts/Constants';
import Button from 'react-bootstrap/Button';
import "./homepage.css";

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <figure className="figureLogo">
                    <img className="figureLogo__image" src={OuterWildsLogo} alt="logo"/>
            </figure>
            <h2 className="welcomeText">Welcome, Astronaut</h2>
            <div className="description">
                {HomePageText1} 
                <br/>
                <br/>
                {HomePageText2}
                <br/>
                <br/>
                {HomePageText3}            
            </div>
            <br/>
            <div className="launch">
                <Button className="launchButton" variant="success">Launch</Button>{' '}
            </div>
        </div>
    )
};

export default HomePage;