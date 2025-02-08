import { z } from "zod";

export const configurationSchema = z.object({
  change_keys: z.array(z.string()),
  images: z.object({
    base_url: z.string(),
    secure_base_url: z.string(),
    backdrop_sizes: z.tuple([
      z.literal("w300"),
      z.literal("w780"),
      z.literal("w1280"),
      z.literal("original"),
    ]),
    logo_sizes: z.tuple([
      z.literal("w45"),
      z.literal("w92"),
      z.literal("w154"),
      z.literal("w185"),
      z.literal("w300"),
      z.literal("w500"),
      z.literal("original"),
    ]),
    poster_sizes: z.tuple([
      z.literal("w92"),
      z.literal("w154"),
      z.literal("w185"),
      z.literal("w342"),
      z.literal("w500"),
      z.literal("w780"),
      z.literal("original"),
    ]),
    profile_sizes: z.tuple([
      z.literal("w45"),
      z.literal("w185"),
      z.literal("h632"),
      z.literal("original"),
    ]),
    still_sizes: z.tuple([
      z.literal("w92"),
      z.literal("w185"),
      z.literal("w300"),
      z.literal("original"),
    ]),
  }),
});
export type ConfigurationSchema = z.infer<typeof configurationSchema>;
