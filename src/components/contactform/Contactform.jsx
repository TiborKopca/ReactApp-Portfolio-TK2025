import React, { useState } from "react";
import "./contactform.scss";

function Contactform() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Submission status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // Checkbox for sending copy to sender
  const [sendCopyToSender, setSendCopyToSender] = useState(true); // Default: checked (send copy)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear any previous error messages when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Check which port we're on
      const currentPort = window.location.port;
      
      // If on Netlify Dev port (8888) or production, use relative path
      // If on direct Vite port (5173, 5176, etc), need full URL to functions
      let endpoint;
      
      if (currentPort === '8888' || !currentPort || window.location.hostname !== 'localhost') {
        // Netlify Dev proxy or production
        endpoint = '/.netlify/functions/send-email';
      } else {
        // Direct Vite access - point to Netlify Dev function port
        endpoint = 'http://localhost:8888/.netlify/functions/send-email';
      }
      
      console.log('Sending to:', endpoint);
      console.log('From URL:', window.location.href);
      console.log('Port:', currentPort);
      
      // Call Netlify Function
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sendCopyToSender: sendCopyToSender, // Include checkbox state
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        // Server returned an error
        setSubmitStatus('error');
        setErrorMessage(data.details || data.error || 'Failed to send message');
      }
    } catch (error) {
      // Network or other error
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSendCopyToSender(true); // Reset checkbox to checked
    setSubmitStatus(null);
    setErrorMessage("");
  };

  // Check if form is valid
  const isFormValid = formData.name && formData.email && formData.message;

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

      <div className="form__container">
        <span className="form__hint">* = required field</span>
        
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="response__message success">
            <h3 style={{ marginBottom: '1rem', color: 'var(--color7)' }}>
              ✓ Thank you for your message!
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              I will respond as soon as possible.
            </p>
            <button 
              onClick={() => setSubmitStatus(null)}
              className="retry__button submit__button"
              aria-label="send another message button"
            >
              Send Another
            </button>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="response__message error">
            <h3 style={{ marginBottom: '1rem', color: 'var(--color5)' }}>
              ✗ Message failed to send
            </h3>
            <p style={{ marginBottom: '0.5rem' }}>
              {errorMessage}
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.9em', opacity: 0.8 }}>
              Please try again or contact me through social platforms.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setSubmitStatus(null)}
                className="retry__button submit__button"
                aria-label="retry sending message button"
              >
                Try Again
              </button>
              <button 
                onClick={handleReset}
                className="form__button reset__button"
                style={{ width: '45%', minWidth: '120px', maxWidth: '200px' }}
                aria-label="clear form button"
              >
                Clear Form
              </button>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {submitStatus !== 'success' && submitStatus !== 'error' && (
          <form
            aria-label="contact form"
            className="contact__form"
            id="form1"
            autoComplete="on"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
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
                disabled={isSubmitting}
                title="Name with max 30 characters"
              />
            </div>

            {/* Email Field */}
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
                disabled={isSubmitting}
                title="Email address with max 40 characters"
              />
            </div>

            {/* Message Field */}
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
                disabled={isSubmitting}
                title="Text message with max 150 characters"
              ></textarea>
            </div>

            {/* Checkbox: Send copy to sender */}
            <div className="inputfield__wrapper checkbox__wrapper">
              <label 
                htmlFor="sendCopyCheckbox" 
                className="checkbox__label"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.95em',
                  userSelect: 'none'
                }}
              >
                <input
                  type="checkbox"
                  id="sendCopyCheckbox"
                  checked={sendCopyToSender}
                  onChange={(e) => setSendCopyToSender(e.target.checked)}
                  disabled={isSubmitting}
                  style={{
                    cursor: 'pointer',
                    width: '18px',
                    height: '18px',
                    accentColor: 'var(--color7)'
                  }}
                  aria-label="Send me a copy of this message"
                />
                <span>Send me a copy of this message</span>
              </label>
            </div>

            {/* Form Buttons */}
            <div className="form__button-wrapper">
              <input
                type="reset"
                className="form__button reset__button"
                value="Clear"
                title="Clears all fields!"
                aria-label="clear form button"
                onClick={handleReset}
                disabled={isSubmitting}
              />
              <input
                type="submit"
                className={`form__button submit__button ${
                  !isFormValid || isSubmitting ? "disabled" : ""
                }`}
                value={isSubmitting ? "Sending..." : "Send"}
                id="submitButton"
                title="Submits the form."
                aria-label="send message button"
                disabled={!isFormValid || isSubmitting}
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contactform;