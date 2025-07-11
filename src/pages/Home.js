import React from 'react';
import Banner from '../components/Banner';
import FeaturesSection from '../components/Country';
import PartnerUniversities from '../components/PartnerUniversities';
import PopularCourses from '../components/PopularCourses';
import EventsAndOffers from '../components/EventsAndOffers';
import EightStepsSection from '../components/EightStepsSection';
import FewReasons from '../components/FewReasons';
// import '../assets/javascript/js/jquery.js'
// import '../assets/javascript/js/popper.min.js'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <PartnerUniversities />
      <PopularCourses />
      <EventsAndOffers />
      <EightStepsSection />
      <FewReasons />
    </div>
  );
};

export default Home;