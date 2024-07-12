const { PostRepository } = require('../repository/index');

const postRepository = new PostRepository();

const createPost = async(data) => {
    try{

        const response = await postRepository.create(data);
        return response;

    }catch(error){
        console.log("Error in Post Service Layer");
        throw error;
    }
}

const deletePost = async(id) => {
    try{

        const response = await postRepository.remove(id);
        return response;

    }catch(error){
        console.log("Error in Post Service Layer");
        throw error;
    }
}

const updatePost = async(id, data) => {
    try{

        const response = await postRepository.update(id, data);
        return response;

    }catch(error){
        console.log("Error in Post Service Layer");
        throw error;
    }
}

module.exports = {
    createPost,
    deletePost,
    updatePost
}