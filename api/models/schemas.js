require('dotenv').config();
const mongoose = require("mongoose");
//const crypto = require("crypto");
//const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Username is required!"],
        unique: true
    },
    email: { 
        type: String, 
        //required: [true, "Email is required!"],
        unique: true
    },
    salt: { 
        type: String,
        //required: [true, "Salt is required!"]
    },
    hash: { 
        type: String,
       // required: [true, "Hash is required!"]
    },
    description: { 
        type: String, 
        default: "instagram: username.a"
    }
});

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Write a comment"],
        default: "I think that.."
    },
    upvotes: {
        type: Number,
        default: 0  // Initial number of upvotes
    },
    downvotes: {
        type: Number,
        default: 0  // Initial number of downvotes
    },
    username: {
        type: String,
        //required: [true, "Username is required!"]
    }
    // The name of the user to be shown on the comment
});

const postSchema = new mongoose.Schema({
    category: {
        type: String,
        //required: [true, "Category is required!"]
    },
    title: {
        type: String,
        //required: [true, "Write a title"]
    },
    content: {
        type: String,
        required: [true, "Write a tip!"],
        default: "No content yet!"
    },
    username: {
        type: String,
        required: [true, "Username is required!"]
        // The name of the user to be shown on the post
    },
    upvotes: {
        type: Number,
        default: 0  // Initial number of upvotes
    }
});

const UserModel = mongoose.model("User", userSchema, "Users");
const CommentModel = mongoose.model("Comment", commentSchema, "Comments");
const PostModel = mongoose.model("Post", postSchema, "Posts");

module.exports = {
    UserModel,
    CommentModel,
    PostModel
};
