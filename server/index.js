import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import UserMonthReport from './routes/user.routes.js';
const app = express();

console.log(process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/user_report', UserMonthReport);
app.use('/api/login', UserMonthReport);


app.listen(3000, () => {
    console.log("server is running at port http://localhost:3000");
})