"use strict";

const express = require("express");
const index = require("../controllers/indexController");
const api = express.Router();
api.post("/webhook", index.saveHook);

module.exports = api;
