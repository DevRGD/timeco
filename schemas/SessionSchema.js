import { z } from 'zod';

export const SessionZ = z.object({
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/),
  jti: z.string().uuid(),
  expiresAt: z.date(),
});
