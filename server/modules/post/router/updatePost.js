const model = require("../model");
const joi = require("../../../util/joi");

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  let { body, params , locale} = req;
  const {_id} = body;
  const _post = await model.findById(_id);
  if(!_post)
    return res.status(404).send(locale("user_not_found"));
  _post.set(body);
  await _post.save();
  return res.send(_post);
};

module.exports = {
  // scheme ,
  route,
};
