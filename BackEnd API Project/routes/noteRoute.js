const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res)=>{
    res.send("Note Get Api");
});

noteRouter.post("/", (req, res)=>{
    res.send("Note Post Api");
});

module.exports = noteRouter;