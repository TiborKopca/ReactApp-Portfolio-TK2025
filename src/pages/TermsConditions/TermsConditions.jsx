import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../hooks/ThemeContext";
import "../shared/legal-pages.scss";

function TermsConditions() {
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
          <h1 className="legal-page__title">Terms and Conditions</h1>
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
            <h2 className="legal-section__title">1. Agreement to Terms</h2>
            <p className="legal-section__text">
              Welcome to tiborkopca.eu ("Website", "Service", "we", "us", or "our"). These Terms 
              and Conditions ("Terms") govern your access to and use of our website. By accessing 
              or using the Service, you agree to be bound by these Terms. If you disagree with 
              any part of the terms, you may not access the Service.
            </p>
          </section>

          {/* Definitions */}
          <section className="legal-section">
            <h2 className="legal-section__title">2. Definitions</h2>
            <ul className="legal-list">
              <li><strong>"Service"</strong> refers to the website tiborkopca.eu and all its content</li>
              <li><strong>"User", "You"</strong> means the individual accessing or using the Service</li>
              <li><strong>"Content"</strong> refers to all text, images, code, and materials on the website</li>
              <li><strong>"Personal Data"</strong> means information that identifies you personally</li>
            </ul>
          </section>

          {/* Use of Service */}
          <section className="legal-section">
            <h2 className="legal-section__title">3. Use of Service</h2>
            
            <h3 className="legal-subsection__title">3.1 Permitted Use</h3>
            <p className="legal-section__text">
              You may use the Service for lawful purposes only. You agree to:
            </p>
            <ul className="legal-list">
              <li>Use the website for personal, non-commercial purposes</li>
              <li>Provide accurate information in the contact form</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to gain unauthorized access to any part of the Service</li>
            </ul>

            <h3 className="legal-subsection__title">3.2 Prohibited Activities</h3>
            <p className="legal-section__text">
              You agree NOT to:
            </p>
            <ul className="legal-list">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Attempt to bypass rate limiting or security measures</li>
              <li>Scrape, spider, or harvest data from the website</li>
              <li>Send spam or unsolicited messages through the contact form</li>
              <li>Impersonate another person or entity</li>
              <li>Interfere with or disrupt the Service</li>
            </ul>
          </section>

          {/* Contact Form */}
          <section className="legal-section">
            <h2 className="legal-section__title">4. Contact Form Terms</h2>
            
            <h3 className="legal-subsection__title">4.1 Message Submission</h3>
            <p className="legal-section__text">
              When using our contact form:
            </p>
            <ul className="legal-list">
              <li>You must provide accurate and truthful information</li>
              <li>Messages are limited to 150 characters</li>
              <li>You are limited to 3 submissions per hour per IP address</li>
              <li>We reserve the right to not respond to abusive or spam messages</li>
            </ul>

            <h3 className="legal-subsection__title">4.2 Message Copy Feature</h3>
            <p className="legal-section__text">
              You may opt to receive a copy of your message via email. By checking this option:
            </p>
            <ul className="legal-list">
              <li>You consent to receiving an automated email confirmation</li>
              <li>The copy is sent for your records only</li>
              <li>We are not responsible for email delivery failures</li>
            </ul>

            <h3 className="legal-subsection__title">4.3 Response Time</h3>
            <p className="legal-section__text">
              We aim to respond to contact form inquiries within 48-72 hours. However, we do not 
              guarantee response times and are not obligated to respond to all messages.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="legal-section">
            <h2 className="legal-section__title">5. Intellectual Property Rights</h2>
            
            <h3 className="legal-subsection__title">5.1 Website Content</h3>
            <p className="legal-section__text">
              The Service and its original content, features, and functionality are owned by 
              Tibor Kopca and are protected by international copyright, trademark, patent, trade 
              secret, and other intellectual property laws.
            </p>

            <h3 className="legal-subsection__title">5.2 Your Rights</h3>
            <p className="legal-section__text">
              You may:
            </p>
            <ul className="legal-list">
              <li>View and browse the website</li>
              <li>Share links to our website</li>
              <li>Print pages for personal, non-commercial use</li>
            </ul>

            <h3 className="legal-subsection__title">5.3 Restrictions</h3>
            <p className="legal-section__text">
              You may NOT:
            </p>
            <ul className="legal-list">
              <li>Copy, modify, or distribute website content without permission</li>
              <li>Use content for commercial purposes</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Reverse engineer or decompile any part of the Service</li>
            </ul>
          </section>

          {/* External Links */}
          <section className="legal-section">
            <h2 className="legal-section__title">6. Links to Other Websites</h2>
            <p className="legal-section__text">
              Our Service may contain links to third-party websites or services (such as LinkedIn, 
              GitHub, Slack, WhatsApp, Discord, Instagram) that are not owned or controlled by us.
            </p>
            <p className="legal-section__text">
              We have no control over, and assume no responsibility for, the content, privacy 
              policies, or practices of any third-party websites or services. You acknowledge and 
              agree that we shall not be responsible or liable for any damage or loss caused by 
              use of such content or services.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="legal-section">
            <h2 className="legal-section__title">7. Disclaimer of Warranties</h2>
            <p className="legal-section__text">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no 
              warranties, expressed or implied, regarding:
            </p>
            <ul className="legal-list">
              <li>The accuracy, reliability, or completeness of content</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Security or absence of viruses</li>
              <li>Results from using the Service</li>
            </ul>
            <p className="legal-section__text">
              Your use of the Service is at your sole risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="legal-section">
            <h2 className="legal-section__title">8. Limitation of Liability</h2>
            <p className="legal-section__text">
              To the maximum extent permitted by law, Tibor Kopca shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but 
              not limited to:
            </p>
            <ul className="legal-list">
              <li>Loss of profits, data, or other intangible losses</li>
              <li>Unauthorized access to or use of our servers</li>
              <li>Interruption or cessation of transmission</li>
              <li>Bugs, viruses, or harmful components</li>
              <li>Errors or omissions in content</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="legal-section">
            <h2 className="legal-section__title">9. Indemnification</h2>
            <p className="legal-section__text">
              You agree to defend, indemnify, and hold harmless Tibor Kopca from any claims, 
              damages, liabilities, and expenses (including attorney's fees) arising from:
            </p>
            <ul className="legal-list">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content you submit through the contact form</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="legal-section">
            <h2 className="legal-section__title">10. Data Protection and Privacy</h2>
            <p className="legal-section__text">
              Your use of the Service is also governed by our Privacy Policy. Please review our 
              Privacy Policy to understand how we collect, use, and protect your personal data.
            </p>
            <p className="legal-section__text">
              By using the Service, you consent to our collection and use of personal data as 
              outlined in the Privacy Policy.
            </p>
          </section>

          {/* Cookie Policy */}
          <section className="legal-section">
            <h2 className="legal-section__title">11. Cookies and Local Storage</h2>
            <p className="legal-section__text">
              We use cookies and browser localStorage to improve your experience. By using the 
              Service, you consent to our use of cookies in accordance with our Privacy Policy.
            </p>
            <p className="legal-section__text">
              You may manage cookie preferences through your browser settings or our cookie 
              consent banner.
            </p>
          </section>

          {/* Geographic Restrictions */}
          <section className="legal-section">
            <h2 className="legal-section__title">12. Geographic Restrictions</h2>
            <p className="legal-section__text">
              The Service is hosted in the European Union and intended for users worldwide. 
              However, we make no claims that the Service is appropriate or available for use 
              in all locations.
            </p>
            <p className="legal-section__text">
              If you access the Service from locations where its content is illegal, you do so 
              at your own risk and are responsible for compliance with local laws.
            </p>
          </section>

          {/* Termination */}
          <section className="legal-section">
            <h2 className="legal-section__title">13. Termination</h2>
            <p className="legal-section__text">
              We reserve the right to terminate or suspend your access to the Service immediately, 
              without prior notice, for any reason, including but not limited to:
            </p>
            <ul className="legal-list">
              <li>Breach of these Terms</li>
              <li>Abusive or inappropriate behavior</li>
              <li>Violation of applicable laws</li>
              <li>Security concerns</li>
            </ul>
            <p className="legal-section__text">
              Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          {/* Governing Law */}
          <section className="legal-section">
            <h2 className="legal-section__title">14. Governing Law</h2>
            <p className="legal-section__text">
              These Terms shall be governed by and construed in accordance with the laws of 
              Slovakia and the European Union, without regard to its conflict of law provisions.
            </p>
            <p className="legal-section__text">
              Any disputes arising from these Terms or your use of the Service shall be subject 
              to the exclusive jurisdiction of the courts of Slovakia.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="legal-section">
            <h2 className="legal-section__title">15. Changes to Terms</h2>
            <p className="legal-section__text">
              We reserve the right to modify or replace these Terms at any time at our sole 
              discretion. We will provide notice of material changes by:
            </p>
            <ul className="legal-list">
              <li>Updating the "Last Updated" date at the top of this page</li>
              <li>Posting a notice on our website</li>
            </ul>
            <p className="legal-section__text">
              Your continued use of the Service after such changes constitutes acceptance of 
              the new Terms.
            </p>
          </section>

          {/* Severability */}
          <section className="legal-section">
            <h2 className="legal-section__title">16. Severability</h2>
            <p className="legal-section__text">
              If any provision of these Terms is held to be unenforceable or invalid, such 
              provision will be changed and interpreted to accomplish the objectives of such 
              provision to the greatest extent possible under applicable law, and the remaining 
              provisions will continue in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="legal-section">
            <h2 className="legal-section__title">17. Entire Agreement</h2>
            <p className="legal-section__text">
              These Terms, together with our Privacy Policy, constitute the entire agreement 
              between you and Tibor Kopca regarding the use of the Service and supersede all 
              prior agreements and understandings.
            </p>
          </section>

          {/* Contact Information */}
          <section className="legal-section legal-section--contact">
            <h2 className="legal-section__title">18. Contact Us</h2>
            <p className="legal-section__text">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Website:</strong> tiborkopca.eu</p>
              <p><strong>Method:</strong> Use the contact form on our website</p>
              <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
            <p className="legal-section__text" style={{ marginTop: '1rem' }}>
              By using tiborkopca.eu, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms and Conditions.
            </p>
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

export default TermsConditions;