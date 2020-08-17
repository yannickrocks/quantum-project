import React from 'react';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { GreyPlanetModel } from 'src/components/grey-planets/planet.model.ts';

const GreyPlanet: React.FC<GreyPlanetModel> = ({src}) => {

    return (
        <Col xs={2}>
            <Figure>
                <Figure.Image className="greyPlanets__img" src={src} />  
            </Figure>
            <input className="greyPlanets__input" />
        </Col>
    )
};

export default GreyPlanet;