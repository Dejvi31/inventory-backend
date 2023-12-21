const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute")

const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes Middlewares
app.use("/api/users", userRoute)

// Routes
app.get("/", (req,res) => {
    res.send("Home Page")
})

// Connect to MongoDB and start server

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
 .then(() => {
    app.listen(PORT, () => {
        console.log(`Server runing on port ${PORT}`);
    })
 })
 .catch((err) => console.log(err))