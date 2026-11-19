import { allowedInterests } from "@/lib/constants/helper-constants";
import { escapeHtml } from "@/lib/utils/escape-html";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://9xsolutions.vercel.app";
const LOGO_URL = `${SITE_URL}/images/logo.png`;
const COMPANY = "9X Solutions";

const C = {
  navy: "#0B1020",
  navySoft: "#141B33",
  red: "#ff0000",
  blue: "#4F66FF",
  periwinkle: "#8FA0FF",
  pink: "#ff6b6b",
  page: "#EEF1F8",
  card: "#ffffff",
  panel: "#F8FAFC",
  line: "#E5E7EB",
  ink: "#0F172A",
  body: "#475569",
  muted: "#64748B",
  faint: "#94A3B8",
};

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

/* ---------- Email building blocks (table layout + inline styles) ---------- */

function pill(text: string) {
  return `<span style="display:inline-block;padding:7px 14px;border-radius:999px;border:1px solid #2A3355;background:${C.navySoft};color:#CBD5E1;font-size:12px;font-weight:600;letter-spacing:0.04em;">
    <span style="color:${C.red};">&#9679;</span>&nbsp; ${text}
  </span>`;
}

function button(href: string, label: string, primary = true) {
  const bg = primary ? C.red : "#ffffff";
  const color = primary ? "#ffffff" : C.navy;
  const border = primary ? C.red : C.line;
  return `<a href="${href}" style="display:inline-block;padding:14px 28px;border-radius:999px;background:${bg};border:1px solid ${border};color:${color};font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;">${label}</a>`;
}

function detailRow(label: string, valueHtml: string) {
  return `<tr>
    <td style="padding:14px 0;border-bottom:1px solid ${C.line};width:110px;vertical-align:top;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${C.faint};">${label}</td>
    <td style="padding:14px 0;border-bottom:1px solid ${C.line};vertical-align:top;font-size:15px;font-weight:600;color:${C.ink};">${valueHtml}</td>
  </tr>`;
}

function chips(items: string[]) {
  return items
    .map(
      (i) =>
        `<span style="display:inline-block;margin:0 8px 8px 0;padding:8px 16px;border-radius:999px;background:#EEF1FF;border:1px solid #D9DFFF;color:${C.blue};font-size:13px;font-weight:600;">${escapeHtml(i)}</span>`,
    )
    .join("");
}

function sectionLabel(text: string) {
  return `<p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${C.faint};">${text}</p>`;
}

