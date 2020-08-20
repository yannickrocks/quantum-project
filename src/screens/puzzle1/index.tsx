import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Background from 'src/assets/Misc/background.png';
import TimberHeath from 'src/assets/Misc/Timber-Hearth_web.png';
import GreyPlanet from 'src/components/grey-planets';
import { GreyPlanetList } from 'src/assets/Planet Icons/greyPlanetsList';
import { Minutes22Text1 , Minutes22Text2, Minutes22Text3 } from 'src/assets/Texts/Constants';
import ResponsivePlayer from 'src/components/ResponsivePlayer';
import './puzzle1.css';

const Puzzle1: React.FC = () => {
   return (
        <div>
            <img className="background" src={Background} alt="Background" />
            <Container fluid className="p-22-minutes">
                <Row>
                    <Col xs={12} md={8} className="puzzleMessage">
                        <h2 className="puzzle1Heading">22 Minutes</h2>
                        <div className="puzzle1WhiteText">
                            {Minutes22Text1}
                            <br/><br/>  
                            {Minutes22Text2}
                            <br/><br/>  
                            {Minutes22Text3}
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Figure className="puzzle1__figure">
                            <Figure.Image 
                                className="puzzle1__planet"
                                src={TimberHeath}
                                alt="Timber Heath"
                            />
                        </Figure>
                    </Col>
                </Row>
                <Row className="puzzle1__rowPlayer">
                    <Col></Col>
                    <Col xs={6}>
                        <ResponsivePlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="greyPlanets">
                    {GreyPlanetList.map(item => (
                        <GreyPlanet src={item} />
                    ))}
                </Row>
                <Row>
                    <Col>
                        <Button>Reset</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Puzzle1;