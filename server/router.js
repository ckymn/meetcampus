const express = require("express");
const router = express.Router();
const post = require("./modules/post/router");
const validation = require("./middleware/validation");
const app = express();

router.get(
    `/posts`, 
    post.fetchpost.route
);
router.get(
  "/posts/:id", 
  // validation(post.getSinglePost.scheme),
  post.getSinglePost.route
);
router.post(
  `/posts`,
  // validation(post.createPost.scheme),
  app.use(express.json()),
  post.createPost.route
);
router.patch(
  `/posts/:id`,
  post.updatePost.route
);
router.delete(
  `/posts/:id`,
  // validation(post.deletePost.scheme),
  post.deletePost.route
);

module.exports = router;
