import express from "express";
import { setUp } from "./src/servies/setup.js";
import {
	bookRouter,
	authorRouter,
	categoryRouter,
	authRouter,
	bookAuthorRouter,
	orderRouter
} from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/setup", (req, res, next) => {
	setUp();
});

app.use("/auth", authRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/bookauthors",bookAuthorRouter);
app.use("/categories", categoryRouter);
app.use("/orders",orderRouter);

//error handler
app.use((err, req, res, next) => {
	if (err) {
		res.send(err);
	}

	res.status(500).send("server error");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
