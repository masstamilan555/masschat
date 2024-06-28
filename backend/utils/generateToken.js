import jwt from "jsonwebtoken"

const generateTokenandSetCookies = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000 ,  //millie seconds
        httpOnly:true, //prevent XSS attacks cross site scripting attack
        sameSite:"strict", //CSRF attacks
        secure:process.env.NODE_ENV !== "development" 
    })
}
export default generateTokenandSetCookies;