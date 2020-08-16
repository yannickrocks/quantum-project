import React from 'react';
import Background from 'src/assets/background.png';
// import Minutes22 from 'src/assets/22mins-top_web.png';
import TimberHeath from 'src/assets/Timber-Hearth_web.png'
import GBrittleHollow from 'src/assets/Planet Icons/Grey/BH-Grey_web.png';
import { Minutes22Text1 , Minutes22Text2, Minutes22Text3 } from 'src/assets/Texts/Constants';
import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import './puzzle1.css';

const Puzzle1: React.FC = () => {
    return (
        <div className="p-22-minutes"> 
            <img className="background" src={Background} alt="Background" />
            <Container fluid>
                {/* <figure className="puzzle1">
                    <img className="puzzle1__image" src={Minutes22} alt="22 minutes" />      
                </figure> */}
                <Row>
                    <Col md={6}>
                        <h2 className="puzzle1Heading">22 Minutes</h2>
                        <div className="whiteText">
                            {Minutes22Text1}
                            <br/><br/>
                            {Minutes22Text2}
                            <br/><br/>  
                            {Minutes22Text3}
                        </div>
                    </Col>
                    <Col sm={3}>
                        <Figure>
                            <Figure.Image 
                                className="puzzle1__planet"
                                src={TimberHeath}
                                alt="Timber Heath"
                                width="100%"
                            />
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ span: 6, offset: 3 }}>
                        <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                            controls={true} width="500px" height="280px" />
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <Figure>
                            <Figure.Image className="greyPlanets" src={GBrittleHollow} />
                        </Figure>
                    </Col>
                </Row>
                {/*Add Planets and input boxes  */}
                {/* Add buttons */}
            </Container>
        </div>
    )
};

export default Puzzle1;