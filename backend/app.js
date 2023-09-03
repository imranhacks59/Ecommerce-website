const express = require("express");
const app=express();
const cookieParser = require("cookie-Parser");
const path = require('path');
const errorMiddleware = require("./middleware/error");

const cors = require("cors");
require("dotenv").config({ path: "backend/config/config.env" });


app.use(express.json());
app.use(cookieParser());

// app.use(cors)
// Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const cart = require('./routes/cartRoute');
const payment=require('./routes/paymentRoute')

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use('/api/v1',cart);
app.use('/api/v1',payment)

// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "../frontend/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });
//Middleware for error

app.use(errorMiddleware);


module.exports = app;