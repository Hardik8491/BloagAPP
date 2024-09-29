const mongoose = require('mongoose')
const blogsModel = require('../../Models/Feed/Blog.model')
const userModel = require('../../Models/User/User.model')
const updateBlog = async (req,res) => {
    try{
        const {blogId} = req.params;
        const {title, content} = req.body;
    
        if(!blogId || !mongoose.Types.ObjectId.isValid(blogId)){
            return res.status(400).json({message:"BlogId is required"})
        }
        const blog = await blogsModel.findById(blogId)
        if(!blog){
            return res.status(404).json({message:"Blog not found"})
        }

        const author = await userModel.findById(blog.author);
        const username = author.username;
        
        if(username === req.user.username){
    
            blog.title = title || blog.title;
            blog.content = content || blog.content;
    
            await blog.save()
            console.log(`${username} updated the blog ${blogId}`)
            return res.status(200).json({message:"Blog updated sucessfully"})
        }else{
            return res.status(401).json({message:"You are not authorized to update this blog"})
        }
    }catch(e){
        console.error("Error updating blog: ",e.message);
        return res.status(500).json({message:"Erorr updating blog"})
    }
}

module.exports = updateBlog