const mongoose = require('mongoose');
const colors=require('colors');


const connectDB=async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
    });

    console.log(`MongoDB konektovan!`.brightGreen.bold);
}

module.exports=connectDB;