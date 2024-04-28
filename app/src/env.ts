import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    FIRESTORAGE_APIKEY: z.string(),
    FIRESTORAGE_AUTHDOMAIN: z.string(),
    FIRESTORAGE_PROJECTID: z.string(),
    FIRESTORAGE_STORAGEBUCKET: z.string(),
    FIRESTORAGE_MESSAGINGSENDERID: z.string(),
    FIRESTORAGE_APPID: z.string(),
    FIRESTORAGE_MEASUREMENTID: z.string(),
  },
  client: {
    NEXT_PUBLIC_APIBASEURL: z.string()
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    FIRESTORAGE_APIKEY: process.env.FIRESTORAGE_APIKEY,
    FIRESTORAGE_AUTHDOMAIN: process.env.FIRESTORAGE_AUTHDOMAIN,
    FIRESTORAGE_PROJECTID: process.env.FIRESTORAGE_PROJECTID,
    FIRESTORAGE_STORAGEBUCKET: process.env.FIRESTORAGE_STORAGEBUCKET,
    FIRESTORAGE_MESSAGINGSENDERID: process.env.FIRESTORAGE_MESSAGINGSENDERID,
    FIRESTORAGE_APPID: process.env.FIRESTORAGE_APPID,
    FIRESTORAGE_MEASUREMENTID: process.env.FIRESTORAGE_MEASUREMENTID,
    NEXT_PUBLIC_APIBASEURL: process.env.NEXT_PUBLIC_APIBASEURL
  },
  /**
   * skip env validation when running build or dev scripts by passing the SKIP_ENV_VALIDATION environment variable.
   *  e.g when running `npm run dev` write: `SKIP_ENV_VALIDATION=true npm run dev` in terminal instead.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * By setting emptyStringAsUndefined as true, environmental variables with blank string (e.g: SOME_ENV_VAR='')
   * will be considered as undefined. While running `build` or `dev` scripts it will throw an error
   * if environmental variables are blank
   */
  emptyStringAsUndefined: true,
});
