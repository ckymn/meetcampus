const model = require("../model");

//-joi validation
const scheme = global.joi.object({
  _id:joi.objectId().required(),
}).options({ stripUnknown: true })

const route = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndRemove(_id);
    res.json(deletedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = { scheme,route };
