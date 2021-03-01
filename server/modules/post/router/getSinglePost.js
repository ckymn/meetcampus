const model = require("../model");
const joi = require('../../../util/joi');

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
  let { params, body } = req;
  let { id } = params;
  
    const _post = await model.findById(id);
    if(!_post)
      return res.status(404).send("post_not_found");
    return res.status(200).json(_post);
 
};

module.exports = { 
  // scheme ,
  route 
};
