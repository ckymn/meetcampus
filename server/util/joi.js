const joi = require('@hapi/joi')
joi.objectId = require('joi-objectid')(joi);

module.exports = joi;