import * as z from 'zod'

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required!",
  }),
});

export type RegisterProps = z.infer<typeof RegisterSchema>
