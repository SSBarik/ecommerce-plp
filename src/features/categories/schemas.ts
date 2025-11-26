import { z } from "zod";

export const categoryListSchema = z.array(z.string());
export type CategoryList = z.infer<typeof categoryListSchema>;
