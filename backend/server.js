const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    process.exit(1);
});

require("dotenv").config({
    path: "backend/config/config.env",
});

connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`The server is working on http://localhost:${process.env.PORT}`)
});

process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(0);
    });
});


