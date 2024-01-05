import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
/*
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./app/schemas/login";
import { getUserByEmail } from "@/lib/db";
import { users } from './lib/db/schemas';
*/
export default {
  providers: [
    GitHub({
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      clientId: process.env.GITHUB_CLIENT_ID
    }),
    Google({
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      clientId: process.env.GOOGLE_CLIENT_ID
    }),
    /*
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        if (!validateFields.success) return null;
        const { email, password } = validateFields.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password) null;
        const passwordMatch = await bcrypt.compare(password, user?.password as string);
        if (passwordMatch) return user as any

        return null;
      },
    }),
    */
  ],
} satisfies NextAuthConfig;
