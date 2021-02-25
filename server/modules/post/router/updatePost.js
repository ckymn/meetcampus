const model = require("../model");
const joi = require("../../../util/joi");

//-joi validation
// const scheme = joi.object({
//   _id:joi.objectId().required(),
// }).options({ stripUnknown: true })

const route = async (req, res) => {
    const { id: _id} = req.params;
    const post = req.body;
    try {   
        const updatePost = await model.findByIdAndUpdate(_id, post, { new:true })
        res.json(updatePost);
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }


    //   let { body, params , locale} = req;
//   const {_id} = params;
//   const _post = await model.findById(_id);
//   if(!_post)
//     return res.status(404).send(locale("user_not_found"));
//   _post.set(body);
//   await _post.save();
//   return res.json(_post);
};

module.exports = {
  // scheme ,
  route,
};
