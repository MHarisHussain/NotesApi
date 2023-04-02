const express = require("express");
const mangoos = require("mongoose");
const noteRouter = require("../routes/noteRoute");
const userRouter = require("../routes/userRoute");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Hello");
});


mangoos.connect("mongodb+srv://admin:admin@cluster0.ptntfwo.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, () => {
        console.log("Server started on port no. 5000");
    });
})
.catch((error)=>{
    console.log(error);
});