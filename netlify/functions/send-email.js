// @ts-nocheck
/* eslint-disable */
const { Resend } = require('resend');

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting configuration (prevents spam)
const submissions = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_SUBMISSIONS_PER_WINDOW = 3; // Max 3 emails per hour per IP

/**
 * Rate limiting function
 * Tracks submissions by IP address to prevent spam
 */
function checkRateLimit(ip) {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];
  
  // Remove old submissions outside the time window
  const recentSubmissions = userSubmissions.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }
  
  // Add current submission
  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);
  
  return true; // Within rate limit
}

/**
 * Sanitize user input to prevent XSS attacks
 */
function sanitizeInput(input) {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim();
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Main handler function for the Netlify serverless function
 */
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const { name, email, message, sendCopyToSender } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          details: 'Name, email, and message are required'
        }),
      };
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Invalid email format'
        }),
      };
    }

    // Check rate limiting
    const clientIp = event.headers['x-forwarded-for'] || 
                     event.headers['client-ip'] || 
                     'unknown';
    
    if (!checkRateLimit(clientIp)) {
      return {
        statusCode: 429,
        body: JSON.stringify({ 
          error: 'Rate limit exceeded',
          details: 'Maximum 3 submissions per hour. Please try again later.'
        }),
      };
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Validate length constraints
    if (sanitizedName.length > 30 || sanitizedEmail.length > 40 || sanitizedMessage.length > 150) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Input too long',
          details: 'Name (max 30), Email (max 40), Message (max 150)'
        }),
      };
    }

    // Send email via Resend to you (the recipient)
    const mainEmailData = await resend.emails.send({
      from: 'Contact Form - tiborkopca.eu <noreply@tiborkopca.eu>', // Your custom domain
      to: process.env.RECIPIENT_EMAIL, // Your email from environment variable
      replyTo: sanitizedEmail, // Allow direct reply to sender
      subject: `Portfolio Contact: ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #4F46E5;">From:</strong> ${sanitizedName}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #4F46E5;">Email:</strong> 
              <a href="mailto:${sanitizedEmail}" style="color: #2563eb;">${sanitizedEmail}</a>
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px; line-height: 1.6;">
              ${sanitizedMessage}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
Sent: ${new Date().toLocaleString()}
      `
    });

    // Log main email success
    console.log('Main email sent successfully:', mainEmailData.id);

    // Send copy to sender if checkbox was checked
    if (sendCopyToSender === true) {
      try {
        const copyEmailData = await resend.emails.send({
          from: 'Contact Form - tiborkopca.eu <noreply@tiborkopca.eu>',
          to: sanitizedEmail, // Send to the person who filled the form
          subject: `Copy of your message to Tibor Kopca`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                Copy of Your Message
              </h2>
              
              <p style="color: #555; margin: 20px 0;">
                Hi ${sanitizedName},
              </p>
              
              <p style="color: #555; margin: 20px 0;">
                Thank you for contacting me! This is a copy of the message you sent through my portfolio contact form.
              </p>
              
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 10px;">Your Message:</h3>
                <p style="background-color: #fff; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px; line-height: 1.6;">
                  ${sanitizedMessage}
                </p>
              </div>
              
              <p style="color: #555; margin: 20px 0;">
                I'll get back to you as soon as possible!
              </p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              
              <p style="color: #6b7280; font-size: 12px; text-align: center;">
                Sent from tiborkopca.eu at ${new Date().toLocaleString()}
              </p>
              
              <p style="color: #6b7280; font-size: 11px; text-align: center; margin-top: 10px;">
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </div>
          `,
          text: `
Hi ${sanitizedName},

Thank you for contacting me! This is a copy of the message you sent through my portfolio contact form.

Your Message:
${sanitizedMessage}

I'll get back to you as soon as possible!

---
Sent from tiborkopca.eu at ${new Date().toLocaleString()}

This is an automated confirmation. Please do not reply to this email.
          `
        });
        
        console.log('Copy email sent to sender:', copyEmailData.id);
      } catch (copyError) {
        // Log error but don't fail the main request
        // The important email (to you) already succeeded
        console.error('Failed to send copy to sender:', copyError);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Email sent successfully',
        emailId: mainEmailData.id,
        copySent: sendCopyToSender === true
      }),
    };

  } catch (error) {
    // Log error for debugging
    console.error('Error sending email:', error);

    // Return appropriate error response
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      }),
    };
  }
};