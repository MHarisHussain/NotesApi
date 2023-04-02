const express = require("express");
const mangoos = require("mongoose");
const noteRouter = require("../routes/noteRoute");
const userRouter = require("../routes/userRoute");
const dotevn = require(dotevn);
const cors = require("cors");

dotevn.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Notes Api");
});

const PORT = process.env.PORT || 5000;

mangoos.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, () => {
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
});