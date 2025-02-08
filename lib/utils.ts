import { clsx, type ClassValue } from "clsx";
import slugifyBase from "slugify";
import { twMerge } from "tailwind-merge";
import type { ConfigurationSchema } from "./schema";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const slugify = (value: string) => {
  return slugifyBase(value, { lower: true, strict: true, trim: true });
};

type ImageType = "backdrop" | "logo" | "poster" | "profile" | "still";

export const getImageUrl = <T extends ImageType>(
  configuration: ConfigurationSchema,
  path: string,
  imageType: T,
  size: T extends "backdrop"
    ? ConfigurationSchema["images"]["backdrop_sizes"][number]
    : T extends "logo"
      ? ConfigurationSchema["images"]["logo_sizes"][number]
      : T extends "poster"
        ? ConfigurationSchema["images"]["poster_sizes"][number]
        : T extends "profile"
          ? ConfigurationSchema["images"]["profile_sizes"][number]
          : T extends "still"
            ? ConfigurationSchema["images"]["still_sizes"][number]
            : never,
) => {
  return `${configuration.images.secure_base_url}${size}${path}`;
};
