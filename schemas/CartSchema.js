import { z } from 'zod';

export const CartItemZ = z.object({
  productId: z.string().min(1),
  quantity: z.number().min(1).default(1),
});

export const CartZ = z.object({
  userId: z.string().min(1),
  items: z.array(CartItemZ),
});
