import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schemas";
import { users } from "./schemas";

const pgConnection = new Pool({ connectionString: process.env.PG_CONNECTION });
export const db = drizzle(pgConnection, { schema });

export const getUserByEmail = (email: string) =>
  db.query.users.findFirst({
    where: eq(users.email, email),
  });

export const addUser = async (newUser: typeof users.$inferInsert) =>
  db.insert(users).values(newUser);
