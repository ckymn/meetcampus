const { Schema , model} = require("mongoose");

const post_scheme = new Schema({
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
});

const post = new model("post", post_scheme);
module.exports = post;
