import React, { useState } from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_FORM_URL =
      // "https://docs.google.com/forms/d/e/12hhT0gmKNOx7DaEzvCL5iag8aTeL6kVhuyAe6G3JkhU/formResponse";
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSffc3kJo_TYp_hIpHEGBvR4vwJOdsWVckw0G5D4FZhfXv_Tlw/formResponse";

    const data = new FormData();

    data.append("entry.1280918817", formData.name); // ✅ Name
    data.append("entry.1328661423", formData.email); // ✅ Email
    data.append("entry.323769570", formData.phone); // ✅ Phone
    data.append("entry.1826135570", formData.message); // ✅ Message

    data.append("submit", "Submit");

    // data.append("submit", "Submit");

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Get in Touch with CodeCraft Solutions</h4>
        <h1 className="gradient__text">
          Let’s Discuss Your Project or Requirements
        </h1>
        {/* <p>
          Whether you’re looking for web development, mobile apps, AI solutions,
          or academic support, our team is here to help.
          <br />
          Share your requirements and we’ll get back to you with clear guidance
          and next steps.
        </p> */}
        <h4>Fill out the form below and we’ll contact you shortly</h4>

        <form className="possibility_contactus_form" onSubmit={handleSubmit}>
          <div className="possibility_contactus_form_input_group">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="possibility_contactus_form_input_group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your query*"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>

          {success && (
            <p style={{ color: "green", marginTop: "10px" }}>
              ✅ Thank you! We will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Possibility;
