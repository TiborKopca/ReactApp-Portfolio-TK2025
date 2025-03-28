import React, { useState, useRef } from "react";
import "./contactform.scss";
import emailjs from "@emailjs/browser";

function Contactform() {
  //EMAILJS SERVICE
  const formRef = useRef(null);
//   const [status, setStatus] = useState(""); // Holds form submission status
  const [error, setError] = useState(null); //Error message

  //DATA VALIDATION
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (simulate PHP behavior)
  //REPLACED BY EMAILJS SERVICE
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Replace with actual backend API endpoint
//       const response = await fetch("sendmailPHPMailer.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("message_sent");
//         setFormData({ name: "", email: "", message: "" }); // Reset form
//       } else {
//         setStatus("message_failed");
//       }
//     } catch (error) {
//       setStatus("message_failed");
//       console.error(error);
//     }
//   };

  //EMAILJS SERVICE
  const YOUR_PUBLIC_KEY = "ZWpV0pc6quejkF3l2";
  const YOUR_SERVICE_ID = "service_fad68qk";
  const YOUR_TEMPLATE_ID = "template_cowxut8";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setError(false);
        //   console.info("Mail sent successfully");
        },
        (error) => {
          setError(true);
          console.error("Mail service FAILED...", error.text);
        }
      );
  };

  return (
    <section className="snap-container mt-header contact" id="Contact">
      <div className="container__title" aria-label="contact form title">
        <h2 className="title__heading eng" lang="en">
          Contact Me
        </h2>
        <p className="title__subtitle eng" lang="en">
          or connect on social platforms
        </p>
      </div>

      {/* <div className="container">
        <h3 className="title">Contact</h3>
        <p>
          <i className="fa fa-envelope email"></i>
        </p>
        <p>
          <i className="fa fa-phone phone"></i>
        </p>
      </div> */}

      <div className="form__container">
        <span className="form__hint">* = required field</span>
        {/* CUSTOM MESSAGE - RESPONSE */}
        {error ? (
          <h3 className="response__message">
            Message failed. Please, contact me by an alternative way.
          </h3>
        ) : error === false ? (
          <h3 className="response__message">
            Thank you for the message, I will respond ASAP.
          </h3>
        ) : (
          <form
            aria-label="contact form"
            className="contact__form"
            id="form1"
            autoComplete="on"
            onSubmit={sendEmail}
            ref={formRef}
          >
            <div className="inputfield__wrapper">
              <label htmlFor="inputNameField" className="contact__label">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="inputNameField"
                aria-label="Name input field"
                className="form__inputield-name"
                placeholder="Write your Name"
                maxLength="30"
                required
                value={formData.name}
                onChange={handleChange}
                title="Name with max 30 characters"
              />
            </div>

            <div className="inputfield__wrapper">
              <label htmlFor="inputEmailField" className="contact__label">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="inputEmailField"
                aria-label="Email input field"
                className="form__inputfield-email"
                placeholder="Write your Email"
                maxLength="40"
                required
                value={formData.email}
                onChange={handleChange}
                title="Email address with max 40 characters"
              />
            </div>

            <div className="inputfield__wrapper">
              <label htmlFor="inputMessageField" className="contact__label">
                Message*
              </label>
              <textarea
                name="message"
                id="inputMessageField"
                aria-label="Message input field"
                className="form__inputfield-message"
                maxLength="150"
                placeholder="Write your Message"
                required
                value={formData.message}
                onChange={handleChange}
                title="Text message with max 150 characters"
              ></textarea>
            </div>
            <div className="form__button-wrapper">
              <input
                type="reset"
                className="form__button reset__button"
                value="Clear"
                title="Clears all fields!"
                aria-label="clear form button"
                onClick={() =>
                  setFormData({ name: "", email: "", message: "" })
                }
              />
              <input
                type="submit"
                className={`form__button submit__button ${
                  !(formData.name && formData.email && formData.message)
                    ? "disabled"
                    : ""
                }`}
                value="Send"
                id="submitButton"
                title="Submits the form."
                aria-label="send message button"
                disabled={
                  !formData.name || !formData.email || !formData.message
                }
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contactform;
