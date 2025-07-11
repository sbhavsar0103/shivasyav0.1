import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import offer1 from '../assets/images/offers/Venturi_CAT_offer_Sep11.jpg';
import offer2 from '../assets/images/offers/offer-3.jpg';
import offer3 from '../assets/images/offers/offer-2.jpg';

const offerItems = [
  {
    img: offer1,
    link: '#',
    alt: 'Venturi CAT Offer',
  },
  {
    img: offer2,
    link: '#',
    alt: 'Offer 3',
  },
  {
    img: offer3,
    link: '#',
    alt: 'Offer 2',
  },
];

const EventsAndOffers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="auto-container">
        <div className="sec-title text-center light">
          <h2>EVENTS AND OFFERS</h2>
        </div>

        <div className="carousel-outer">
          <Slider {...settings} className="testimonial-carousel">
            {offerItems.map((offer, index) => (
              <div className="testimonial-block testimonial-block-offer" key={index}>
                <div className="image-box1">
                  <figure className="image img-offer">
                    <a href={offer.link} target="_blank" rel="noopener noreferrer">
                      <img src={offer.img} alt={offer.alt} />
                    </a>
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default EventsAndOffers;
