const {PostRepository,LikeRepository}=require('../repository/index')

const likeRepository=new LikeRepository();
const postRepository=new PostRepository();

async function toggleLike(modelId,modelType,user){
    if(modelType=='Post'){
        var likeable=await postRepository.getById(modelId);
    }else{
        throw new Error('unknown model type');
    }
    const response=await likeRepository.findByUserAndLikeable({
        user: user,
        onModel: modelType,
        Likeable: modelId
    });
    console.log("exists", response);
    if(response) {
        likeable.likes.pull(response.id);
        await likeable.save();
        await response.remove();
        var isAdded = false;

    }else{
        const newLike = await likeRepository.create({
            user: user,
            onModel: modelType,
            likeable: modelId
        });
        likeable.likes.push(newLike);
        await likeable.save();

        var isAdded = true;
    }
    return isAdded;
}

module.exports= {
    toggleLike
}
