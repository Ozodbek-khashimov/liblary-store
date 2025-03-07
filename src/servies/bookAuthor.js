import pool from "../config/db.js";

export async function createBookAuthor(BookAuthor) {
    const query=`INSERT INTO book_author (book_id,author_id)
    VALUES ($1,$2)
    RETURNING *;`

    const values=[
        BookAuthor.book_id,
        BookAuthor.author_id
    ]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error creating user:", error);
        throw error
    }

}

export async function getAllBookAuthor() {
    const query=`
    select *from book_author;
    `

    try {
        const result=await pool.query(query)
        return result.rows[0]
    } catch (error) {
        console.error("Error get all authors: ",error);
        throw error
    }
}

export async function getBookAuthorById(BookAuthorId) {
    const query=`
    SELECT *FROM book_author WHERE book_author_id = $1;
    `
    const values=[BookAuthorId]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error fetching author by ID: ",error);
        throw error
    }
}

export async function deleteBookAuthor(BookAuthorId) {
    const query=`
    SELECT *FROM book_author WHERE book_author_id = $1;
    `

    const values = [BookAuthorId];

    try {
        const result=await pool.query(query,values)
        return result .rows[0]
    } catch (error) {
        console.error("Error creating user: ",error);
        
    }
}

export async function updateBookAuthor(book_id,author_id) {
    const query=`ISERT INTO book_author (book_id,author_id)
    VALUES ($1,$2)
    RETURNING *`

    const values=[author_id,book_id]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}