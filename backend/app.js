const express = require("express");
const app=express();
const cookieParser = require("cookie-Parser")
const errorMiddleware = require("./middleware/error");
// const cors = require("cors");


app.use(express.json());
app.use(cookieParser());

// app.use(cors)
// Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1/",user);

//Middleware for error

app.use(errorMiddleware);


module.exports = app;