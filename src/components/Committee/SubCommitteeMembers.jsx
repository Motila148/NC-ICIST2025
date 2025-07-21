import React from 'react';
import './SubCommitteeMembers.css';

// Store all sub-committee data in an array for easy updates
const subCommitteeData = [
  { title: 'Dias Setting and Seating Arrangement', chairman: 'Th Suka Deba Singh' },
  { title: 'Reception and Accommodation Committee', chairman: 'Dr. Syed Mujibur Rahman' },
  { title: 'Inaugural and Valedictory Committee', chairman: 'Dr. Anita Sorokhaibam', role: 'Chairperson' },
  { title: 'Registration and Certificate Committee', chairman: 'Dr. Rajeev Rajkumar' },
  { title: 'Food and Refreshment Committee', chairman: 'Dr. Yumnam Mahendra Singh' },
  { title: 'Transportation Committee', chairman: 'Dr. Chirom Gobin Singh' },
  { title: 'Scientific Sessions Committee', chairman: 'Dr. Thokchom Suresh Singh' },
  { title: 'Publication Committee', chairman: 'Dr. Khomdram Jolson Singh' },
  { title: 'Information and Publicity Committee', chairman: 'Dr. Sapam Jitu Singh' },
  { title: 'Finance Committee', chairman: 'Dr K Rambha Devi', role: 'Chairperson' },
];

const SubCommittees = () => {
  return (
    <section className="subcommittees-section">
      <div className="container">
        <h2 className="section-title">Sub-Committees</h2>
        <div className="subcommittee-grid">
          {subCommitteeData.map((committee, index) => (
            <div className="subcommittee-card" key={index}>
              <h3 className="committee-title">{committee.title}</h3>
              <p className="committee-chairman">
                <strong>{committee.role || 'Chairman'}:</strong> {committee.chairman}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubCommittees;