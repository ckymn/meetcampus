module.exports = (err,req,res,next) =>{
    res.status(err.statuscode).json(err);
}