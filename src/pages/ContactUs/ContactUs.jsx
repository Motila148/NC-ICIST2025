import React from "react";
import { Mail, Phone, User, MapPin } from "lucide-react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <User className="contact-icon" />
            <div>
              <h3><strong>Convener</strong></h3>
              <p><strong>Dr Konsam Rambha Devi</strong></p>
              <p>Associate Professor</p>
            </div>
          </div>

          <div className="contact-item">
            <MapPin className="contact-icon" />
            <p>Civil Engineering Department,<br />Manipur Institute of Technology</p>
          </div>

          <div className="contact-item">
            <Phone className="contact-icon" />
            <a href="tel: 943602234"> +91 943602234</a>
          </div>

          <div className="contact-item">
            <Mail className="contact-icon" />
            <a href="mailto:rkonsam.mit@manipuruniv.ac.in">rkonsam.mit@manipuruniv.ac.in</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
