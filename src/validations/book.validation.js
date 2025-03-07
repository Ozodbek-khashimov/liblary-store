import z from "zod"

export const createBookSchema = z.object({
    title: z.string().min(3),
    author_id: z.number().int(),
    category_id: z.number().int(),
    price: z.number().int(),
    quantity: z.number().int(),
    description: z.string().min(10)
})

export const updateBookSchema = z.object({
    title: z.string().min(3),
    author_id: z.number().int(),
    category_id: z.number().int(),
    price: z.number().int(),
    quantity: z.number().int(),
    description: z.string().min(10)
})