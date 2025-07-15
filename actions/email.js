import db from '@/libs/db';
import Email from '@/models/Email';

function serializeEmailTemplate(template) {
  if (!template) return null;

  return {
    ...template,
    _id: template._id ? template._id.toString() : null,
    createdAt: template.createdAt ? template.createdAt.toISOString() : null,
    updatedAt: template.updatedAt ? template.updatedAt.toISOString() : null,
  };
}

/* ────────────── GET ALL ────────────── */
export async function getAllEmailTemplates() {
  await db();
  const templates = await Email.find().sort({ updatedAt: -1 }).lean();
  return templates.map(serializeEmailTemplate);
}

/* ────────────── GET ONE BY SLUG ────────────── */
export async function getEmailTemplateBySlug(slug) {
  await db();
  const template = await Email.findOne({ slug }).lean();
  return serializeEmailTemplate(template);
}

/* ────────────── CREATE ────────────── */
export async function createEmailTemplate(formData) {
  await db();

  const input = {
    slug: formData.get('slug'),
    subject: formData.get('subject'),
    html: formData.get('html'),
    description: formData.get('description') || '',
  };

  const parsed = EmailTemplateZ.safeParse(input);
  if (!parsed.success) {
    throw new Error(parsed.error.errors.map((e) => e.message).join(', '));
  }

  if (parsed.data.slug === 'new') {
    throw new Error(`The slug "new" is reserved and cannot be used for a template.`);
  }

  const exists = await Email.findOne({ slug: parsed.data.slug });
  if (exists) throw new Error(`Email template "${parsed.data.slug}" already exists`);

  const created = await Email.create(parsed.data);
  return serializeEmailTemplate(created.toObject());
}

/* ────────────── UPDATE ────────────── */
export async function updateEmailTemplate(slug, formData) {
  await db();

  const input = {
    subject: formData.get('subject'),
    html: formData.get('html'),
    description: formData.get('description') || '',
  };

  const parsed = EmailTemplateUpdateZ.safeParse(input);
  if (!parsed.success) {
    throw new Error(parsed.error.errors.map((e) => e.message).join(', '));
  }

  const updateData = parsed.data;

  const updated = await Email.findOneAndUpdate({ slug }, updateData, { new: true }).lean();
  if (!updated) throw new Error(`Email template "${slug}" not found`);
  return serializeEmailTemplate(updated);
}

/* ────────────── DELETE ────────────── */
export async function deleteEmailTemplate(slug) {
  await db();
  const deleted = await Email.findOneAndDelete({ slug });
  if (!deleted) throw new Error(`Email template "${slug}" not found`);
  return { success: true };
}
