const model = require("../model");

//joi

const route = async (req, res) => {
  // create post
  const newPost = new model(req.body);

  try {
   await newPost.save();
   res.status(201).json(newPost);//hemen ekrana basiyor
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = { route };
