import User from "../models/user.model.js";
export const getUsersForSidebar = async (req,res)=>{
    try{
        const loggedinUser = req.user._id
        const filteredUsers= await User.find({_id:{$ne:loggedinUser}}).select("-password")

        res.status(200).json(filteredUsers)
    }catch(err){
        console.error(err);
        res.status(500).json({error:"internal server error"})
    }
}