const model = require("../model");
const joi = require("../../../util/joi");

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  let { body, params} = req;
  let { id: _id } = params;
  
  const _post = await model.findById(_id);
  if (!_post) 
    return res.status(404).json("post_not_found");
  _post.set(body);
  await _post.save();
  return res.json(_post);
  
};

module.exports = {
  // scheme ,
  route,
};
