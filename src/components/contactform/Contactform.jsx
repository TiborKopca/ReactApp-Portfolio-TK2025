import React, {useState} from 'react';
import './contactform.scss';

function Contactform() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [status, setStatus] = useState(""); // Holds form submission status
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission (simulate PHP behavior)
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Replace with actual backend API endpoint
          const response = await fetch("sendmailPHPMailer.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setStatus("message_sent");
            setFormData({ name: "", email: "", message: "" }); // Reset form
          } else {
            setStatus("message_failed");
          }
        } catch (error) {
          setStatus("message_failed");
          console.error(error);
        }
      };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3 className="title">Contact</h3>
        <p>
          <i className="fa fa-envelope email"></i>
        </p>
        <p>
          <i className="fa fa-phone phone"></i>
        </p>
      </div>

      <div className="container">
        {status === "message_sent" ? (
          <h3>Thank you for the message, I will respond ASAP.</h3>
        ) : status === "message_failed" ? (
          <h3>Message failed. Please, contact me by an alternative way.</h3>
        ) : (
          <form
            className="formular"
            id="form1"
            autoComplete="on"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="inputNameField"
              className="inputNameField"
              placeholder="Name"
              maxLength="30"
              required
              value={formData.name}
              onChange={handleChange}
              title="Name with max 30 characters"
            />
            <input
              type="email"
              name="email"
              id="inputEmailField"
              className="inputEmailField"
              placeholder="Email"
              maxLength="40"
              required
              value={formData.email}
              onChange={handleChange}
              title="Email address with max 40 characters"
            />
            <textarea
              name="message"
              id="inputMessageField"
              className="inputMessageField"
              maxLength="150"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              title="Text message with max 150 characters"
            ></textarea>

            <input
              type="reset"
              className="button"
              value="Clear"
              title="Clears all fields!"
              onClick={() => setFormData({ name: "", email: "", message: "" })}
            />
            <input
              type="submit"
              className="submitButton"
              value="Send"
              id="submitButton"
              title="Submits the form."
              disabled={!formData.name || !formData.email || !formData.message}
            />
          </form>
        )}
      </div>
    </section>
  )
}

export default Contactform