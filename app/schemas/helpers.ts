import { ZodIssue } from "zod";

export const formatZodError = (errors: ZodIssue[]) => {
  return errors.reduce((acc: Record<string, any>, error) => {
    const path = error.path.join(".");
    acc[path] = error.message;
    return acc;
  }, {});
};
