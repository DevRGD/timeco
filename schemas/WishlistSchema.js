import { z } from 'zod';

export const WishlistZ = z.object({
  userId: z.string().min(1),
  products: z.array(z.string().min(1)),
});
