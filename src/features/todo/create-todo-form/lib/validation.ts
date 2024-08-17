import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string({ required_error: "Required" }).trim().min(5, {
    message: "Minimum length is 5 symbols",
  }),
});

export type CreateTodoDto = z.infer<typeof createTodoSchema>;
