const { stack } = require("../routes/usuarios.router");
const { ValidationError } = require('sequelize');

function logsErrors(err,req,res,next){
  console.error(err);
  next(err);
}

function errorHandler(err,req,res,next){
  res.status(500).json({
    mensaje:err.message,
    stack:err.stack
  }
  );
}

function boomErrorHandler(err,req,res,next){

  if(err.isboom){
    const {output}=err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}



module.exports = {logsErrors,errorHandler,boomErrorHandler,ormErrorHandler}
