import z from "zod"

export const createAuthorSchema = z.object({
    first_name: z.string().min(3),
    last_name: z.string().min(3),
    bio: z.string().min(10)
})

export const updateAuthorSchema = z.object({
    first_name: z.string().min(3),
    last_name: z.string().min(3),
    bio: z.string().min(10)
})