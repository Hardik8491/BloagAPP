const model = require('../../Models/User/User.model')
const jwt = require('jsonwebtoken')
const login = async (req,res) =>{
    const {username,password} = req.body;
    try{
        const user = await model.findOne({username:username});
        if(!user){
            console.log(username," user Not Found");
            return res.status(404).json({message:` ${username} not found`});
        }
        const token = jwt.sign({uid:user._id, username:user.username}, process.env.JWT_SECRET, {expiresIn: '48h'})
        if(user.password===password){   
            console.log(user.username," logged in!");
            return res.status(200).json({message:"Login Successful",token:token});
        }else{
            console.log(user.username," failed to login");
            return res.status(401).json({message:"Wrong Password"});
        }

    }catch(e){
        console.error("Error logging in... ",e);
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = login