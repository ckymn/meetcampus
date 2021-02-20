const model = require("../model");

//-joi validation
const scheme = global.joi.object({
  _id:joi.objectId().required(),
}).options({ stripUnknown: true })

const route = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await model.findById(_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { scheme ,route };
