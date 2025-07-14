import React, { useEffect } from 'react';
import WOW from 'wowjs';
import '../assets/styles/animate.css';
import australiaFlag from '../assets/images/flags/australia.png';
import usaFlag from '../assets/images/flags/usa.png';
import canadaFlag from '../assets/images/flags/canada.png';
import ukFlag from '../assets/images/flags/united-kingdom.png';
import europeFlag from '../assets/images/flags/europe.png';
import nzFlag from '../assets/images/flags/new-zealand.png';

const features = [
  {
    country: 'AUSTRALIA',
    image: australiaFlag,
    description: 'Tie-ups with Group of 8 Universities',
    delay: '0ms',
  },
  {
    country: 'USA',
    image: usaFlag,
    description: 'Tie-ups with 300+ Universities Across 35+ States',
    delay: '300ms',
  },
  {
    country: 'CANADA',
    image: canadaFlag,
    description: 'Tie-ups with 150+ Top Universities & Colleges',
    delay: '600ms',
  },
  {
    country: 'UK',
    image: ukFlag,
    description: 'Tie-ups with Russell Group Universities',
    delay: '900ms',
  },
  {
    country: 'EUROPE',
    image: europeFlag,
    description: 'Tie-ups with 150+ Universities',
    delay: '600ms',
  },
  {
    country: 'New Zealand',
    image: nzFlag,
    description: 'Tie-ups with 30+ Universities',
    delay: '900ms',
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section className="features-section">
      <div className="auto-container">
        <div className="outer-box">
          <div className="fact-counter">
            <div className="row">
              {features.map((item, index) => (
                <div key={index} className="counter-block col-lg-2 col-md-6 col-sm-3 wow fadeInUp" data-wow-delay={item.delay}>
                  <div className="inner">
                    <i className="icon">
                      <img src={item.image} alt={item.country} />
                    </i>
                    <div className="count-box">{item.country}</div>
                    <h6 className="counter-title">{item.description}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;