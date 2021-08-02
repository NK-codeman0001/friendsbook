const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");

dotenv.config();
const DB = `mongodb+srv://friendsbookDBAdmin:AdminPassword@cluster0.9gqcg.mongodb.net/friendsbookDb?retryWrites=true&w=majority`;

mongoose.connect(
  DB,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);


// step 3: Heroku 
if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    // const path = require("path");
    // app.get("*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    // })
}



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Backend server is running!");
});
