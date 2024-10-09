"use strict";

var { SP } = require("../database/config");
const DB = require("../database/generalDatabase");

function saveHook(req, res) {
  try {
    let body = req.body;

    var params = [{ TEXT: JSON.stringify(body) }];
    console.log("ta", params);
    DB.exec(params, SP.WEBHOOK.SP_RECOPILAR_WEBHOOK);
    res.sendStatus(200);
  } catch (ex) {
    res.status(200).send({ status: false, message: ex });
  }
}

module.exports = { saveHook };
