const express = require("express");
const loginRouter = require("./auth/loginRouter.js");
const registerRouter = require("./auth/registerRouter.js");
const listingRouter = require("./property_list/listingRouter");
const userRouter = require("./auth/userRouter.js");

const server = express();

server.use(express.json());

server.use("/api/login", loginRouter);
server.use("/api/users", userRouter);
server.use("/api/register", registerRouter);
server.use("/api/listings", listingRouter);

server.get("/", (req, res) => {
  res.send("Welcome to AirBnB Optimal Price Endpoint !");
});

module.exports = server;
