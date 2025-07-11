import React, { useState, useEffect } from 'react';
import pointIcon from '../assets/images/point.png';
import '../assets/styles/animate.css';
import WOW from 'wowjs';

const courseData = [
  {
    column: 1,
    items: [
      {
        title: 'Management',
        courses: ['MBA/ MIM', 'Luxury Brand Management', 'Sports Management'],
      },
      {
        title: 'Business',
        courses: ['International Business', 'Entrepreneurship', 'Sales, Marketing  and Finance'],
      },
      {
        title: 'Computer Science & IT',
        courses: ['Artificial intelligence', 'Robotics', 'Data Science & Business Analyst'],
      },
    ],
  },
  {
    column: 2,
    items: [
      {
        title: 'Engineering',
        courses: ['Computer Engineering', 'Mechanical Engineering', 'Civil Engineering'],
      },
      {
        title: 'Health Science',
        courses: ['Public Health', 'Healthcare Administration', 'Health Informatics'],
      },
    ],
  },
  {
    column: 3,
    items: [
      {
        title: 'Law & Legal Studies',
        courses: ['Legal Studies', 'International Law', 'Business and Commercial'],
      },
      {
        title: 'Biological & Life Sciences',
        courses: ['Biotechnology', 'Biological Sciences', 'Biomedical Engineering'],
      },
    ],
  },
];

const AccordionItem = ({ title, courses, isOpen, onClick }) => (
  <li className={`accordion block ${isOpen ? 'active-block1' : ''}`}>
    <div className={`acc-btn ${isOpen ? 'active1' : ''}`} onClick={onClick}>
      {title}
      <div className="icon fa fa-angle-right"></div>
    </div>
    <div className={`acc-content ${isOpen ? 'current' : ''}`}>
      <div className="content">
        <div className="text">
          <ul>
            {courses.map((course, idx) => (
              <li key={idx}>
                <img src={pointIcon} alt="point" /> {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </li>
);

const PopularCourses = () => {
  const [openState, setOpenState] = useState(() =>
    courseData.map((col) =>
      col.items.map((item) => !!item.defaultOpen)
    )
  );

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const toggleAccordion = (colIndex, itemIndex) => {
    setOpenState((prev) =>
      prev.map((col, cIdx) =>
        cIdx === colIndex
          ? col.map((open, iIdx) => iIdx === itemIndex ? !open : false)
          : col
      )
    );
  };

  return (
    <section className="why-choose-us-two faqs-section">
      <div className="bg-layer"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2 className="title">POPULAR COURSES</h2>
        </div>
        <div className="row">
          {courseData.map((column, colIndex) => (
            <div
              className="faq-column col-lg-4 col-md-12 col-sm-12 wow fadeInRight"
              data-wow-delay={`${colIndex * 0.2}s`}
              key={colIndex}
            >
              <div className="inner-column">
                <ul className="accordion-box">
                  {column.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      title={item.title}
                      courses={item.courses}
                      isOpen={openState[colIndex][itemIndex]}
                      onClick={() => toggleAccordion(colIndex, itemIndex)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
