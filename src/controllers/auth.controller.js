import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const signup = async (req,res) => {
    try {
        const {name , email ,password} = req.body

        const exitingUser = await User.findOne({email})

        if(exitingUser){
            return res.status(400).json({
                message : "User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message : "User created Succesfully",
            userId : user._id
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

export const login = async (req,res) => {
    try {
        const {email , password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message : "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch){
            return res.status(200).json({
                message : "Invalid Password"
            })
        }
        
        const token = jwt.sign(
            {id : user._id},
            process.env.JWT_SECRET,
        {expiresIn : "1D"}

        )
         res.status(200).json({
      message: "Login successful",
      token
    })

    } catch (error) {
        res.status(500).json({
      message: error.message
    })
    }
}