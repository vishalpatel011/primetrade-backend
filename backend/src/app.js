const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const taskRoutes = require("./routes/taskRoutes");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoutes);

app.use("/api", protectedRoutes);

app.use("/api", taskRoutes);


app.get("/", (req, res) => {
    res.send("Backend API is running");
});

module.exports = app;