import { z } from 'zod';

export const ProductZ = z.object({
  title: z.string().min(2).trim(),
  description: z.string().trim(),
  price: z.number().positive(),
  image: z.string().url().optional(),
  badge: z.enum(['New', 'Popular', 'Trending', 'Sale', 'Exclusive']).nullable().optional(),
  category: z.enum(['Men', 'Women', 'Unisex', 'Limited', 'Luxury', 'Smart', 'Classic']).optional(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, { message: 'Slug must be lowercase and hyphenated' }),
  discount: z.number().min(0).max(100).optional(),
});
