const { Schema , model} = require("mongoose");

const post_scheme = new Schema({
    name: {type:Schema.Types.String , required:true},
    surname: {type:Schema.Types.String , required:true},
    your_company: {type:Schema.Types.String},
    location: {type:String},
    tag: {type:Schema.Types.String, required:true},
    image: {type:Schema.Types.String},
    class: {type:Schema.Types.String},
    linkedin: {type:Schema.Types.String, required:true},
    createdAt: {
      type: Date,
      default: new Date(),
    },
});

const post = new model("post", post_scheme);
module.exports = post;
