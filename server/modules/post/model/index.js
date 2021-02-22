const { Schema , model} = require("mongoose");

const post_scheme = new Schema({
    name: {type:String , required:true},
    surname: {type:String , required:true},
    content:{type:String, required: true},
    your_company: {type:String},
    location: {type:String, required:true},
    tag: {type:String, required:true},
    image: {type:String},
    class: {type:String},
    linkedin: {type:String, required:true},
    createdAt: {
      type: Date,
      default: new Date(),
    },
});

const post = new model("post", post_scheme);
module.exports = post;
