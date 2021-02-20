const express = require("express");
const router = express.Router();
const post = require("./modules/post/router");
const validation = require("./middleware/validation");

router.get(`/posts`,validation(post.fetchpost.scheme), post.fetchpost.route);
router.get("/posts/:id", post.getSinglePost.route);
router.post(`/posts`,post.createPost.route)
router.delete(`/posts/:id`, post.deletePost.route);

module.exports = router;
