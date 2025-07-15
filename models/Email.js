import mongoose from 'mongoose';

const EmailTemplateSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    html: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.EmailTemplate || mongoose.model('EmailTemplate', EmailTemplateSchema);
