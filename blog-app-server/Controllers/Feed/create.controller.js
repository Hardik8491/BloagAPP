const blogModel = require("../../Models/Feed/Blog.model")
const userModel = require("../../Models/User/User.model")
const create = async (req,res)=>{
    
    try{
        const {title,content,author} = req.body;
        const username = author || req.user.username

        const user = await userModel.findOne({username:username })
    
        const blog = {
            title: title,
            content: content,
            author: user
        }
        await blogModel.create(blog);
        res.status(201).json({message:"Blog published!"})
        console.log(`${username} published a blog`)

    }catch(e){
        console.error("Error creating blog: ",e.message)
        res.status(500).json({message: "Internal Server Error"})
    }

}

module.exports = create