import React, { useEffect } from 'react';
import WOW from 'wowjs';
import stepImage from '../assets/images/8step-image.png';
import step1 from '../assets/images/8-steps/Begin-Your-IELTS-Prep.png';
import step2 from '../assets/images/8-steps/Assess-Your-Profile-and-Shortlist-Universities.png';
import step3 from '../assets/images/8-steps/Prepare-Your-Supporting-Documents.png';
import step4 from '../assets/images/8-steps/Submit-Your-Applications.png';
import step5 from '../assets/images/8-steps/Evaluate-Your-Admits.png';
import step6 from '../assets/images/8-steps/Prep-For-All-Your-Interviews.png';
import step7 from '../assets/images/8-steps/Finish-Your-Visa-and-Financial-Documentation.png';
import step8 from '../assets/images/8-steps/Pre-Departure Meet.png';

const steps = [
  {
    title: 'Begin Your IELTS Prep',
    desc: 'Personalized prep designed by in-house Certified IELTS experts to ensure you score 7.5+ bands on the first attempt itself.',
    icon: step1,
  },
  {
    title: 'Assess Your Profile and Shortlist Universities',
    desc: 'Our team shortlists top-rank universities based on your profile, academic goals, location preferences, financial constraints, and program fit.',
    icon: step2,
  },
  {
    title: 'Prepare Your Supporting Documents',
    desc: 'We help you craft a compelling profile supported by high-quality essays, SoPs, and LoRs',
    icon: step3,
  },
  {
    title: 'Submit Your Applications',
    desc: 'Our team submits all your applications and documents in time and communicates with the admissions officer to fast-track your admission order.',
    icon: step4,
  },
  {
    title: 'Evaluate Your Admits',
    desc: 'We help you choose the right admission offer based on parameters that are relevant to you and your goals.',
    icon: step5,
  },
  {
    title: 'Prep For All Your Interviews',
    desc: 'We take you through mock interviews and masterclasses to help you ace all university interviews.',
    icon: step6,
  },
  {
    title: 'Finish Your Visa and Financial Documentation',
    desc: 'We have a list of vendor-partners who personally work with you to get your visa, secure student loans and complete all other formalities.',
    icon: step7,
  },
  {
    title: 'Pre-Departure Meet',
    desc: 'Our team ensures you transition easily to your new life abroad. We are with you at every step, making the journey as seamless as possible.',
    icon: step8,
  },
];



const EightStepsSection = () => {

    useEffect(() => {
      new WOW.WOW().init();
    }, []);

  return (
    <section className="features-section-four">
      <div className="anim-icons">
        <span className="icon icon-shape-5"></span>
      </div>
      <div className="auto-container">
        <div className="row">
          {/* Left Content Column */}
          <div className="content-column col-lg-5 col-md-12">
            <div className="inner-column wow fadeInRight">
              <div className="sec-title light">
                <h2 className="title">
                  8 Steps to Getting <br />
                  Your Admit From a <br />
                  Top College
                </h2>
              </div>
              <div className="image-box">
                <figure className="image">
                  <img src={stepImage} alt="8 Steps Main" />
                </figure>
              </div>
            </div>
          </div>

          {/* Right Features Column */}
          <div className="features-column col-lg-7 col-md-12 col-sm-12 order-2">
            <div className="inner-column wow fadeInLeft">
              <div className="row scrollbar" id="scrollbar2">
                {steps.map((step, index) => (
                  <div className="feature-block-five" key={index}>
                    <div className="inner-box">
                      <i className="icon">
                        <img src={step.icon} alt={step.title} />
                      </i>
                      <h5 className="title">{step.title}</h5>
                      <div className="text">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EightStepsSection;