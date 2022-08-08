const express = require('express');
const routerApi = require('./routes');

const {errorHandler,logsErrors,boomErrorHandler,ormErrorHandler} = require('./middlewares/error.handler');

const app=express();
const port=3000;

app.use(express.json());

routerApi(app);
app.use(logsErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);




app.listen(port,()=>{
console.log('puerto',port);
});
