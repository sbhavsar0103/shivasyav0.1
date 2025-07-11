import React from 'react';
import desktopVideo from '../assets/videos/venturi-bg-video.mp4';
import mobileVideo from '../assets/videos/venturi-bg-mobile-video.mp4';
import '../assets/styles/owl.css'; // Optional: only keep this if it includes other useful styles

const Banner = () => {
  return (
    <section className="banner-section-two">
      <div class="banner-carousel">
        <div class="slide-item">          
          <div className="bg-image desKtop-view">
            <video autoPlay muted loop playsInline>
              <source src={desktopVideo} type="video/mp4" />
            </video>
          </div>

          <div className="bg-image mobile-view">
            <video autoPlay muted loop playsInline>
              <source src={mobileVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="auto-container">
            <div className="content-box">
              <div className="inner">
                <h1 className="title animate-2">Global Admissions Simplified</h1>
                <h6 className="sub-text-title">IELTS | ADMISSION COUNSELLING | VISA COUNSELLING</h6>
                <h6 className="text-left text-white">Our Ancillary Services:</h6>
                <p className="text-left text-white">
                  <i className="icon flaticon-personal icon-ancillary"></i>
                  <i className="icon flaticon-accomodation icon-ancillary"></i>
                  <i className="icon flaticon-presentation icon-ancillary"></i>
                  <i className="icon flaticon-life-insurance icon-ancillary"></i>
                  <i className="icon flaticon-money-transfer icon-ancillary"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
