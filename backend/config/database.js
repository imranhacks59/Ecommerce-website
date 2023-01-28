const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      })
      // hta sakte hai bcs hmne server me unhandled rejection ke liye bna liye hai
      // DB_URI = "mongodb://localhost:27017/Ecommerce
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  };
  
  module.exports = connectDatabase;