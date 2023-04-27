const app = require('./app')
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

// handling uncaught exception
  process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
  });
// config
dotenv.config({path:"backend/config/config.env"})

// connecting database
connectDatabase();


const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)

})

  // uncaught error--pakra nhi gya
//   console.log(youtube)

// Unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promises rejection`);
    
    server.close(()=>{
        // after close we have to exit the process

        process.exit(1);
    })

})