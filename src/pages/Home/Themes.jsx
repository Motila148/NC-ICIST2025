// components/SubThemes/Themes.jsx
import React from "react";
import "./Themes.css";

const themes = [
  {
    title: "Sub-Themes I",
    color: "linear-gradient(135deg, #208AAE, #136784)", // Teal Gradient
    points: [
      "Resilient and Disaster-Resistant Structures",
      "Innovative Materials and Construction Techniques",
      "Transportation Engineering and Smart Mobility",
      "Water Resources Management and Climate Adaptation",
      "Geotechnical Engineering and Foundation Innovations",
      "Digital Transformation in Civil Engineering (AI, BIM, IoT)",
      "Structural Health Monitoring and Maintenance",
    ],
  },
  {
    title: "Sub-Themes II",
    color: "linear-gradient(135deg, #8E44AD, #61277A)", // Purple Gradient
    points: [
      "Application of AI/ML in mechanical engineering and technology",
      "Sustainable mechanical systems and green technology",
      "Thermal systems and Renewable energy solutions",
      "Energy related and energy optimization",
      "Energy demands, future trends and its environmental impacts",
      "Robotics and smart mechatronic systems",
      "Advances in manufacturing technologies",
      "Advances in engineering materials",
      "Design optimization and simulation in mechanical engineering",
      "Dynamics and vibration control systems",
      "Advances in modelling, simulation and visualisation of energy systems",

    ],
  },
];

const Themes = () => {
  return (
    <section className="themes-section">
      <h2 className="themes-title">Conference Sub-Themes</h2>
      <div className="themes-grid">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="theme-card"
            style={{ background: theme.color }}
          >
            <h3 className="theme-heading">{theme.title}</h3>
            <ul className="theme-list">
              {theme.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;