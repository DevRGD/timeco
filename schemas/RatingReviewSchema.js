import { z } from 'zod';

export const RatingReviewZ = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  userId: z.string().min(1, 'User ID is required'),
  rating: z.number().min(1).max(5),
  review: z.string().trim().optional(),
});
