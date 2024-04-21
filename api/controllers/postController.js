const mongoose = require('mongoose');
const Post = require('../models/postSchema');

const displayEventPosts = async(req, res) {
    // prikaz objav iz baze
    try {
        var posts = [];
        posts = await Post.find({category: "Event"}).sort({upvotes : -1}).exec();
        res.status(200).json(posts);
    } catch (err) {
        err.status(500).json({message: err.message});
    }
};