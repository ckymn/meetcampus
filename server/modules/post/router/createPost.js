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
  let { params, body } = req;
  let newPost = new model(body);
  try {
    // let { body } = req;
    // const doesExist = await model.findOne({ id: _id });
    // if (doesExist)
    //   throw createError.Conflict(`${_id} is already been registered`);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost); //hemen ekrana basiyor
    
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = {
  // scheme,
  route,
};
