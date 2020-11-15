import React from "react";
import { motion } from "framer-motion";
import "./quantumPlanets.css";

type QuantumPlanetProps = {
  src: string;
  answerSrc?: string;
  correctCode?: string;
  planetId: string;
  hasBeenClickedOn: boolean;
  greyQuantumMoon?: string;
  purpleQuantumMoon?: string;
  pageAorB: string;
  onPlanetCodeChange(index: string): void;
};

const Planet: React.FC<QuantumPlanetProps> = ({
  src,
  answerSrc,
  planetId,
  hasBeenClickedOn,
  greyQuantumMoon,
  purpleQuantumMoon,
  pageAorB,
  onPlanetCodeChange,
}) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    onPlanetCodeChange((event.currentTarget as any).index);
  };

  const isPageA = pageAorB === "pageA";

  return (
    <motion.li
      key={planetId}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPageA ? (
        <figure className="puzzle2__planets__figure" onClick={handleChange}>
          <img className="puzzle2__planets__img" src={src} alt={planetId} />
          {hasBeenClickedOn ? (
            <img
              className="puzzle2__planets__moon"
              src={greyQuantumMoon}
              alt="QuantumMoom"
            />
          ) : (
            ""
          )}
        </figure>
      ) : (
        <figure className="puzzle2__planets__figure" onClick={handleChange}>
          <img
            className="puzzle2__planets__img"
            src={hasBeenClickedOn ? answerSrc : src}
            alt={planetId}
          />
          {hasBeenClickedOn ? (
            <img
              className="puzzle2__planets__moon"
              src={purpleQuantumMoon}
              alt={"QuantumMoom"}
            />
          ) : (
            ""
          )}
        </figure>
      )}
    </motion.li>
  );
};

export default Planet;
