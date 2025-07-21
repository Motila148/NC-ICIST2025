import React, { useState, useEffect } from 'react';
import './Schedule.css';

// The entire schedule is now in a data structure, making it easy to manage.
const scheduleData = [
  {
    day: 'Day 1',
    date: '11 December 2025',
    events: [
      { time: '7:30 AM - 10:00 AM', title: 'Registration', location: 'Centenary Hall', type: 'special' },
      { time: '10:00 AM - 11:30 AM', title: 'Opening Ceremony', location: 'Centenary Hall', type: 'ceremony' },
      { time: '11:35 AM - 11:50 AM', title: 'Keynote Address', description: 'Speaker & Topic TBD', type: 'keynote' },
      { time: '11:50 AM - 12:00 PM', title: 'Vote of Thanks', type: 'ceremony' },
      { time: '12:00 PM - 1:00 PM', title: 'Lunch Break', type: 'meal' },
      { time: '1:00 PM - 4:00 PM', title: 'Scientific Session I', description: 'Chairperson & Speakers TBD', location: 'Halls 1-6', type: 'session' },
    ],
  },
  {
    day: 'Day 2',
    date: '12 December 2025',
    events: [
      { time: '9:00 AM - 10:30 AM', title: 'Scientific Session II', description: 'Lead speaker & paper presentations', location: 'Halls 1-6', type: 'session' },
      { time: '10:30 AM - 11:00 AM', title: 'Tea Break', type: 'break' },
      { time: '11:00 AM - 1:00 PM', title: 'Scientific Session III', description: 'Lead speaker & paper presentations', location: 'Halls 1-6', type: 'session' },
      { time: '1:00 PM - 2:00 PM', title: 'Lunch Break', type: 'meal' },
      { time: '2:00 PM - 4:00 PM', title: 'Scientific Session IV', description: 'Lead speaker & paper presentations', location: 'Halls 1-6', type: 'session' },
      { time: '4:00 PM - 4:15 PM', title: 'Tea Break', type: 'break' },
      { time: '4:30 PM - 7:00 PM', title: 'Cultural Programme', type: 'special' },
      { time: '7:00 PM - 8:00 PM', title: 'Conference Dinner', type: 'meal' },
    ],
  },
  {
    day: 'Day 3',
    date: '13 December 2025',
    events: [
      { time: '9:00 AM - 11:30 AM', title: 'Scientific Session V', description: 'Lead speaker & paper presentations', location: 'Halls 1-6', type: 'session' },
      { time: '11:30 AM - 11:40 AM', title: 'Tea Break', type: 'break' },
      { time: '11:45 AM - 12:45 PM', title: 'Closing Ceremony', type: 'ceremony' },
      { time: '12:45 PM - 1:45 PM', title: 'Lunch', type: 'meal' },
      { time: '1:45 PM onwards', title: 'Sightseeing', type: 'special' },
    ],
  },
];

const Schedule = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const isEventActive = (eventTime, eventDate) => {
    const [startTimeStr, endTimeStr] = eventTime.split(' - ');
    if (!startTimeStr || !endTimeStr) return false;

    const startDateTime = new Date(`${eventDate} ${startTimeStr.replace('onwards', '11:59 PM')}`);
    const endDateTime = new Date(`${eventDate} ${endTimeStr.replace('onwards', '11:59 PM')}`);

    return currentTime >= startDateTime && currentTime <= endDateTime;
  };

  return (
    <section className="schedule-section">
      <h2 className="section-title">Programme Schedule</h2>
      <div className="schedule-tabs">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            className={`tab-btn ${index === activeDayIndex ? 'active' : ''}`}
            onClick={() => setActiveDayIndex(index)}
          >
            {day.day}
            <span className="tab-date">{day.date}</span>
          </button>
        ))}
      </div>

      <div className="timeline-container">
        {scheduleData[activeDayIndex].events.map((event, index) => {
          const isActive = isEventActive(event.time, scheduleData[activeDayIndex].date);
          return (
            <div key={index} className={`event-item ${event.type} ${isActive ? 'live' : ''}`}>
              <div className="event-time">{event.time}</div>
              <div className="event-details">
                <h4 className="event-title">{event.title}</h4>
                {event.description && <p className="event-description">{event.description}</p>}
                {event.location && <p className="event-location">📍 {event.location}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedule;