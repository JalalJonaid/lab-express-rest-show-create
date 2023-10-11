const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.model");

logs.get("/", (req, res) => {
    console.log("Sending all log data.")
    res.send(logsData);
});

logs.get("/:id", (req, res) => {
    const {id} = req.params;
    console.log(`Showing log at ${id}`)

    if(logsData[id]) {
        res.status(200).json(logsData[id])
    } else {
        res.status(404).send("No log for this ID.");
    }
})

logs.post("/", (req, res) => {
    logsData.push(req.body);
    res.status(200).json( {status: "OK", payload: logsData[logsData.length - 1]} )
})

module.exports = logs;