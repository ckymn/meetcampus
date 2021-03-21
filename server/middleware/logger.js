// this middleware is custume and we should use next paramt.
const logOriginalUrl = (req, res, next) => {
  console.log(`Request URL : ${req.originalUrl}`);
  // next other middleware use
  next();
};

const logMethod = (req, res, next) => {
  console.log("Requset Type : ", req.method);
  next();
};

module.exports = [logOriginalUrl,logMethod]
