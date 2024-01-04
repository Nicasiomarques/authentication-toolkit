"use server";

import { formatZodError } from "../schemas/helpers";
import { LoginProps, LoginSchema } from "../schemas/login";
import { RegisterProps } from "../schemas/register";

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
  const validateFields = LoginSchema.safeParse(registerPayload);
  if (!validateFields.success) {
    return {
      error: "Invalid fields!",
      errors: formatZodError(validateFields.error.errors),
    };
  }

  console.log(registerPayload);
  return { success: "Email sent!" };
};
