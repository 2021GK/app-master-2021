require('dotenv').config({path: "./config.env"});
const express=require('express');
const colors=require('colors');
const path = require('path');
const cors = require('cors');
const connectDB=require('./config/db');
const errorHandler=require('./middleware/error');
connectDB();

const app=express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));


app.use(errorHandler);


const PORT=process.env.PORT || 5000;

const server=app.listen(PORT, () => console.log(`Server radi na portu: ${PORT}`.cyan.bold));

process.on("unhandledRejection", (err, promise) => {
console.log(`logged error ${err}`.magenta.bold);
server.close(() =>process.exit(1));
});