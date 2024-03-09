const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : 'User'
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;