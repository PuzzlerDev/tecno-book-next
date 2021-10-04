import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import StyledImage from "./styled-image";

const Carrusel = ({ contens }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return contens.id ? (
    <Slider {...settings}>
      {contens.carruselPicture.map((picture) => (
        <StyledImage
          src={picture.url}
          alt={picture.alternativeText}
          key={picture.id}
          width={720}
          height={400}
        />
      ))}
    </Slider>
  ) : null;
};

export default Carrusel;
