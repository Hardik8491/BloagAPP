const blogsModel = require('../../Models/Feed/Blog.model')
const userModel = require('../../Models/User/User.model')
const deleteBlog = async (req,res)=>{
    const {blogId} = req.params;
    try{
        if(!blogId){
            return res.status(400).json({message:"Blog postId is required fort deleting"})
        }
        
        const blog = await blogsModel.findById(blogId);
        
        if(!blog){
            return res.status(404).json({message:"Could not find the blog"})
        }
    
        const author = await userModel.findById(blog.author);
    
        if(author.username === req.user.username){
            await blogsModel.findByIdAndDelete(blogId);
            console.log(`${blogId} has been deleted`)
            return res.status(200).json({message:"Blog deleted successfully"})
        }
        return res.status(401).json({message:"Cannot delete someone else's blog"})
    }catch(e){
        console.log("error deleting blog: ",e.message);
        res.status(500).json({message:"Error Deleting the Blog"})
    }


}

module.exports = deleteBlog