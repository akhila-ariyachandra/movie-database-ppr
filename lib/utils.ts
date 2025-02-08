import { clsx, type ClassValue } from "clsx";
import slugifyBase from "slugify";
import { twMerge } from "tailwind-merge";
import type { getConfiguration } from "./server-apis";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const slugify = (value: string) => {
  return slugifyBase(value, { lower: true, strict: true, trim: true });
};

export const getImageUrl = (
  configuration: Awaited<ReturnType<typeof getConfiguration>>,
  path: string,
  size: string,
) => {
  return `${configuration.images.secure_base_url}${size}${path}`;
};
