import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenandSetCookies from "../utils/generateToken.js";

export const login = async(req,res)=>{
    try{
        const {username , password} = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error :"Invalid username or password"})
        }
        generateTokenandSetCookies(user._id , res)
        res.status(200).json({
            _id:user._id,
            fullname : user.fullname,
            username:user.username,
            profilePic :user.profilePic
        })

    }catch(err){
        res.status(500).json({error:"internal server error"})
        console.error(err);
    }
}
export const logout = (req,res)=>{
    try{
        res.cookie("jwt","" ,{maxAge:0})
        res.status(200).json({messagec:"Logged out successfully "})
    }catch(err){
        res.status(500).json({error:"internal server error"})
        console.error(err);
    }

}
export const  signup = async (req,res)=>{
    try{
        const {fullname , username , password , confirmPassword , gender} =req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:`password didn't match${password} ${confirmpassword}`})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        //hash pass
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)


        const boyProfilepic =`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilepic =`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password : hashedPassword,
            gender,
            profilePic: gender ==="male" ? boyProfilepic : girlProfilepic
        })

        generateTokenandSetCookies(newUser._id,res)            //create jwt token


        if(newUser){
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                profilePic:newUser.profilePic
            })

        }else{
            res.status(201).json({error : "invalid user data"})
        }

    }catch(err){
        res.status(500).json({error:"internal server error"})
        console.error(err);
    }

}