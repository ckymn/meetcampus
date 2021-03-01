const model = require("../model");
const joi = require('../../../util/joi');

// //-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  console.log(req.body);
  
  const _posts = await model.find({});
  if(!_posts)
    return res.status(404).json("post_not_found");
  return res.status(200).json(_posts);
  
};

module.exports = {route };
