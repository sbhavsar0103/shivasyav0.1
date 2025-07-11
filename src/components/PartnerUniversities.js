import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anuUni from '../assets/images/university-logos/ANU.jpg'
import asuUni from '../assets/images/university-logos/ASU.jpg'
import auburnUni from '../assets/images/university-logos/Auburn.jpg'
import bcitUni from '../assets/images/university-logos/British-Columbia-Institute-of-Technology.jpg'
import brockUni from '../assets/images/university-logos/brock.jpg'
import brunelUni from '../assets/images/university-logos/brunel.jpg'
import californiaUni from '../assets/images/university-logos/california.jpg'
import capebretonUni from '../assets/images/university-logos/cape-breton.jpg'
import coloradoUni from '../assets/images/university-logos/colorado.jpg'
import concordiaUni from '../assets/images/university-logos/concordia.jpg'
import coventryUni from '../assets/images/university-logos/coventry.jpg'

const universityLogos = [
  anuUni,
  asuUni,
  auburnUni,
  bcitUni,
  brockUni,
  brunelUni,
  californiaUni,
  capebretonUni,
  coloradoUni,
  concordiaUni,
  coventryUni,
];

const PartnerUniversities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="training-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>WE WILL HELP FIND THE PERFECT FIT</h2>
        </div>
        <div className="carousel-outer">
          <Slider {...settings} className="training-carousel">
            {universityLogos.map((logo, index) => (
              <div className="training-block" key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image uni-logo">
                      <img src={logo} alt={`University ${index + 1}`} />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;
