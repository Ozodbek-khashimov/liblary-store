import { createBookAuthor,getAllBookAuthor,getBookAuthorById,updateBookAuthor,deleteBookAuthor } from "../servies/index.js";

export const bookAuthorController = {
	async create(req, res, next) {
		try {
			const body=req.body
			const createdBookAuthor=await createBookAuthor(body)

			res.send(createdBookAuthor)
		} catch (error) {
			next(error);
		}
	},
	async findAll(req, res, next) {
		try {
			const result=await getAllBookAuthor()
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async findOne(req, res, next) {
		try {
			const {id}=req.params
			const result=await getBookAuthorById(id)
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async update(req, res, next) {
		try {
			const {id}=req.params
			const result=await updateBookAuthor(id)
			res.send(result)
			} catch (error) {
			next(error);
		}
	},
	async delete(req, res, next) {
		try {
			const {id}=req.params
			const result=await deleteBookAuthor(id)
			res.send(result)
			} catch (error) {
			next(error);
		}
	},
};
