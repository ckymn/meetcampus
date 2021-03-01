const model = require("../model");
const joi = require("../../../util/joi");

//joi validation
// const scheme = joi.object({
//     name: joi.string().max(24).required(),
//     surname: joi.string().max(24).required(),
//     content: joi.string().min(20).required(),
//     your_company: joi.string().required(),
//     linkedin: joi.string().uri().required(),
//   })
//   .options({ stripUnknown: true });

const route = async (req, res) => {
  let { params, body, _client } = req;
  let { _id } = body;

  // save db
  let newPost = new model(body);
  // let doesExist = await newPost.findById(_id);
  // if (doesExist)
  //   return res.status(404).json(`${_id} is already been registered`);
  
  let savedPost = await newPost.save(); 
  return res.status(201).json(savedPost);
    
  //veya 
  /**
   * _client = await _client.set({body}).save();
   * return res.send(_client);
   */
};

module.exports = {
  // scheme,
  route,
};
