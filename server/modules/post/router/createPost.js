const model = require("../model");
const joi = require("../../../util/joi");

//joi validation
const scheme = global.joi
  .object({
    name: joi.string().max(24).default("").label("name_malformed"),
    surname: joi.string().max(24).default("").label("surname_malformed"),
  })
  .options({ stripUnknown: true });

const route = async (req, res) => {
  try {
    let { body } = req;
    // const doesExist = await model.findOne({ id: _id });
    // if (doesExist)
    //   throw createError.Conflict(`${id} is already been registered`);

    const newPost = new model(body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost); //hemen ekrana basiyor
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = {
  scheme,
  route,
};
