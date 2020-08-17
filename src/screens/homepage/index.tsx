import React from 'react';
import OuterWildsLogo from 'src/assets/Misc/Outerwilds-Logo_web.png';
// import HomePageText from 'src/assets/Homepage-text_web.png';
import { HomePageText1, HomePageText2, HomePageText3, HomePageText4 } from 'src/assets/Texts/Constants';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./homepage.css";

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <figure className="figureLogo">
                    <img className="figureLogo__logo" src={OuterWildsLogo} alt="logo"/>
            </figure>
            {/* <figure className="figureMessage">
                <img className="figureMessage__message" src={HomePageText} />
            </figure> */}
            <h2 className="welcomeText">Welcome, Astronaut</h2>
            <div className="description">
                <br/>
                {HomePageText1} 
                <br/>
                <br/>
                {HomePageText2}
                <br/>
                <br/>
                {HomePageText3}            
                <br/>
                <br/>
                {HomePageText4}  
                <br/>
                <br/>
                <div className="launch">
                    <Link className="launch__link" to={`/22minutes`}>
                        <Button className="launchButton" variant="success">Launch</Button>{' '}
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default HomePage;