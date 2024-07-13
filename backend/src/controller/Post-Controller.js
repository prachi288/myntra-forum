const { PostService } = require('../service/index');

const createPost = async(req, res) => {
    try {
        const data = req.body;
        const response = PostService.createPost(data);
        return res.status(201).json({
            data: response,
            error:{},
            success: true,
            message: "Post Successfully Created"
        });

    }catch(error) {
        console.log("Error in Post Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Create Post"
        });
    }
}

const deletePost = async(req, res) => {
    try {
        const id = req.params.id;
        const response = PostService.deletePost(id);
        return res.status(201).json({
            data: response,
            error:{},
            success: true,
            message: "Post Successfully Deleted"
        });

    }catch(error) {
        console.log("Error in Post Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Delete Post"
        });
    }
}

const updatePost = async(req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = PostService.updatePost(id,data);
        return res.status(201).json({
            data: response,
            error:{},
            success: true,
            message: "Post Successfully Updated"
        });

    }catch(error) {
        console.log("Error in Post Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Update Post"
        });
    }
}

module.exports = {
    createPost,
    deletePost,
    updatePost
}