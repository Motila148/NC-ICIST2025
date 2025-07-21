import React from "react";
import "./Speaker.css"; // Assuming you have a CSS file for additional styles

const speakers = [
  {
    name: "Dr. Aisha Roy",
    designation: "AI Researcher at DeepMind",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Passionate about deep learning, ethics, and tech for good.",
    theme: "from-blue-500 to-indigo-500",
  },
  {
    name: "Mr. Rohan Mehta",
    designation: "Software Engineer at Google",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Works on scalable AI infrastructure and open-source advocacy.",
    theme: "from-teal-500 to-green-500",
  },
  {
    name: "Prof. Meenal Kaur",
    designation: "Professor at IIT Delhi",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    bio: "Focused on responsible AI, education, and tech equity.",
    theme: "from-pink-500 to-rose-500",
  },
  
];

const Speakers = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">
          Meet Our Speakers
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${speaker.theme} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-sm opacity-90 italic mb-2">{speaker.designation}</p>
                <p className="text-sm text-center opacity-80">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
