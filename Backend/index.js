import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ExerciseRoute from "./routes/ExerciseRoute.js";

const app = express();
mongoose.connect('mongodb+srv://mern_db:1997MtBy@tenrun.0i4ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(ExerciseRoute);

app.listen(4000, () => console.log('Server up and running...'));