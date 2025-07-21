import React from 'react';
import './Organizer.css';

// Import the images from your assets folder
import patronImg from '../../assets/patron.jpg';
import chairmanImg from '../../assets/chairman.jpeg';
import convenorImg from '../../assets/convenor.png';

// 1. Create a dedicated array for the leadership roles
const leadershipData = [
  { role: "Patron", name: "Prof. N. Lokendra Singh", designation: "Hon'ble Vice-Chancellor, Manipur University", img: patronImg },
  { role: "Chairman", name: "Prof. N. Basanta Singh", designation: "Dean, School of Engineering, Manipur University", img: chairmanImg },
  { role: "Convenor", name: "Dr. K Rambha Devi", designation: "Associate Professor, Manipur Institute of Technology", img: convenorImg }
];

// 2. The remaining committee members
const committeeData = [
  {
    role: "Co-Convenors / Assistant Organising Secretary",
    members: [
      { name: "Dr. Syed Mujibur Rahman", designation: "Department of Mechanical Engineering, MIT" },
      { name: "Dr. Nongthombam Premananda Singh", designation: "Department of Civil Engineering, MIT" },
      { name: "Dr. Khomdram Jolson Singh", designation: "Department of ECE, MIT" },
      { name: "Dr. Rajeev Rajkumar", designation: "Department of Computer Science and Engineering, MIT" },
      { name: "Dr. Yumnam Mahendra Singh", designation: "Department of Basic Sciences and Humanities, MIT" },
      { name: "Thokchom Suka Deba Singh", designation: "Department of Electrical Engineering, MIT" }
    ]
  }
];

const Org = () => {
  return (
    <section className="organizer-section">
      <div className="container">
        <h2 className="section-title">Organizing Committee</h2>
        
        {/* Leadership Section - 3 columns */}
        <div className="leadership-grid">
          {leadershipData.map((member) => (
            <div key={member.name} className="leadership-card">
              <img src={member.img} alt={member.name} className="leadership-image" />
              <h3 className="leadership-name">{member.name}</h3>
              <p className="leadership-role">{member.role}</p>
              <p className="leadership-designation">{member.designation}</p>
            </div>
          ))}
        </div>

        {/* Other Committee Members */}
        <div className="committee-list">
          {committeeData.map((section) => (
            <div key={section.role} className="committee-card">
              <h3 className="card-role">{section.role}</h3>
              <div className="card-members">
                {section.members.map((member) => (
                  <div key={member.name} className="member-details">
                    <p className="member-name">{member.name}</p>
                    <p className="member-designation">{member.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Org;