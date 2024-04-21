const mongoose = require('mongoose');
const { PostModel, CommentModel } = require('../models/schemas.js');

const displayEventPosts = async(req, res) => {
    // prikaz objav iz baze
    try {
        var posts = [];
        posts = await PostModel.find({category: "Event"}).sort({upvotes : -1}).exec();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const plusLikes = async(req, res) => {
    // prikaz objav iz baze
    console.log(req.params.id);
    if (req.params.id) {
        var id = req.params.id;
        try {
            var post = await PostModel.findById(id);
            post.upvotes++;
            await post.save();
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
};

const minusLikes = async(req, res) => {
    // prikaz objav iz baze
    console.log(req.params.id);
    if (req.params.id) {
        var id = req.params.id;
        try {
            var post = await PostModel.findById(id);
            post.upvotes--;
            await post.save();
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
};

const postPost = async (req, res) => {
    console.log(req.body.title);
        try {
            const newPost = new PostModel({
                category: "Dogodki",
                title: req.body.title,
                content: req.body.content,
                username: "Tinky-Winky"
            });

            console.log(newPost);
            await newPost.save();
            res.status(201).send({ message: 'Post created', event: newPost });
        }
        catch (error) {
            return res.status(500).send({ message: "Error creating post", error: error.toString() });
        }
};


module.exports = {
    displayEventPosts,
    plusLikes,
    minusLikes,
    postPost,
};