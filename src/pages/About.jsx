import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../About.css';

function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="about-container">
            <h1>Strona boczna</h1>
            <Link to='/'>Przejdź do strony głównej</Link>
            
            <div className="carousel-container">
                <h2>Przewijalny album ze zdjęciami</h2>
                <Slider {...settings}>
                    <div>
                        <img src="" alt="Zdjęcie 1" />
                    </div>
                    <div>
                        <img src="" alt="Zdjęcie 2" />
                    </div>
                    <div>
                        <img src="" alt="Zdjęcie 3" />
                    </div>
                    <div>
                        <img src="" alt="Zdjęcie 4" />
                    </div>
                    <div>
                        <img src="" alt="Zdjęcie 5" />
                    </div>
                    <div>
                        <img src="" alt="Zdjęcie 6" />
                    </div>
                    <div>
                        <img src="" alt="Zdjęcie 7" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default About;
