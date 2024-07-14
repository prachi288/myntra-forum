const mongoose=require("mongoose");

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxLength: 300,
        minLength: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
},{ timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports=Post;