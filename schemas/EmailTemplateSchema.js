import { z } from 'zod';

export const EmailTemplateZ = z.object({
  slug: z.string().min(1, 'Slug is required'),
  subject: z.string().min(1, 'Subject is required'),
  html: z.string().min(1, 'HTML content is required'),
  description: z.string().optional(),
});
