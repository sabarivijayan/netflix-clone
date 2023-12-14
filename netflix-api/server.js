const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);


app.listen(5000, ()=>{
    console.log("Server started....");
});

mongoose.connect("mongodb+srv://mekryptic:T10RJn9Rh3SnpkDj@cluster0.glr034d.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connected....");
});


