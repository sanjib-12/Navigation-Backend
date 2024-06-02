const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../Models/userModel')
const createError = require('../Utils/appError')

//User Registration
exports.signup = async (req, res, next) =>{
    try{
        const user = await User.findOne({email: req.body.email});

        if(user){
            return next(new createError('User already exits!', 400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body, 
            password: hashedPassword,
        });

        //assigning jwt to users
        const token = jwt.sign({_id: newUser._id}, "secretKey123",{expiresIn: '90d'});

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        });

    }catch(error){
        next(error);
    }
}
//User login
exports.login = async (req, res, next) =>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return next(new createError('User not found!', 404));
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return next(new createError('Invalid Password', 401));
        }

        const token = jwt.sign({_id: user._id}, "secretKey123",{expiresIn: '90d'});

        res.status(200).json({
            status: 'success',
            message: 'User Login successfully',
            token,
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        });

    }catch(error){
        next(error);
    }
}