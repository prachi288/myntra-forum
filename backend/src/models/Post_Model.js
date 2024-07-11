const mongoose=require("mongoose");

const postSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
    },
    comments: [
        {
            text: {
                type: String,
                required: true,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        },
    ],
},{ timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports=Post;

export default Post;