const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Loginser")

//check database connected or not

connect.then(() => {
    console.log("Database connected");
})
.catch(()=>{
    console.log("Database did not connect");
});

// create a schema

const Loginschema = new mongoose.Schema({
    name:{
        type : String,
        require: true
    },
    password:{
        type : String,
        require: true
    },
});

//collection part

const collection = new mongoose.model("userlogin", Loginschema);
module.exports = collection;