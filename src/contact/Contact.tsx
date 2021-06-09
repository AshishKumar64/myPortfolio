import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  // const validate = 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoader(true);
    
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error: any) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="heading">
        <span className="contact-me">CONTACT</span>
        <span className="me"> ME</span>
      </div>
      <div className="contact-data">
        <div className="contact-details">
          <div className="contact-detail">
            <div>
              <i className="fa fa-phone icon"></i>
            </div>
            <div>+91 9211773639</div>
          </div>
          <div className="contact-detail">
            <i className="fa fa-envelope icon"></i>
            aakum98@gmail.com
          </div>
          <div className="contact-detail">
            <i className="fa fa-map-marker icon"></i>
            Hapur, Uttar Pradesh
          </div>
        </div>
        {/* <div className="form-container"> */}
        <div className="send-message">
          <i className="fa fa-paper-plane"></i>
              &nbsp; Send a message &nbsp;
          <i className="fa fa-paper-plane"></i>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            required
            placeholder="e.g. Ashish Kumar"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            required
            placeholder="e.g. xyz@gmail.com"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Message</label>
          <textarea
            required
            placeholder="e.g. You are awesome"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


