const model = require("../model");
const joi = require('../../../util/joi');

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  let { params, body, query } = req;
  let { id } = params;
  
  const _post = await model.findById({_id: id});
    if(!_post)
      return res.status(404).json("post_not_found");
    return res.status(200).json(_post);
};

module.exports = { 
  // scheme ,
  route 
};
