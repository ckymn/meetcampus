const model = require("../model");
const joi = require('../../../util/joi');

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  const {id} = req.params;
  try {
    const deletedPost = await model.findOneAndDelete({_id:id});
    res.json(deletedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = { 
  // scheme,
  route 
};
