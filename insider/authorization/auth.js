const bcrypt = require('bcryptjs')
const User = require('../models/Users')
const jwt = require('jsonwebtoken')

const signup = async (req,res,next)=>{
    try{
        const user = await User.findOne({email : req.body.email});
        if(user){
            return res.json({
                err : "Email already exist",
                message : "Try another email"
            })
        }
        const hashP = await bcrypt.hash(re.body.password,12);
        const newUser = User.create({
            ...req.body,
            password : hashP
        })
        const token = jwt.sign({_id : newUser._id},salt,{expiresIn : '10d'});
        res.status(201).json({
            status : "success",
            message : "User created",
            authToken : token
        })
    }
    catch(err){
        res.json({
            err : "Failed",
            message : "Cannot create hashed password"
        })
    }
}