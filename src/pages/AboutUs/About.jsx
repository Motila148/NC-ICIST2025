import React from 'react';
import './About.css';
import { FaUniversity, FaCalendarAlt, FaAward, FaCheckCircle, FaBuilding, FaBullseye } from 'react-icons/fa';

// Data is structured to be consistent across all cards
const aboutData = [
  {
    title: 'Manipur University',
    isMissionList: false, // Flag to render paragraphs
    paragraphs: [
      'Established as a State University on June 5, 1980, Manipur University was converted into a Central University on October 13, 2005. The University comprises nine Schools of Studies, 47 departments, and seven Centres of Studies, with a current student population of 7,396.',
      'Situated in Canchipur, Imphal, a historically significant location, the University spans 287.53 acres. It plays a crucial role in shaping higher education in the state by fostering intellectual, academic, and cultural growth through innovation and research.',
    ],
    stats: [
      { icon: <FaCalendarAlt />, label: 'Established in 1980' },
      { icon: <FaUniversity />, label: 'Central University since 2005' },
      { icon: <FaAward />, label: 'NAAC Accredited \'B+\'' },
      { icon: <FaBuilding />, label: '119 Affiliated Colleges' },
    ],
  },
  {
    title: 'Manipur Institute of Technology (MIT)',
    isMissionList: false,
    paragraphs: [
      'The Manipur Institute of Technology (MIT), formerly the Government College of Technology, was established on August 28, 1998, as the first engineering college in the state.',
      'Since October 13, 2005, MIT has been a Constituent College of Manipur University. The Civil Engineering (UG Program) of MIT is accredited by the National Board of Accreditation (NBA) under Tier-II for the Academic Year 2020-2021 to 2022-2023 i.e. upto 30-06-2023 vide letter No.29-9-2016-NBA dated 05-06-2020.',
    ],
    stats: [
        { icon: <FaCalendarAlt />, label: 'Established in 1998' },
        { icon: <FaCheckCircle />, label: 'NBA Accredited Program' },
        { icon: <FaBuilding />, label: 'Constituent College of MU' },
    ],
  },
  {
    title: 'Our Mission',
    isMissionList: true, // Flag to render a list instead of paragraphs
    paragraphs: [ // Using 'paragraphs' key to hold mission points
        'To nurture technically proficient, innovative, and research-driven engineers capable of tackling modern challenges through student-centric teaching methodologies.',
        'To provide holistic engineering and technology education for comprehensive development.',
        'To produce competent engineering professionals with a strong sense of social responsibility.',
    ],
    stats: [ // The Vision is treated as a key fact
        { 
            icon: <FaBullseye />, 
            label: 'To achieve excellence in engineering and technology education while fostering leadership in human resource development.',
            isVision: true // Special flag for unique styling if needed
        }
    ],
    factsTitle: 'Our Vision' // Custom title for the facts sidebar
  }
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Our Institute</h2>
        <div className="about-content">
          {aboutData.map((item, index) => (
            <div className="about-card" key={index}>
              <div className="main-content">
                <h3 className="about-title">{item.title}</h3>
                {item.isMissionList ? (
                    <ul className="mission-list">
                        {item.paragraphs.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                ) : (
                    item.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                )}
              </div>
              <aside className="key-facts">
                <h4 className="key-facts-title">{item.factsTitle || 'Key Facts'}</h4>
                <ul>
                  {item.stats.map((stat, i) => (
                    <li className={`fact-item ${stat.isVision ? 'vision-item' : ''}`} key={i}>
                      <span className="fact-icon">{stat.icon}</span>
                      <span className="fact-label">{stat.label}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;