/**
 * Admin Notification Email Template
 * Receives full contact inquiry details
 */

function adminNotification({ name, email, phone, company, subject, message, submittedAt }) {
  const timestamp = submittedAt
    ? new Date(submittedAt).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      })
    : new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      });

  const phoneDisplay = phone || "Not provided";
  const companyDisplay = company || "Not provided";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#001b34 0%,#003562 100%);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                AERON <span style="color:#00cfff;">STEELS</span>
              </h1>
              <p style="margin:8px 0 0;font-size:14px;color:#8be3ff;font-weight:400;">
                New Contact Inquiry
              </p>
            </td>
          </tr>

          <!-- Timestamp Badge -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <div style="background-color:#f0f7ff;border:1px solid #d4e6ff;border-radius:8px;padding:12px 16px;margin-top:-1px;text-align:center;">
                <p style="margin:0;font-size:13px;color:#2678be;font-weight:500;">
                  &#128197; Submitted on ${timestamp}
                </p>
              </div>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="background-color:#ffffff;padding:32px 40px 8px;">
              <h2 style="margin:0 0 20px;font-size:16px;font-weight:700;color:#191b1f;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e0e0e0;padding-bottom:12px;">
                Contact Details
              </h2>

              ${[
                { label: "Full Name", value: name },
                { label: "Email Address", value: email, href: `mailto:${email}` },
                { label: "Phone Number", value: phoneDisplay },
                { label: "Company", value: companyDisplay },
                { label: "Subject", value: subject },
              ]
                .map(
                  (item) => `
              <div style="display:flex;padding:10px 0;border-bottom:1px solid #f0f0f0;">
                <div style="width:140px;flex-shrink:0;">
                  <span style="font-size:13px;font-weight:600;color:#4c5f71;">${item.label}</span>
                </div>
                <div style="flex:1;">
                  ${
                    item.href
                      ? `<a href="${item.href}" style="font-size:14px;color:#2678be;text-decoration:none;font-weight:500;">${item.value}</a>`
                      : `<span style="font-size:14px;color:#191b1f;font-weight:500;">${item.value}</span>`
                  }
                </div>
              </div>`
                )
                .join("")}
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background-color:#ffffff;padding:24px 40px;">
              <h2 style="margin:0 0 12px;font-size:16px;font-weight:700;color:#191b1f;text-transform:uppercase;letter-spacing:0.5px;">
                Message
              </h2>
              <div style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:10px;padding:16px 20px;">
                <p style="margin:0;font-size:14px;color:#4c5f71;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#ffffff;padding:8px 40px 40px;text-align:center;">
              <a href="mailto:${email}"
                 style="display:inline-block;padding:12px 32px;background:linear-gradient(135deg,#2678be 0%,#00cfff 100%);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:50px;">
                &#9993; Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#001b34 0%,#003562 100%);border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#8be3ff;">
                Aeron Steels &mdash; Manufacturer &amp; Exporter of Premium Steel Strips
              </p>
              <p style="margin:4px 0 0;font-size:11px;color:#5a7a9a;">
                This is an automated notification from aeronsteels.com
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

export { adminNotification };
