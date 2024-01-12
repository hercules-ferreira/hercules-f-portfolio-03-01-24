import React, { useEffect, useState } from "react";
import {
  BannerContainer,
  Image,
  IndicatorContainer,
  Indicator,
} from "./BannerStyles";

import container1 from "../img/projects/concluded/somosSuecos/somosSuecos1.png";
import container2 from "../img/projects/concluded/somosSuecos/somosSuecos2.png";
import container3 from "../img/projects/concluded/sanconcierge.logistica/sanconcierge.logistica.png";
import container4 from "../img/projects/concluded/vemdebaruel/vemdebaruel.png";
import container5 from "../img/projects/concluded/conectando-com-o-impacto/conectando-com-o-impacto1.png";
import container6 from "../img/projects/concluded/conectando-com-o-impacto/conectando-com-o-impacto2.png";

import container7 from "../img/projects/concluded/laboratory/register.png";
import container8 from "../img/projects/concluded/laboratory/login.png";
import container9 from "../img/projects/concluded/laboratory/register-category.png";

import container10 from "../img/projects/concluded/ASCII/gameColor.png";
import container11 from "../img/projects/concluded/ASCII/gameColorResult.png";

const images = [
  container1,
  container2,
  container3,
  container4,
  container5,
  container6,
  container7,
  container8,
  container9,
  container10,
  container11,
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <BannerContainer>
        <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </BannerContainer>
      <IndicatorContainer>
        {images.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex ? true.toString() : false.toString()}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </IndicatorContainer>
    </div>
  );
};
