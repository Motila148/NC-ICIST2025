import React from 'react';
import './ImportantDates.css';

const conferenceDates = [
  { title: 'Last date of Abstract Submission', date: 'August 5, 2025' },
  { title: 'Last date of Paper Submission', date: 'September 14, 2025' },
  { title: 'Intimation of Paper acceptance', date: 'October 31, 2025' },
  { title: 'Last date of Registration', date: 'November 15, 2025' },
];

// Helper function to determine the deadline status
const getDeadlineStatus = (dateString) => {
  const today = new Date();
  const deadline = new Date(dateString);
  
  today.setHours(0, 0, 0, 0);
  
  const daysDifference = (deadline - today) / (1000 * 60 * 60 * 24);

  if (daysDifference < 0) return 'past';
  if (daysDifference <= 17) return 'urgent';
  return 'active';
};

const ImportantDates = () => {
  return (
    <section className="important-dates-section">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        <div className="dates-table-container">
          <table className="dates-table">
           
            <tbody>
              {conferenceDates.map((item, index) => {
                const statusClass = getDeadlineStatus(item.date);
                return (
                  <tr className={statusClass} key={index}>
                    <td data-label="Event">{item.title}</td>
                    <td data-label="Date">{item.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;