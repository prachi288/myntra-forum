const {CommentRepository,PostRepository}=require('../repository/index')

const commentRepository=new CommentRepository();
const postRepository=new PostRepository();

async function createComment(content,user,modelType,modelId){
    try{
        const comment = await commentRepository.create({
            content,
            user,
            onModel: modelType,
            commentable: modelId,
            post: modelType==='Post' ? modelId: undefined // Add post field if it's a post comment
        });

        const post=await postRepository.getById(modelId);

        post.comments.push(comment._id);
        await post.save();

        return comment;
    }catch(error){
        console.log("Error in Comment Service Layer");
        throw error;
    }
}

async function NestedComment(content,user,commentId){
    try{
        const nestedComment = await commentRepository.create({
            content,
            user,
            onModel: 'Comment',
            commentable: commentId,
        });

        const parentComment=await commentRepository.getById(commentId);

        parentComment.comments.push(nestedComment._id);
        await parentComment.save();

        return nestedComment;
    }catch(error){
        console.log("Error in Comment Service Layer");
        throw error;
    }
}

module.exports={
    createComment,
    NestedComment
}