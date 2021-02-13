const express = require("express");
const router = express.Router();
const post = require("./modules/post/router");

router.get(`/posts`, post.fetchpost.route);
router.get("/posts/:id", post.getSinglePost.route);
router.post(`/posts`,post.createPost.route)
router.delete(`/posts/:id`, post.deletePost.route);

module.exports = router;
