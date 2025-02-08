"use cache";

import { unstable_cacheLife as cacheLife } from "next/cache";
import "server-only";
import { api } from "./api";
import { configurationSchema } from "./schema";

export const getConfiguration = async () => {
  cacheLife("days");

  const response = await api.get("configuration").json();

  return await configurationSchema.parseAsync(response);
};
