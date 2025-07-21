import React from 'react';
import './AdvisoryCommittee.css';

// The list of advisory committee members
// Structured with name, title, and affiliation for clear presentation
const committeeData = [
  {
    name: "Erdal Karapinar",
    title: "Professor",
    affiliation: "Atilim University, Incek, Ankara, Turkey"
  },
  {
    name: "Prof. Mujahid Abbas",
    title: "Professor",
    affiliation: "University of Johannesburg, South Africa"
  },
  {
    name: "Prof. A K Dey",
    title: "Professor",
    affiliation: "National Institute of Technology, Silchar, Assam"
  },
  {
    name: "Dr. Himadri Chattopadhyay",
    title: "Professor",
    affiliation: "Jadavpur University, Kolkata"
  },
  {
    name: "Mr. Guhan Gunasekaran",
    title: "Founder & Director",
    affiliation: "GUHAN INDUSTRIAL AND MANUFACTURING SOLUTIONS PVT. LTD., Kanchipuram, Tamil Nadu"
  }
];


const AdvisoryCommittee = () => {
  return (
    <section className="advisory-committee-section">
      <div className="container">
        <h2 className="section-title">Advisory Committee</h2>
        <div className="committee-grid">
          {committeeData.map((member) => (
            <div key={member.name} className="profile-card">
              <h3 className="profile-name">{member.name}</h3>
              <p className="profile-title">{member.title}</p>
              <p className="profile-affiliation">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCommittee;