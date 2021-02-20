const model = require("../model");

//-joi
// const scheme = global.joi.object({
//     _id:joi.objectId().required(),
//     page:joi.number().min(0).default(0),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  try {
    const posts = await model.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { route };
