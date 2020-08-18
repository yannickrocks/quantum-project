import React from 'react';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { GreyPlanetModel } from 'src/components/grey-planets/planet.model.ts';

const GreyPlanet: React.FC<GreyPlanetModel> = ({src}) => {

    return (
        <Col className="greyPlanets__planet" xs={2}>
                <Figure className="greyPlanets__figure">
                    <Figure.Image className="greyPlanets__img" src={src} />  
                </Figure>
            <div className="greyPlanets__div">
                <input className="greyPlanets__input" />
            </div>
        </Col>
    )
};

export default GreyPlanet;