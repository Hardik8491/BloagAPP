const jwt = require('jsonwebtoken')

const auth = async (req,res,next) =>{

    try{
        const authorization = req.headers.authorization;
        if(!authorization || !authorization.startsWith('Meow') ){
            return res.status(401).json({message:"Proper authorization header missing"})
        }
        const token = authorization.split(' ')[1];
        
        if(!token){
            return res.status(401).json({message:"Token is required"})
        }
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
    
        next();
    }catch(e){
        console.log("Error authorizing the req, ",e.message)
        return res.status(403).json({message:"Invalid token"})
    }

}

module.exports = auth