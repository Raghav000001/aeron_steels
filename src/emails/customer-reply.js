/**
 * Customer Auto-Reply Email Template
 * Sent as confirmation when a customer submits a contact inquiry
 */

function customerReply({ name, subject }) {
  const year = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting Aeron Steels</title>
</head>
<body style="margin:0;padding:0;background-color:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#050505;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                AERON <span style="color:#ef4444;">STEELS</span>
              </h1>
              <p style="margin:6px 0 0;font-size:14px;color:#a1a1aa;font-weight:400;">
                Precision Steel Solutions, Worldwide
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#141414;padding:40px;">
              <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#fafafa;">
                Thank You, ${name}!
              </h2>
              <p style="margin:0 0 20px;font-size:15px;color:#a1a1aa;line-height:1.6;">
                We have received your inquiry regarding <strong style="color:#fafafa;">&ldquo;${subject}&rdquo;</strong> and appreciate your interest in Aeron Steels.
              </p>

              <div style="background-color:#141414;border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:20px 24px;margin:24px 0;">
                <h3 style="margin:0 0 12px;font-size:14px;font-weight:700;color:#ef4444;text-transform:uppercase;letter-spacing:0.5px;">
                  &#9989; What Happens Next?
                </h3>
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#a1a1aa;vertical-align:top;width:28px;">1.</td>
                    <td style="padding:6px 0;font-size:14px;color:#a1a1aa;">Our team reviews your inquiry within <strong style="color:#fafafa;">1&ndash;2 business hours</strong>.</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#a1a1aa;vertical-align:top;width:28px;">2.</td>
                    <td style="padding:6px 0;font-size:14px;color:#a1a1aa;">A dedicated representative will reach out to you at the provided email or phone.</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#a1a1aa;vertical-align:top;width:28px;">3.</td>
                    <td style="padding:6px 0;font-size:14px;color:#a1a1aa;">We provide a detailed response with pricing, specifications, and next steps.</td>
                  </tr>
                </table>
              </div>

              <div style="background-color:#1a1a1a;border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:20px 24px;margin:24px 0;">
                <h3 style="margin:0 0 10px;font-size:14px;font-weight:700;color:#fafafa;">
                  Need Immediate Assistance?
                </h3>
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                  <tr>
                    <td style="padding:4px 0;font-size:13px;color:#a1a1aa;">
                      <strong style="color:#fafafa;">Phone:</strong>&nbsp;
                      <a href="tel:+919818223471" style="color:#ef4444;text-decoration:none;">+91 98182 23471</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:13px;color:#a1a1aa;">
                      <strong style="color:#fafafa;">Email:</strong>&nbsp;
                      <a href="mailto:sales@aeronsteels.com" style="color:#ef4444;text-decoration:none;">sales@aeronsteels.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:13px;color:#a1a1aa;">
                      <strong style="color:#fafafa;">Hours:</strong>&nbsp; Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM (IST)
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin:24px 0 0;font-size:14px;color:#a1a1aa;line-height:1.6;">
                We look forward to serving you with the highest quality steel products and exceptional customer service.
              </p>
              <p style="margin:8px 0 0;font-size:14px;color:#a1a1aa;line-height:1.6;">
                Best regards,<br />
                <strong style="color:#fafafa;">The Aeron Steels Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 100%);border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">
                Aeron Steels &mdash; Manufacturer &amp; Exporter of Premium Steel Strips
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#52525b;">
                India &bull; UAE &bull; USA &bull; Germany &bull; Japan
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#52525b;">
                &copy; ${year} Aeron Steels. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export { customerReply };
