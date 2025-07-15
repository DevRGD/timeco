import { Resend } from 'resend';
import { getEmailTemplateBySlug } from '@/actions/email';

const resend = new Resend(process.env.RESEND_API_KEY);

function renderTemplate(templateString, data = {}) {
  return templateString.replace(/{{(.*?)}}/g, (_, key) => {
    const value = data[key.trim()];
    return typeof value !== 'undefined' ? value : '';
  });
}

export async function sendEmail({ to, slug, data = {} }) {
  const template = await getEmailTemplateBySlug(slug);
  console.log({ slug, template });

  if (!template) throw new Error(`Email template not found for slug: ${slug}`);
  const subject = renderTemplate(template.subject, data);
  const html = renderTemplate(template.html, data);

  try {
    await resend.emails.send({
      from: 'no-reply@yourdomain.com',
      to,
      subject,
      html,
    });
  } catch (err) {
    console.error(`❌ Failed to send "${slug}" email to ${to}`, err);
    throw new Error('Email sending failed');
  }
}
