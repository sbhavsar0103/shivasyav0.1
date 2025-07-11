import React from 'react';
import admitImg from '../assets/images/help-you-with/admit-guarantee.jpg';
import counsellingImg from '../assets/images/help-you-with/personalised-counselling.jpg';
import testsImg from '../assets/images/help-you-with/standardised-tests.jpg';
import ieltsImg from '../assets/images/help-you-with/scholarship-guarantee.jpg';
import { Link } from 'react-router-dom';

const reasons = [
  {
    image: admitImg,
    title: 'ADMIT GUARANTEE',
    description:
      'To top-ranked partner universities such as John Hopkins, Group of Eight Universities like ANU, UNSW, Russell Group Universities, and many more',
    delay: '0ms',
  },
  {
    image: counsellingImg,
    title: 'PERSONALIZED COUNSELLING',
    description:
      'To ensure you receive the end-to-end support needed to get the best admits',
    delay: '400ms',
  },
  {
    image: testsImg,
    title: 'LOOK BEYOND STANDARDIZED TESTS',
    description:
      'Because only GMAT/GRE score should not decide the quality of education you deserve',
    delay: '800ms',
  },
  {
    image: ieltsImg,
    title: 'TAILORED IELTS TEST PREP',
    description: 'Support until you secure your desired band',
    delay: '1200ms',
  },
];

const FewReasons = () => {
  return (
    <section className="team-section fun-fact-section">
      <div className="bg-layer"></div>
      <div className="anim-icons">
        <span className="icon icon-object-1"></span>
      </div>

      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>FEW REASONS TO CHOOSE US</h2>
        </div>

        <div className="row">
          {reasons.map((reason, index) => (
            <div
              className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={reason.delay}
              key={index}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={reason.image} alt={reason.title} />
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">{reason.title}</h4>
                  <span className="designation">{reason.description}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="inner-column text-center" style={{ width: '100%' }}>
            <Link to="/services" className="theme-btn btn-style-one text-center">
              <span className="btn-title">KNOW MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FewReasons;
