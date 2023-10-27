const Post = require('../models/Post');

exports.createPost = async(req, res) => {
    try {
        const post = new Post({
            ...req.body,
            author: req.user._id
        });
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name');
        res.send(posts);
    } catch (error) {
        res.status(500).send();
    }
};

exports.getMyPosts = async(req, res) => {
    try {
        const posts = await Post.find({ author: req.user._id });
        res.send(posts);
    } catch (error) {
        res.status(500).send();
    }
};