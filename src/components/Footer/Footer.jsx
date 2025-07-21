import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  
  
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Our Location</h3>
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Manipur Institute of Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.915510751797!2d93.92484204159781!3d24.754746949035145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374925ce7ee0c749%3A0x4e577411f1653a2d!2sManipur%20Institute%20of%20Technology%2C%20Manipur%20University!5e1!3m2!1sen!2sin!4v1746255637177!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-base sm:text-lg font-medium">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/Schedule" className="hover:underline">Schedule</Link>
            </li>
            <li>
              <Link to="/Registration" className="hover:underline">Registration</Link>
            </li>
            <li>
              <Link to="/Accomodation" className="hover:underline">Accomodation</Link>
            </li>
            <li>
              <Link to="/Paper_submission" className="hover:underline">Paper Submission</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <p className="text-base font-medium mb-1">Email: rkonsam.mit@manipuruniv.ac.in</p>
          <p className="text-base font-medium mb-1">Phone: +91 98765 43210</p>
          <p className="text-base font-medium">Address: Manipur Institute of Technology, Manipur University,  Canchipur, Imphal-795003</p>
        </div>

        {/* Social Media */}
        <div>
  <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
  <div className="flex flex-wrap gap-4 text-2xl sm:text-3xl mt-2">
    <a 
      href="https://www.facebook.com/people/Manipur-Institute-of-Technology/100064831322913/" 
      aria-label="Facebook" 
      className="hover:text-blue-500 transition"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>
    <a 
      href="https://www.linkedin.com/school/manipur-institute-of-technology/" 
      aria-label="LinkedIn" 
      className="hover:text-blue-400 transition"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaLinkedin />
    </a>
    <a 
      href="https://www.instagram.com/reso_mit_/" 
      aria-label="Instagram" 
      className="hover:text-pink-500 transition"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
  </div>
</div>
      </div>

      {/* Footer Bottom Note */}
      <div className="mt-10 sm:mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">NE-ICIST 2025</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
