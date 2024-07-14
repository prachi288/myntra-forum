const {LikeService} =require('../service/index');


const toggleLike=async(req,res)=>{
    try {
        const {user}=req.body;
        const {postId}=req.params;
        const response = await LikeService.toggleLike(postId,'Post',user);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully toggled like'
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            message: 'Something went in Like Controller wrong',
            err: error
        })
    }
}

module.exports={
    toggleLike
}