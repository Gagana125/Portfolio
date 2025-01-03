import React from "react";
import './css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email address" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <i className="fa fa-map-marker"></i> 210, Wele Pansala Rd, Kuda Waskaduwa, Waskaduwa
            </li>
            <li>
              <i className="fa fa-phone"></i> +94 763818641
            </li>
            <li>
              <i className="fa fa-envelope"></i> gbeyandi@gmail.com
            </li>
            {/* <li>
              <i className="fa fa-globe"></i> https://Colorlib/
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
