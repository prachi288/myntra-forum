const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
     fullName:{
        type: String,
        required: true,
    },
    mobileNumber:{
        type: Number,
        required: true,
        unique: true,
    },
    emailID : {
        type: String,
        unique: true
    },
    uniqueID : {
        type: String,
        required: true,
        unique: true
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;