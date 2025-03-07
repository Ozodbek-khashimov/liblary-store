import { createBook,getAllBook,getBookById,updateBook,deleteBook } from "../servies/index.js";

export const bookController = {
	async create(req, res, next) {
		try {
			const body=req.body
			const createdBook=await createBook(body)

			res.rend(createdBook)
		} catch (error) {
			next(error);
		}
	},
	async findAll(req, res, next) {
		try {
			const result=await getAllBook()
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async findOne(req, res, next) {
		try {
			const {id}=req.params
			const result=await getBookById(id)
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async update(req, res, next) {
		try {
			const {id}=req.params
			const result=await updateBook(id)
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async delete(req, res, next) {
		try {
			const {id}=req.params
			const result=await deleteBook(id)
			res.send(result)
				} catch (error) {
			next(error);
		}
	},
};
