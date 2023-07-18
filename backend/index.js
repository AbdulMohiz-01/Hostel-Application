import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import hostelApplications from './routes/hostelApplication.js';

const app = express();

const url = "mongodb+srv://moiz:123@hostelmanagement.ukg1pdz.mongodb.net/hostelManagmentDb?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to database");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/hostelApplications", hostelApplications);
app.use("/viewApplications", hostelApplications);


