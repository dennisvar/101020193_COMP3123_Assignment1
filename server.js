const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const employeeRoutes = require("./routes/employee");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const SERVER_PORT = 3712;

const DB_CONNECTION_STRING = "mongodb+srv://dennis:XuVSkFvwBThbgTfN@cluster0.xnw7o6s.mongodb.net/101020193_COMP3123_Assignment1?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/api/", userRoutes); 
app.use("/api/", employeeRoutes);

app.get("/", (req, res) => {
        res.send("<h1>Name: Dennis Varghese</h1>\n<h1>StuID: 101020193</h1>")
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
    console.log(`http://localhost:${SERVER_PORT}/api/user/signup`);
    console.log(`http://localhost:${SERVER_PORT}/api/user/login`);
    console.log(`http://localhost:${SERVER_PORT}/api/emp/employees`);
});