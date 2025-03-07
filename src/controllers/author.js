import { createAuthor,getAllAuthor,GetAuthorById,updateAuthor,deleteAuthor } from '../servies/index.js';

export const authorController = {
	async create(req, res, next) {
		try {
			const body =req.body
			const createdAuthor=await createAuthor(body)
			
			res.sent(createdAuthor)
		} catch (error) {
			next(error);
		}
	},
	async findAll(req, res, next) {
		try {
			const result=await getAllAuthor()
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async findOne(req, res, next) {
		try {
			const {id}=req.params
			const result=await GetAuthorById(id);
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async update(req, res, next) {
		try {
			const {id}=req.params
			const result=await updateAuthor(id);
			res.send(result)		
		} catch (error) {
			next(error);
		}
	},
	async delete(req, res, next) {
		try {
			const {id}=req.params
			const result=await deleteAuthor(id);
			res.send(result)	
			} catch (error) {
			next(error);
		}
	},
};
