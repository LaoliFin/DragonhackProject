var express = require('express');
var router = express.Router();

var path = require('path');
var ctrlPost = require('../controllers/postController');

//url-ji za objave
router.get('/events', ctrlPost.displayEventPosts);
router.post('/events', ctrlPost.postPost);
router.get('/music', ctrlPost.displayMusicPosts);


router.put('/like/:id', ctrlPost.plusLikes);
router.put('/dislike/:id', ctrlPost.minusLikes);

module.exports = router;