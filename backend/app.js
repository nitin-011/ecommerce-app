const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser")

app.use(express.json());
// Routes
const Product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");

app.use("/api/v1",Product);
app.use("/api/v1",user);
app.use("/api/v1",order)
app.use(cookieParser())

// Middleware
app.use(errorMiddleware);

module.exports = app