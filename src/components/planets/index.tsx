import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { PlanetProps } from 'src/components/planets/planet.model';

const Planet: React.FC<PlanetProps> = ({src, answerSrc, planetId }) => {  
        const [planet, setPlanet] = useState({
            src: "",
            answerSrc: "",
            planetId: "",
            showPurplePlanet: false
        });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const planetId = event.currentTarget.id;
            const inputValue = event.currentTarget.value;
            console.log(planetId + " = " + inputValue);                
            if(inputValue === "1128" && planetId==="TimberHearth") {
                const newPlanet = {...planet};
                newPlanet.showPurplePlanet = !newPlanet.showPurplePlanet;
                setPlanet(newPlanet);
            }
        };

    return (
        <Col className="planets__planet" xs={2}>
            <Figure className="planets__figure">
                <Figure.Image className="planets__img" src={planet.showPurplePlanet ? answerSrc : src } />  
            </Figure>
            <div className="planets__div">
                <input className="planets__input" id={planetId} onChange={handleChange} />
            </div>
        </Col>
    )
};

export default Planet;