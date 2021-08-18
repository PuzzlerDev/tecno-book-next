import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "./styled-image";

function Carrusel({contens}){

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

    return contens.id ?(
    <Slider {...settings}>
        {contens.carruselPicture.map(picture => (
            <Image 
                src={picture.url} 
                alt={picture.alternativeText} 
                key={picture.id}
            />
        ))}
    </Slider>
    ):null;
};

export default Carrusel;