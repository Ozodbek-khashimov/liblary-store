import z from "zod"

export const createbookAuthorSchema = z.object({
    book_id: z.number().int(),
    author_id: z.number().int()
})
