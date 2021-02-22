const express = require("express");
const router = express.Router();
const post = require("./modules/post/router");
const validation = require("./middleware/validation");

router.get(
    `/posts`, 
    post.fetchpost.route
);
router.get(
  "/posts/:id",
  validation(post.getSinglePost.scheme),
  post.getSinglePost.route
);
router.post(
  `/posts`,
  // validation(post.createPost.scheme),
  post.createPost.route
);
router.delete(
  `/posts/:id`,
  validation(post.deletePost.scheme),
  post.deletePost.route
);

module.exports = router;
