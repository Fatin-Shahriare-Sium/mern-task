let express = require("express");
let mongoose = require("mongoose");
let authRouter = require("./router/authRoute.js");
let taskRouter = require("./router/taskRoute.js");
let profileRouter = require("./router/profileRoute.js");
let cookieparser = require("cookie-parser");
let cors = require("cors");
require("dotenv").config();
//cd backend/task-maneger
let app = express();
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.bbpolw9.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("mongodb connected successfully");
  });
let middleware = [
  express.urlencoded({ extended: true }),
  express.json(),
  cookieparser(),
  cors(),
];
app.use(middleware);
app.use("/auth", authRouter);
app.use("/task", taskRouter);
app.use("/profile", profileRouter);
app.get("/", (req, res) => {
  res.json("Allah is Almighty,alhamdulillah");
});
app.listen(process.env.PORT || "5000", () => {
  console.log("Server is running,Alhamdulillah");
});
