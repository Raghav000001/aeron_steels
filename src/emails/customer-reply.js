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
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#001b34 0%,#003562 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                AERON <span style="color:#00cfff;">STEELS</span>
              </h1>
              <p style="margin:6px 0 0;font-size:14px;color:#8be3ff;font-weight:400;">
                Precision Steel Solutions, Worldwide
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;">
              <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#191b1f;">
                Thank You, ${name}!
              </h2>
              <p style="margin:0 0 20px;font-size:15px;color:#4c5f71;line-height:1.6;">
                We have received your inquiry regarding <strong style="color:#191b1f;">&ldquo;${subject}&rdquo;</strong> and appreciate your interest in Aeron Steels.
              </p>

              <div style="background-color:#f0f7ff;border:1px solid #d4e6ff;border-radius:10px;padding:20px 24px;margin:24px 0;">
                <h3 style="margin:0 0 12px;font-size:14px;font-weight:700;color:#2678be;text-transform:uppercase;letter-spacing:0.5px;">
                  &#9989; What Happens Next?
                </h3>
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#4c5f71;vertical-align:top;width:28px;">1.</td>
                    <td style="padding:6px 0;font-size:14px;color:#4c5f71;">Our team reviews your inquiry within <strong style="color:#191b1f;">1&ndash;2 business hours</strong>.</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#4c5f71;vertical-align:top;width:28px;">2.</td>
                    <td style="padding:6px 0;font-size:14px;color:#4c5f71;">A dedicated representative will reach out to you at the provided email or phone.</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#4c5f71;vertical-align:top;width:28px;">3.</td>
                    <td style="padding:6px 0;font-size:14px;color:#4c5f71;">We provide a detailed response with pricing, specifications, and next steps.</td>
                  </tr>
                </table>
              </div>

              <div style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:10px;padding:20px 24px;margin:24px 0;">
                <h3 style="margin:0 0 10px;font-size:14px;font-weight:700;color:#191b1f;">
                  Need Immediate Assistance?
                </h3>
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                  <tr>
                    <td style="padding:4px 0;font-size:13px;color:#4c5f71;">
                      <strong style="color:#191b1f;">Phone:</strong>&nbsp;
                      <a href="tel:+919818223471" style="color:#2678be;text-decoration:none;">+91 98182 23471</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:13px;color:#4c5f71;">
                      <strong style="color:#191b1f;">Email:</strong>&nbsp;
                      <a href="mailto:sales@aeronsteels.com" style="color:#2678be;text-decoration:none;">sales@aeronsteels.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:13px;color:#4c5f71;">
                      <strong style="color:#191b1f;">Hours:</strong>&nbsp; Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM (IST)
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin:24px 0 0;font-size:14px;color:#4c5f71;line-height:1.6;">
                We look forward to serving you with the highest quality steel products and exceptional customer service.
              </p>
              <p style="margin:8px 0 0;font-size:14px;color:#4c5f71;line-height:1.6;">
                Best regards,<br />
                <strong style="color:#191b1f;">The Aeron Steels Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#001b34 0%,#003562 100%);border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#8be3ff;">
                Aeron Steels &mdash; Manufacturer &amp; Exporter of Premium Steel Strips
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#5a7a9a;">
                India &bull; UAE &bull; USA &bull; Germany &bull; Japan
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#5a7a9a;">
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
