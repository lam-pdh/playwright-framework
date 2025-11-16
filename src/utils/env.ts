import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const EnvSchema = z.object({
  BASE_URL: z.string().url().default('https://pw-practice-dev.playwrightvn.com'),
  APP_USERNAME: z.string().min(1, 'APP_USERNAME is required'),
  APP_PASSWORD: z.string().min(1, 'APP_PASSWORD is required')
});

export type Env = z.infer<typeof EnvSchema>;

export const env: Env = EnvSchema.parse({
  BASE_URL: process.env.BASE_URL,
  APP_USERNAME: process.env.APP_USERNAME,
  APP_PASSWORD: process.env.APP_PASSWORD
});
