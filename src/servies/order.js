import pool from "../config/db.js";

export async function createOrder(order) {
    const query=`INSERT INTO Orders (order_id,customer_id,order_date,status)
    VALUES ($1,$2,$3,$4)
    RETURNING *;`

    const values=[
        order.order_id,
        order.customer_id,
        order.order_date,
        order.status
    ]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
		console.error("Error fetching customer by ID:", error);
    }
}

export async function getAllOrder() {
    const query=`SELECT * FROM Orders;`

    try {
        const result=await pool.query(query)
        return result.rows
    } catch (error) {
        console.error("Error creating user:", error); 
    }
}

export async function getOrderById(userId) {
    const query=`SELECT * FROM Orders WHERE ID=$1`
    const values=[userId]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error 
    }
}

export async function updateOrder(order_id,customer_id,order_date,status) {
    const query=`ISERT INTO Orders (order_id,customer_id,order_date,status)
    VALUES ($1,$2,$3,$4)
    RETURNING *`

    const values=[customer_id,order_date,status]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error creating user:", error);
		throw error;
    }
}

export async function deleteOrder(userId) {
    const query=`DELETE FROM Orders WHERE id=$1`

    const values=[userId]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error creating user:", error);
		throw error;
    }
}