import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { PlanetProps } from 'src/components/planets/planet.model';
import { PlanetList } from 'src/assets/Planet Icons/PlanetsList';

const Planet: React.FC<PlanetProps> = ({src, answerSrc, planetId }) => {  
        const [showPurplePlanet, setPlanetFlag] = useState(false);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const planetId = event.currentTarget.id;
            const inputValue = Number(event.currentTarget.value);
            const specificPlanet = PlanetList.find(p => {
                return p.planet === planetId;
            });

            if(inputValue === specificPlanet?.code && planetId === specificPlanet?.planet ) {
                setPlanetFlag(true);
            }
            else {
                setPlanetFlag(false);
            }
        };

    return (
        <Col className="planets__planet" xs={2} key={planetId}>
            <Figure className="planets__figure">
                <Figure.Image className="planets__img" src={showPurplePlanet ? answerSrc : src } />  
            </Figure>
            <div className="planets__div">
                <input id={planetId}
                       className="planets__input" 
                       maxLength={4}
                       pattern="[0-9]*"
                       placeholder="0000"
                       onChange={handleChange} />
            </div>
        </Col>
    )
};

export default Planet;