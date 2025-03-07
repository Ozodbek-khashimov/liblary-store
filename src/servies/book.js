// src/models/userModel.js
import pool from "../config/db.js";

export async function getBookById(userId) {
	const query = "SELECT * FROM books WHERE id = $1";
	const values = [userId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching user by ID:", error);
		throw error;
	}
}

export async function createBook(book) {
	const query = `
    INSERT INTO books (title, publication_year,isbn,price,category_id,stock_quantity)
    VALUES ($1, $2,$3,$4,$5,$6)
    RETURNING *;
  `;
	const values = [
		book.title,
		book.publication_year,
		book.isbn,
		book.price,
		book.category_id,
		book.stock_quantity
	];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}

export async function getAllBook() {
	const query = `
 				SELECT * FROM books;
  `;

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}


export async function updateBook(title, publication_year,isbn,price,stock_quantity) {
	const query=`
	INSERT INTO books(title, publication_year,isbn,price,stock_quantity)
	VALUES ($1,$2,$3,$4,$5)
	RETURNING *`

	const values=[title, publication_year,isbn,price,stock_quantity]

	try {
		const result=await pool.query(query,values)
		return result.rows[0]
	} catch (error) {
		console.error("Error creating book:", error);
        throw error;
	}
}


export async function deleteBook(BookId) {
	const query=`SELECT * FROM books WHERE book_id = $1 `

	const values=[BookId]

	try {
		const result=await pool.query(query,values)
		return result.rows[0]
	} catch (error) {
		console.error("Error creating book:", error);
        throw error;
	}
}