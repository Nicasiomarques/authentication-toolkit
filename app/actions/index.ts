"use server";

import bcrypt from "bcryptjs";
import { addUser, getUserByEmail } from "@/lib/db";
import { formatZodError } from "../schemas/helpers";
import { LoginProps, LoginSchema } from "../schemas/login";
import { RegisterProps, RegisterSchema } from "../schemas/register";

export const login = async (credentials: LoginProps) => {
  const validateFields = LoginSchema.safeParse(credentials);
  if (!validateFields.success) {
    return {
      error: "Invalid fields!",
      errors: formatZodError(validateFields.error.errors),
    };
  }

  console.log(credentials);
  return { success: "Email sent!" };
};

export const register = async (registerPayload: RegisterProps) => {
  const validateFields = RegisterSchema.safeParse(registerPayload);
  if (!validateFields.success) {
    return {
      error: "Invalid fields!",
      errors: formatZodError(validateFields.error.errors),
    };
  }
  const newUser = validateFields.data;

  const existingUser = await getUserByEmail(newUser.email);
  if (existingUser) return { error: "Email already exists!" };
  newUser.password = await bcrypt.hash(newUser.password, 8);
  await addUser(newUser);

  // TODO: Send email verification

  return { success: "Account created!" };
};
