import pool from "../config/db.js";

export async function createAuthor(author) {
    const query =`INSERT INTO Author (first_name,last_name,bio)
    VALUES ($1,$2,$3)
    RETURNING *;
    `
    const values=[
        author.first_name,
        author.last_name,
        author.bio
    ]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error creating user:", error);
        throw error
    }
}

export async function getAllAuthor() {
    const query=`
    select *from Author;
    `

    try {
        const result=await pool.query(query)
        return result.rows[0]
    } catch (error) {
        console.error("Error get all authors: ",error);
        throw error
    }
}
export async function GetAuthorById(authorId) {
    const query=`
    SELECT *FROM Authors WHERE author_id = $1;
    `
    const values=[authorId]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error fetching author by ID: ",error);
        throw error
    }
}

export async function deleteAuthor(AuthorId) {
    const query=`
    SELECT *FROM Authors WHERE author_id = $1;
    `

	const values = [AuthorId];


    try {
        const result=await pool.query(query,values)
        return result .rows[0]
    } catch (error) {
        console.error("Error creating user: ",error);
        throw error
    }
}

export async function updateAuthor(AuthorId,first_name,last_name,bio) {
    const query =`INSERT INTO Author (first_name,last_name,bio)
    VALUES ($1,$2,$3)
    RETURNING *;
    `
    const values=[first_name,last_name,bio]

    try {
        const result=await pool.query(query,values)
        return result.rows[0]
    } catch (error) {
        console.error("Error creating user:", error);
		throw error;
    }
}