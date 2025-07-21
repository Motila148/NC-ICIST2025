import React from 'react';
import './SubAdvisoryCommittee.css';

// Data is grouped by department for clarity and easier rendering.
const committeeDataByDept = {
  "Department of Civil Engineering, MIT": [
    "Dr. Thokchom Kiranbala Devi",
    "Dr. Thokchom Suresh Singh",
    "Dr. Thangjam Somchand Singh",
    "Dr. Yendrembam Arunkumar Singh",
    "Dr. Sangeeta Sougrakpam",
    "Dr. Chirom Gobin Singh",
    "Dr. Ningthoukhongjam Sukumar Singh",
    "Thoudam Jagat Singh",
    "Nahakpam Hitler Singh",
    "Khumallambam Allinson",
  ],
  "Department of Computer Science and Engineering, MIT": [
    "Dr. Thiyam Ibungomacha Singh",
    "Dr. Ranbir Soram",
    "Dr. Takhellambam Sonamani Singh",
    "Dr. Sapam Jitu Singh",
    "Selina Khoirom",
    "Pebam Binodini Devi",
  ],
  "Department of Electronics and Communication Engineering (ECE), MIT": [
    "Dr. Romesh Laishram",
    "Ghaneshori Thingbaijam",
    "Khwairakpam Renuca",
    "Aribam Balarampyari Devi",
    "Sharmila Meinam",
    "Nemthianhoi Zou P",
    "Dr. Dickson Warepam",
    "Dr. L. Kholee Phimu",
    "Dr. Paikhomba Loktongbam",
  ],
  "Department of Mechanical Engineering, MIT": [
    "Dr. Ngangkham Peter Singh",
    "Dr. Satishchandra Salam",
    "Dr. Maisanam Anil Kumar Singh",
  ],
  "Department of Electrical Engineering, MIT": [
    "Khwairakpam Chaoba Singh",
    "Athokpam Bharatbushan Singh",
    "Sanasam Dhanabanta Singh",
  ],
  "Department of Basic Sciences and Humanities, MIT": [
    "Dr. Nepram Ashalata Devi",
    "Jayantakumar Oinam",
    "A. Romeo",
    "Dr. Anita Sorokhaibam",
    "Dr. Guruaribam Hirankumar Sharma",
    "Dr. Tolendra Kshetri",
    "Nigombam Babina Devi",
  ],
};

const SubAdvisoryCommittee = () => {
  return (
    <section className="sub-committee-section">
      <div className="container">
        <h2 className="section-title">Sub-Advisory Committee</h2>
        <div className="department-grid">
          {Object.keys(committeeDataByDept).map((department) => (
            <div key={department} className="department-group">
              <h3 className="department-name">{department}</h3>
              <ul className="member-list">
                {committeeDataByDept[department].map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubAdvisoryCommittee;