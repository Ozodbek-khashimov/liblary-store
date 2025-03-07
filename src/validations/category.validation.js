import z from "zod";

export const createCategorySchema = z.object({
	categoryName: z.string().min(3),
	description: z.string().min(3),
});


export const updateCategorySchema = z.object({
    categoryName: z.string().min(3),
    description: z.string().min(3),
});