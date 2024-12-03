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
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/382770246_3572664512974540_1025192420457996117_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=Cpp4A8xjbZIQ7kNvgGiKTNk&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=AcL74l1CQuca1w4zvehXH4_&oh=00_AYC-rB6K-PTz7h-CpGv3D59qSIXawYQjOYC8s-mRybGAYA&oe=67548CCD" alt="Zdjęcie 1" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/382753817_3572664426307882_7881971983326047916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=40qg6jpp8BoQ7kNvgHYREVp&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A-pWGiS9_1zFdT4dmWRjm9o&oh=00_AYAM1fBQEd5bUsb6mekFwE35rbgOISoTKQsOaq2i9WAJCw&oe=67547D38" alt="Zdjęcie 2" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/382772596_3572664559641202_6775517790433709801_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=oqtwdzscV-0Q7kNvgGzxbo2&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A62NLZZ2iefZuIdQ23DRBil&oh=00_AYCp5ZKWsX1fKDYVc5rEv5gwlF4yg3rcLBQrL5lHUJ0beA&oe=67548EBA" alt="Zdjęcie 3" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/382716260_3572664599641198_157345763691682344_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=x2JKfx-P6MUQ7kNvgHo3IXe&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A32CzceFVZ9ibpgNx17ibbK&oh=00_AYAgFhbNcGQf8I3sGfAPVu2CK4CnnsGfe0Fk6jdBmzF5kQ&oe=67549B99" alt="Zdjęcie 4" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/383342859_3432292853751924_1856036009606353871_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=6QaG4KD03zMQ7kNvgHBIVDQ&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=AFhu1ekrKmH8QNyP7az647H&oh=00_AYAzJw0cqtSu6Og1hUD7FP_o-sxxXRdUo1ysuK2Nu5lf7A&oe=675493D7" alt="Zdjęcie 5" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/382973514_2103480079999254_2124507250328677208_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=OnzUkBK4zGYQ7kNvgHnVp0_&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=ACy_RK_3JIs74X5DOLpftmE&oh=00_AYBwB2sd715YeGRj7WRc7kP-qVVhZBfU8V1U98WaTczcHQ&oe=67549708" alt="Zdjęcie 6" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/381003638_2103480113332584_325285943264117154_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=UW1jKjqibLwQ7kNvgGomlW5&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A26OySLVI66W1r09JmRLd2A&oh=00_AYC6xmmgk0rDJJwI8nzF8NyPlt_Cpzm42JtML-TLB2wibw&oe=67548891" alt="Zdjęcie 7" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/382718873_1504315003649177_875233038624359769_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=qsNhYqYn0X8Q7kNvgHr7n25&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A_wu1cAWV-uL_JGMPsvQQ4_&oh=00_AYBmHaZiXiqqGReUxPWeoYRK1wzpJiCLbtHlcLRjn5oocg&oe=6754684F" alt="Zdjęcie 8" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/371984802_2237132159826582_9219094226576882962_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dt6IywJbzaYQ7kNvgFKEKs0&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A4PXfFD_fCiMZQyaFTAI6mm&oh=00_AYBV8z5WCCIsyrY9kTx_vF7lk2YDFT-VWPYiKETdNvPO5w&oe=67548E1D" alt="Zdjęcie 10" />
                    </div>
                    <div>
                        <img src="https://scontent-ham3-1.xx.fbcdn.net/v/t1.6435-9/71005104_1297386623777156_8497048674319204352_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=VlH18zGlgOEQ7kNvgF8nqPm&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=A4FT157gY5ROCmWBjTnhEnG&oh=00_AYD-4WZiQY769GymTdUifQzEusQiY_s6PuIOGMf7YLXlcQ&oe=67761F9D" alt="Zdjęcie 11" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default About;
