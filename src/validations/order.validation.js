import z from "zod";

export const createOrderSchema = z.object({
    user_id: z.number().int(),
    book_id: z.number().int(),
    quantity: z.number().int()
})

export const updateOrderSchema = z.object({
    user_id: z.number(),
    book_id: z.number().int(),
    order_date:z.date(),
    status:z.enum["Pending","Shipped","Completed"]
})