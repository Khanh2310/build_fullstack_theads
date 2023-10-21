import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3, { message: "Minium 3 character" }),
  accountId: z.string(),
});
