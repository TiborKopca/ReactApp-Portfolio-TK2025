import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../hooks/ThemeContext";
import "../shared/legal-pages.scss";

function PrivacyPolicy() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className={`legal-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="legal-page__container">
        {/* Back Button */}
        <button 
          className="legal-page__back-button"
          onClick={handleBack}
          aria-label="Go back"
        >
          <span className="back-button__arrow">←</span>
          <span className="back-button__text">Back</span>
        </button>

        {/* Header */}
        <header className="legal-page__header">
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__subtitle">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </header>

        {/* Content */}
        <div className="legal-page__content">
          
          {/* Introduction */}
          <section className="legal-section">
            <h2 className="legal-section__title">1. Introduction</h2>
            <p className="legal-section__text">
              Welcome to tiborkopca.eu ("Website"). This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website. Please 
              read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="legal-section">
            <h2 className="legal-section__title">2. Information We Collect</h2>
            
            <h3 className="legal-subsection__title">2.1 Personal Data</h3>
            <p className="legal-section__text">
              When you use our contact form, we collect:
            </p>
            <ul className="legal-list">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Message content</li>
              <li>Timestamp of submission</li>
            </ul>

            <h3 className="legal-subsection__title">2.2 Automatically Collected Information</h3>
            <p className="legal-section__text">
              When you visit our website, we automatically collect:
            </p>
            <ul className="legal-list">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized for rate limiting)</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>

            <h3 className="legal-subsection__title">2.3 Cookies and Local Storage</h3>
            <p className="legal-section__text">
              We use cookies and browser localStorage to:
            </p>
            <ul className="legal-list">
              <li>Remember your cookie consent preferences</li>
              <li>Enhance user experience</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="legal-section">
            <h2 className="legal-section__title">3. How We Use Your Information</h2>
            <p className="legal-section__text">
              We use the information we collect to:
            </p>
            <ul className="legal-list">
              <li>Respond to your contact form inquiries</li>
              <li>Send you a confirmation copy of your message (if requested)</li>
              <li>Improve website functionality and user experience</li>
              <li>Prevent spam and abuse through rate limiting</li>
              <li>Analyze website performance and visitor behavior</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="legal-section">
            <h2 className="legal-section__title">4. Data Retention</h2>
            <p className="legal-section__text">
              We retain your personal data for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required 
              or permitted by law.
            </p>
            <ul className="legal-list">
              <li><strong>Contact Form Data:</strong> Retained for up to 2 years or until resolution of your inquiry</li>
              <li><strong>Cookie Consent:</strong> Stored for 1 year</li>
              <li><strong>Analytics Data:</strong> Anonymized and retained for statistical purposes</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="legal-section">
            <h2 className="legal-section__title">5. Third-Party Services</h2>
            <p className="legal-section__text">
              We use the following third-party services:
            </p>
            
            <div className="service-card">
              <h4>Resend (Email Service)</h4>
              <p>Used for sending and receiving contact form messages.</p>
              <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                View Resend Privacy Policy →
              </a>
            </div>

            <div className="service-card">
              <h4>Netlify (Hosting & Functions)</h4>
              <p>Hosts our website and serverless functions.</p>
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                View Netlify Privacy Policy →
              </a>
            </div>

            <p className="legal-section__text" style={{ marginTop: '1rem' }}>
              These services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          {/* Data Security */}
          <section className="legal-section">
            <h2 className="legal-section__title">6. Data Security</h2>
            <p className="legal-section__text">
              We implement appropriate technical and organizational security measures to protect 
              your personal data, including:
            </p>
            <ul className="legal-list">
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure serverless functions with environment variable protection</li>
              <li>Input validation and sanitization to prevent XSS attacks</li>
              <li>Rate limiting to prevent spam and abuse (3 submissions per hour per IP)</li>
              <li>Regular security updates and monitoring</li>
            </ul>
            <p className="legal-section__text">
              However, no method of transmission over the Internet is 100% secure. While we 
              strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="legal-section">
            <h2 className="legal-section__title">7. Your Data Rights (GDPR)</h2>
            <p className="legal-section__text">
              If you are a resident of the European Economic Area (EEA), you have certain 
              data protection rights:
            </p>
            <ul className="legal-list">
              <li><strong>Right to Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation on data use</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="legal-section__text">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          {/* Cookies Management */}
          <section className="legal-section">
            <h2 className="legal-section__title">8. Managing Cookies</h2>
            <p className="legal-section__text">
              You can control and manage cookies in several ways:
            </p>
            <ul className="legal-list">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing ones</li>
              <li><strong>localStorage:</strong> Clear your browser's localStorage to remove stored preferences</li>
              <li><strong>Our Banner:</strong> You can decline cookies when our consent banner appears</li>
            </ul>
            <p className="legal-section__text">
              Note that disabling cookies may affect website functionality.
            </p>
          </section>

          {/* International Users */}
          <section className="legal-section">
            <h2 className="legal-section__title">9. International Data Transfers</h2>
            <p className="legal-section__text">
              Your information may be transferred to and processed in countries other than your 
              country of residence. These countries may have data protection laws different from 
              your country. By using our website, you consent to such transfers.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="legal-section">
            <h2 className="legal-section__title">10. Children's Privacy</h2>
            <p className="legal-section__text">
              Our website is not intended for children under 16 years of age. We do not knowingly 
              collect personal information from children. If you believe we have collected 
              information from a child, please contact us immediately.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="legal-section">
            <h2 className="legal-section__title">11. Changes to This Privacy Policy</h2>
            <p className="legal-section__text">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last Updated" 
              date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="legal-section legal-section--contact">
            <h2 className="legal-section__title">12. Contact Us</h2>
            <p className="legal-section__text">
              If you have any questions about this Privacy Policy or wish to exercise your data 
              rights, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Website:</strong> tiborkopca.eu</p>
              <p><strong>Method:</strong> Use the contact form on our website</p>
              <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </section>
        </div>

        {/* Footer Back Button */}
        <div className="legal-page__footer">
          <button 
            className="legal-page__back-button"
            onClick={handleBack}
            aria-label="Go back"
          >
            <span className="back-button__arrow">←</span>
            <span className="back-button__text">Back to Website</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
