import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  rating: z.number(),
  discountPercentage: z.number(),
  brand: z
    .string()
    .nullable()
    .optional()
    .transform((value) => value ?? ""),
  thumbnail: z.string(),
  images: z.array(z.string()),
});
export type Product = z.infer<typeof productSchema>;

export const productsResponseSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
export type ProductsResponse = z.infer<typeof productsResponseSchema>;
