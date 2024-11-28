import express, { Request, Response } from "express";

const port = 8080;
const app = express();

app.use(express.json());


app.listen(port, () => {
  console.log(`Application started on port ${port}`);
});