function shell(opts: {
  preheader: string;
  eyebrow: string;
  line1: string;
  line2: string;
  content: string;
  footerNote: string;
}) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light only" />
  <title>${opts.line1} ${opts.line2}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${opts.preheader}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.page}" style="background:${C.page};">
    <tr>
      <td align="center" style="padding:28px 12px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;font-family:${FONT};">

          <!-- Hero card -->
          <tr>
            <td bgcolor="${C.navy}" style="background:${C.navy};border-radius:28px 28px 0 0;padding:40px 36px 44px;">
              <img src="${LOGO_URL}" alt="${COMPANY}" width="140" style="display:block;width:140px;max-width:100%;height:auto;border:0;margin:0 0 36px;" />
              ${pill(opts.eyebrow)}
              <h1 style="margin:22px 0 0;font-family:${FONT};font-size:36px;line-height:1.08;font-weight:700;letter-spacing:-0.03em;color:#ffffff;">
                ${opts.line1}<br />
                <span style="color:${C.periwinkle};">${opts.line2}</span>
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td bgcolor="${C.card}" style="background:${C.card};padding:36px;border-left:1px solid ${C.line};border-right:1px solid ${C.line};">
              ${opts.content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="${C.navy}" style="background:${C.navy};border-radius:0 0 28px 28px;padding:28px 36px;text-align:center;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#ffffff;">${COMPANY}</p>
              <p style="margin:6px 0 0;font-size:12px;color:${C.faint};">Turning Ideas Into Digital Solutions.</p>
              <p style="margin:18px 0 0;font-size:12px;line-height:1.6;color:#64748B;">${opts.footerNote}</p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ---------- Route ---------- */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, message, phone, interests, website } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Required field validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    // Strip line breaks from anything that ends up in a header or subject
    const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

    const cleanName = oneLine(name);
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanCompany = typeof company === "string" ? oneLine(company) : "";
    const cleanMessage = message.trim();

    // Length validation
    if (
      cleanName.length > 120 ||
      cleanEmail.length > 254 ||
      cleanPhone.length > 30 ||
      cleanCompany.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        { error: "Some fields exceed the allowed length." },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Phone validation (international format friendly)
    const phoneRegex = /^\+?[0-9\s\-().]{7,30}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    const cleanInterests = Array.isArray(interests)
      ? interests.filter(
          (item): item is string =>
            typeof item === "string" && allowedInterests.includes(item),
        )
      : [];

    // SMTP configuration
    const requiredEnv = [
      "SMTP_HOST",
      "SMTP_USER",
      "SMTP_PASSWORD",
      "CONTACT_FROM",
      "CONTACT_TO",
    ];

    if (requiredEnv.some((key) => !process.env[key])) {
      console.error("Contact SMTP configuration is incomplete.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const secure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Escape user-provided content
    const safeName = escapeHtml(cleanName);
    const safeFirstName = escapeHtml(cleanName.split(" ")[0]);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeCompany = escapeHtml(cleanCompany || "Not provided");
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br>");
    const phoneHref = cleanPhone.replace(/[^+\d]/g, "");

    const interestsBlock = cleanInterests.length
      ? chips(cleanInterests)
      : `<span style="font-size:14px;color:${C.faint};">No services selected</span>`;

    /* ----- 1. Notification to your team ----- */

    const teamContent = `
      ${sectionLabel("Customer details")}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${C.line};">
        ${detailRow("Name", safeName)}
        ${detailRow("Email", `<a href="mailto:${safeEmail}" style="color:${C.blue};text-decoration:none;">${safeEmail}</a>`)}
        ${detailRow("Phone", `<a href="tel:${escapeHtml(phoneHref)}" style="color:${C.blue};text-decoration:none;">${safePhone}</a>`)}
        ${detailRow("Company", safeCompany)}
      </table>

      <div style="height:32px;line-height:32px;">&nbsp;</div>

      ${sectionLabel("Interested in")}
      <div>${interestsBlock}</div>

      <div style="height:24px;line-height:24px;">&nbsp;</div>

      ${sectionLabel("Project message")}
      <div style="background:${C.panel};border:1px solid ${C.line};border-left:4px solid ${C.red};border-radius:16px;padding:22px 24px;font-size:15px;line-height:1.75;color:${C.body};">
        ${safeMessage}
      </div>

      <div style="height:32px;line-height:32px;">&nbsp;</div>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right:10px;">${button(`mailto:${safeEmail}`, `Reply to ${safeFirstName}`)}</td>
          <td>${button(`tel:${escapeHtml(phoneHref)}`, "Call", false)}</td>
        </tr>
      </table>
    `;

    const teamHtml = shell({
      preheader: `${safeName} sent a new project inquiry.`,
      eyebrow: "New inquiry",
      line1: "Someone wants",
      line2: "to build with us.",
      content: teamContent,
      footerNote: `Submitted through the ${COMPANY} website.`,
    });

    const teamText = `
NEW PROJECT INQUIRY - ${COMPANY.toUpperCase()}

Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Company: ${cleanCompany || "Not provided"}

Interested Services:
${cleanInterests.join(", ") || "Not specified"}

Message:
${cleanMessage}
    `.trim();

    await transporter.sendMail({
      from: { name: `${COMPANY} Website`, address: process.env.CONTACT_FROM! },
      to: process.env.CONTACT_TO,
      replyTo: { name: cleanName, address: cleanEmail },
      subject: `New Project Inquiry - ${cleanName}`,
      text: teamText,
      html: teamHtml,
    });

    /* ----- 2. Confirmation to the customer ----- */
    // Failure here must not fail the request: the team email already went out.

    try {
      const step = (n: string, title: string, text: string, last = false) => `
        <tr>
          <td style="width:52px;vertical-align:top;padding:0 0 ${last ? 0 : 22}px;">
            <span style="display:inline-block;width:36px;height:36px;line-height:36px;border-radius:18px;background:${C.navy};color:${C.periwinkle};font-size:13px;font-weight:700;text-align:center;">${n}</span>
          </td>
          <td style="vertical-align:top;padding:0 0 ${last ? 0 : 22}px;">
            <p style="margin:0;font-size:16px;font-weight:700;color:${C.ink};">${title}</p>
            <p style="margin:4px 0 0;font-size:14px;line-height:1.6;color:${C.body};">${text}</p>
          </td>
        </tr>`;

      const customerContent = `
        <p style="margin:0;font-size:17px;line-height:1.7;color:${C.body};">
          Hi ${safeFirstName},
        </p>
        <p style="margin:14px 0 0;font-size:17px;line-height:1.7;color:${C.body};">
          Thanks for reaching out to ${COMPANY}. Your message is with our team,
          and we will reply by email to set up a short call to talk it through.
        </p>

        <div style="height:36px;line-height:36px;">&nbsp;</div>

        ${sectionLabel("What happens next")}
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${step("01", "We read your message", "Someone on the team goes through what you sent.")}
          ${step("02", "We get in touch", "We reply by email to set up a short call.")}
          ${step("03", "You get a clear plan", "We turn the conversation into next steps.", true)}
        </table>

        <div style="height:36px;line-height:36px;">&nbsp;</div>

        ${sectionLabel("What you told us")}
        <div style="background:${C.panel};border:1px solid ${C.line};border-radius:20px;padding:6px 24px 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${detailRow("Email", safeEmail)}
            ${detailRow("Phone", safePhone)}
            ${detailRow("Company", safeCompany)}
          </table>
          ${
            cleanInterests.length
              ? `<div style="padding-top:18px;">${interestsBlock}</div>`
              : ""
          }
        </div>

        <div style="height:36px;line-height:36px;">&nbsp;</div>

        <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:${C.body};">
          Need to add something? Just reply to this email.
        </p>
        ${button(SITE_URL, "Visit our website", false)}
      `;

      const customerHtml = shell({
        preheader: "We got your message and will reply by email soon.",
        eyebrow: "Message received",
        line1: `Thanks, ${safeFirstName}.`,
        line2: "We've got it.",
        content: customerContent,
        footerNote: `You are receiving this because you contacted ${COMPANY} through our website. If this wasn't you, you can ignore this email.`,
      });

      const customerText = `
Hi ${cleanName.split(" ")[0]},

Thanks for reaching out to ${COMPANY}. Your message is with our team, and we will reply by email to set up a short call to talk it through.

What happens next:
1. We read your message
2. We get in touch to set up a short call
3. You get a clear plan

Need to add something? Just reply to this email.

${COMPANY}
${SITE_URL}
      `.trim();

      await transporter.sendMail({
        from: { name: COMPANY, address: process.env.CONTACT_FROM! },
        to: { name: cleanName, address: cleanEmail },
        replyTo: process.env.CONTACT_TO,
        subject: `We got your message, ${cleanName.split(" ")[0]}`,
        text: customerText,
        html: customerHtml,
      });
    } catch (customerError) {
      console.error("Customer confirmation email failed:", customerError);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 500 },
    );
  }
}