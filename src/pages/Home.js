import React from 'react';
import Banner from '../components/Banner';
import FeaturesSection from '../components/Country';
import PartnerUniversities from '../components/PartnerUniversities';
import PopularCourses from '../components/PopularCourses';
import EightStepsSection from '../components/EightStepsSection';
import FewReasons from '../components/FewReasons';
import AbousComponet from '../components/AboutPage/AboutUs';

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <PartnerUniversities />
      <PopularCourses />
      <EightStepsSection />
      <FewReasons />
      <AbousComponet />
    </div>
  );
};

export default Home;