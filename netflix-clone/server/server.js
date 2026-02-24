const authroutes = require("./routes/auth");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Connted to MongoDB"))
.catch((err) => console.log(err));

app.get("/",(req,res) => {
    res.send("Ntflix clone API is running");
});

app.listen(5000, () => console.log("server is running on port 5000"));