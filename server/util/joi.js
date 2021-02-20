const joi = require('@hapi/joi')

joi.objectId = require('joi-objectid')(joi);
global.joi = joi;
module.exports = joi;