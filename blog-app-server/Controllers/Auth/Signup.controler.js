const model = require('../../Models/User/User.model');
const signup = async (req,res)=>{
    const {name,username,password} = req.body;
    console.log(name)
    try{
        await model.create({name:name,username:username,password:password});
        console.log(`${username} signed up`)
        res.status(201).json({message:"Signup Successfull"});
    }catch(e){
        console.error("Error signin up... ",e.message)
        if(e.code === 11000){
            return res.status(400).json({message:"User Already Exists"});
        }
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = signup