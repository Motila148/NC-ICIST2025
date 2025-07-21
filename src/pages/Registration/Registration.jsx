import React from 'react';
import './Registration.css';

// Data for Registration Fees
const feeData = [
  { icon: '🎓', category: 'Research Scholar and Students', inr: '₹5,000/-', usd: '$150' },
  { icon: '👨‍🏫', category: 'Academicians', inr: '₹7,000/-', usd: '$250' },
  { icon: '💼', category: 'Industry & Professional', inr: '₹10,000/-', usd: '$350' },
];

// New detailed guidelines for authors
const authorGuidelines = [
  "All submitted papers must be original, unpublished, and not under consideration elsewhere.",
  "Papers should be written in clear and proper English, starting with a title, abstract, and keywords.",
  "The manuscript should be four to five pages long, including all metadata on the first page.",
  "The similarity index for a submitted article must be as per the conditions of the publication group.",
  "It is highly recommended that authors comply with the stated formatting guidelines.",
  "Each manuscript may have a maximum of 5 authors."
];

// New step-by-step instructions for CMT portal
const submissionSteps = [
  "Log in to Microsoft CMT with your credentials and click the 'Create New Submission' button.",
  "Fill in the required details, including the paper title, abstract, and all author information.",
  "Upload your complete paper in PDF format as per the conference formatting guidelines.",
  "Assign appropriate keywords to your submission to categorize your work.",
];

const Registration = () => {
  return (
    <section className="submission-section">
      {/* --- Paper Submission Section --- */}
      <div className="submission-instructions">
        <h2 className="section-title">Paper Submission</h2>
        
        <h3 className="sub-heading">Author's Guidelines</h3>
        <ul className="guidelines-list">
          {authorGuidelines.map((guideline, index) => (
            <li key={index}>{guideline}</li>
          ))}
        </ul>
        
        <h3 className="sub-heading">How to Submit via CMT</h3>
        <ol className="instructions-list">
          {submissionSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="action-buttons">
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn secondary-btn"
          >
            📄 Submit Your Paper on CMT
          </a>
        </div>
      </div>

      {/* --- Registration Fees Section --- */}
      <div className="fees-container">
        <h2 className="section-title">Registration Fees</h2>
        <div className="table-container">
          <table className="fees-table">
            <thead>
              <tr>
                <th>Participants</th>
                <th>National/SAARC (INR)</th>
                <th>Foreign (USD)</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="participant-type">
                      <span className="participant-icon">{item.icon}</span>
                      <span>{item.category}</span>
                    </div>
                  </td>
                  <td>{item.inr}</td>
                  <td>{item.usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fee-note">
          <p>* The registration fee is exclusive of GST.</p>
        </div>
        <div className="action-buttons">
          <a
            href="https://forms.gle/your-registration-link"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn primary-btn"
          >
            📝 Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;