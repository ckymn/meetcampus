const model = require("../model");
const joi = require("../../../util/joi");

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  let { params , body } = req; 
  let { id } = params;

  const _deletedPost = await model.findOneAndDelete({ _id: id });
  if(!_deletedPost)
    return res.status(404).json("post_not_found");
  return res.json(_deletedPost);
};

module.exports = {
  // scheme,
  route,
};
