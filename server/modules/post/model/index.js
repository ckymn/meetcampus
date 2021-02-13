const { Schema , model} = require("mongoose");

const post_scheme = new Schema({
    username: {type: String, require: true},
    name:{type: String , require:false},
    surname:{type: String , require:false},
    department: {type: String, require: true},
    contact: {type: String ,require: true},
    content: {type: String, require: true},
    image: {type: String, require: true},
    cratedAt: {
        type: Date,
        default: new Date()
    },
});

const post = new model("post", post_scheme);
module.exports = post;
