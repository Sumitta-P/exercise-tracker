import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ExerciseRoute from "./routes/ExerciseRoute.js";
import path from "path";

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

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"))
  })
}
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server up and running...'));