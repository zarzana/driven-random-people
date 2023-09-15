import express, { json } from "express";
import personRouter from "./routers/personRouter";

const app = express();

app.use(json());
app.use(personRouter);

app.listen(5000, () => { console.log(`Server is up and running on port 5000`); })
