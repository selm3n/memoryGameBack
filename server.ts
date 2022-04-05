import express, { Express } from 'express';
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import cardsSetup from "./routes/index/cards";
import playersSetup from "./routes/index/players";

var cors = require("cors");
require('dotenv').config();

const app = express();

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(cors());
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true , useNewUrlParser: true })
  ,() => {console.log('MongoDB Connected')}
  mongoose.set('useFindAndModify', false);


// Use api Routes
cardsSetup(app);
playersSetup(app);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

