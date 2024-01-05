import type { Config } from "drizzle-kit";
import { loadEnvConfig } from '@next/env';

loadEnvConfig('./');

export default {
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.PG_CONNECTION ?? ''
  },
  schema: "./lib/db/schemas/*schema.ts",
  out: "./lib/db/migrations",
  verbose: true,
  strict: true,
} satisfies Config;
