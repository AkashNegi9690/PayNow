const mongoose=require('mongoose');
const { DB_URL } = require("./config.js");
async function connect() {
    console.log(DB_URL)
    try{
       await mongoose.connect(DB_URL);
        console.log("connection successful")
    }catch(e){
        console.error("connection failed")
    }
}
connect();
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30},
    password:{type:String,
        required:true,
        minLength:6},
    firstName:{type:String,
        required:true,
        maxLength:50,
        trim:true},
    lastName:{type:String,
        required:true,
        maxLength:50,
        trim:true},
});

const accountSchema=new mongoose.Schema({
userId:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:true
},
balance:{
    type:Number,
    required:true
}
});

const User=mongoose.model('User',userSchema);
const Account=mongoose.model('Account',accountSchema);

module.exports={User,Account};