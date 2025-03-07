import { createOrder,getAllOrder,getOrderById,updateOrder,deleteOrder } from "../servies/index.js";

export const orderController = {
	async create(req, res, next) {
		try {
			const body=req.body
			const createdOrder=await createOrder(body)
			res.send(createdOrder)
		} catch (error) {
			next(error);
		}
	},
	async findAll(req, res, next) {
		try {
			const result=await getAllOrder()
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async findOne(req, res, next) {
		try {
			const {id}=req.params
			const result=await getOrderById(id);
			res.send(result)
		} catch (error) {
			next(error);
		}
	},
	async update(req, res, next) {
		try {
			const {id}=req.params
			const result=await updateOrder(id);
			res.send(result)
				} catch (error) {
			next(error);
		}
	},
	async delete(req, res, next) {
		try {
			const {id}=req.params
			const result=await deleteOrder(id);
			res.send(result)
				} catch (error) {
			next(error);
		}
	},
};
