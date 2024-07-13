const {CommentService}=require('../service/index')

const createComments = async(req, res) => {
    try {
        const {content}=req.body;
        const {user}=req.body;
        const {postId}=req.params;
        
        const comment = CommentService.createComment(content,user,'Post',postId);
        return res.status(201).json({
            data: comment,
            error:{},
            success: true,
            message: "Comment Successfully Created"
        });

    }catch(error) {
        console.log(error)
        console.log("Error in Comment Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Create Comment"
        });
    }
}

const createNestedComment = async(req, res) => {
    try {
        const {content}=req.body;
        const {user}=req.body;
        const {commentId}=req.params;
        
        const nestedComment = CommentService.NestedComment(content,user,commentId);
        return res.status(201).json({
            data: nestedComment,
            error:{},
            success: true,
            message: "Nested Comment Successfully Created"
        });

    }catch(error) {
        console.log(error)
        console.log("Error in Nested Comment Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Create Nested Comment"
        });
    }
}

module.exports={
    createComments,
    createNestedComment
}
