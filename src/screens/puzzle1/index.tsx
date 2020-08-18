import React from 'react';
import Background from 'src/assets/Misc/background.png';
// import Minutes22 from 'src/assets/22mins-top_web.png';
import TimberHeath from 'src/assets/Misc/Timber-Hearth_web.png'
// import GBrittleHollow from 'src/assets/Planet Icons/Grey/BH-Grey_web.png';
import GreyPlanet from 'src/components/grey-planets';
import { Minutes22Text1 , Minutes22Text2, Minutes22Text3 } from 'src/assets/Texts/Constants';
import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { GreyPlanetList } from 'src/assets/Planet Icons/greyPlanetsList';
import './puzzle1.css';

const Puzzle1: React.FC = () => {
   return (
        <div>
            <img className="background" src={Background} alt="Background" />
            <Container fluid className="p-22-minutes">
                {/* <figure className="puzzle1">
                    <img className="puzzle1__image" src={Minutes22} alt="22 minutes" />      
                </figure> */}
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className="puzzle1Heading">22 Minutes</h2>
                        <div className="whiteText">
                            {Minutes22Text1}
                            <br/><br/>
                            {Minutes22Text2}
                            <br/><br/>  
                            {Minutes22Text3}
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="timberHearst">
                        <Figure>
                            <Figure.Image 
                                className="puzzle1__planet"
                                src={TimberHeath}
                                alt="Timber Heath"
                            />
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col className="youtubeVideo">
                        <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                            controls={true} width="70%" height="100%" />
                    </Col>
                </Row>
                <Row className="greyPlanets">                        
                    {GreyPlanetList.map(item => (
                        <GreyPlanet src={item} />
                    ))}
                </Row>
                {/* Add buttons */}
            </Container>
        </div>
    )
};

export default Puzzle1;