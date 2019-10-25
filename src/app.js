import express from "express";
import apiRouter from "./api";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', apiRouter);

app.listen(5000);
