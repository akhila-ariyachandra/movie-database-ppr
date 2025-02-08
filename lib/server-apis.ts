"use cache";

import { unstable_cacheLife as cacheLife } from "next/cache";
import "server-only";
import { z } from "zod";
import { api } from "./api";

export const getConfiguration = async () => {
  cacheLife("days");

  const response = await api.get("configuration").json();

  return await z
    .object({
      change_keys: z.array(z.string()),
      images: z.object({
        base_url: z.string(),
        secure_base_url: z.string(),
        backdrop_sizes: z.array(z.string()),
        logo_sizes: z.array(z.string()),
        poster_sizes: z.array(z.string()),
        profile_sizes: z.array(z.string()),
        still_sizes: z.array(z.string()),
      }),
    })
    .parseAsync(response);
};
