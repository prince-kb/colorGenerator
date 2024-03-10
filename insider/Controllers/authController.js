const bcrypt = require('bcryptjs')
const User = require('../models/Users')
const jwt = require('jsonwebtoken')
const salt = "Hii12there"
exports.signup = async (req,res,next)=>{
    const {password}= req.body;
    try{
        const user = await User.findOne({email : req.body.email});
        if(user){
            return res.json({
                err : "Email already exist",
                message : "Try another email"
            })
        }
        const pp = password.toString();
        const hashP = await bcrypt.hash(pp,12);
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

        console.log("Signed up")
    }
    catch(err){
        console.log("Error in signup")
        res.json({
            err : "Failed",
            message : "Cannot create hashed password"
        })
    }
}
exports.login = async (req,res,next)=>{
    try{
        const {email,password}= req.body;
        const pass = password.toString();

        const user = await User.findOne({email});
        if(!user){
            return res.json({
                err : "Invalid credentials",
                message : "Try different email or password"
            })
        }

        const p = await bcrypt.compare(pass,user.password);
        
        if(!p){
            return res.status(200).json({
                err : "Invalid credentials",
                message : "Try different email or password2"
            })
        }
        const token = jwt.sign({id : user._id},salt,{expiresIn : '10d'});

        res.status(201).json({
            status : "success",
            message : "Logged In",
            authToken : token,
            // user
        })
    }
    catch(err){
        res.status(400).json({
            err : "Failed",
            message : "Cannot login"
        })
    }
}
