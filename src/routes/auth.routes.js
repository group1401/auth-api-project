"use strict";

const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");

const { users } = require("../models/index");
const basicAuth = require("../middleware/basic.js");
const bearerAuth = require("../middleware/bearer.js");
const permissions = require("../middleware/acl.js");

authRouter.post("/sign-up", async (req, res) => {
  console.log("sign-up");
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 7);
    console.log(req.body.password);
    const record = await users.create(req.body);
    console.log("1111111111", record);
    res.status(201).json(record);
  } catch (error) {
    res.status(403).send("Error occurred");
  }
});

// authRouter.post("/sign-in", basic, async (req, res) => {
//   res.status(200).json(req.user);
// });

// authRouter.get("/user", bearer, (req, res) => {
//   res.json({
//     message: "You are authorized to view the user profile",
//     user: req.user,
//   });
// });

// authRouter.post("/img", bearer, acl("create"), (req, res) => {
//   res.send("new img was created");
// });
// authRouter.get("/img", bearer, acl("read"), (req, res) => {
//   res.send("this is a new image");
// });
// authRouter.put("/img", bearer, acl("update"), (req, res) => {
//   res.send("new img was updated");
// });
// authRouter.delete("/img", bearer, acl("delete"), (req, res) => {
//   res.send("new img was deleted");
// });

module.exports = authRouter;
