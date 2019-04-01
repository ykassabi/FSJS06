const express = require('express');
const path = require('path');
const createError = require('http-errors');
const app = express();
const PORT = 4000;

app.set('view engine' , 'pug');
app.set('views', path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

const route = require('./routes');

app.use("/", route);

app.use((req,res,next)=> next(createError(404, 'File not Found')))

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.status = err.status || 500;
    res.locals.error = err;
    console.log(`Sorry ! the requested url  \" ${req.url} \" does\'t exist!`)
    return res.render('err')})



app.listen(PORT, ()=>{
    console.log(`the server is on and it is using the port: ${PORT}`);
})