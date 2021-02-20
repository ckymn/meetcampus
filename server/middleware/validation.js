const validation = (scheme) => {
  return (req, res, next) => {
    let params = req.method == "POST" ? req.body : req.query;
    const isValid = scheme.validate(params, { abortEarly: false });

    if (isValid.error)
      return res.status(422).send(isValid.error.details[0].message);
    if (req.method == "POST") req.body = isValid.value;

    if (req.method == "GET") req.query = isValid.value;

    next();
  };
};

module.exports= validation;
