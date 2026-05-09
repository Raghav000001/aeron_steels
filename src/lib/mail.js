import nodemailer from "nodemailer";

/**
 * Creates and returns a reusable nodemailer transport.
 * Uses SMTP configuration from environment variables.
 */
function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP configuration. Ensure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS are set."
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

/**
 * Sends an email.
 *
 * @param {object} options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} options.html - HTML email body
 * @param {string} [options.from] - Sender address (defaults to SMTP_USER)
 * @returns {Promise<object>} Nodemailer send result
 */
async function sendMail({ to, subject, html, from }) {
  const transport = createTransport();
  const sender = from || process.env.SMTP_USER;

  try {
    const info = await transport.sendMail({
      from: `"Aeron Steels" <${sender}>`,
      to,
      subject,
      html,
    });

    transport.close();
    return info;
  } catch (error) {
    transport.close();
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

export { sendMail, createTransport };
