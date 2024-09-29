const blogsModel = require('../../Models/Feed/Blog.model')
const getFeed = async (req,res) => {
    try{
        const blogs = await blogsModel.find({});
        res.status(200).json({data:blogs});
    }catch(e){
        console.error("Error fetchinf feed: ",e.message);
        res.status(500).json({message:"Error fetching feed"})
    }
}

module.exports = getFeed