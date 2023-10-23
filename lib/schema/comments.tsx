import * as z from 'zod';

export const CommentsValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minium 3 character' }),
});
