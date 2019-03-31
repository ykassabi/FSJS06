const express = require('express');

const app = express();
const PORT = 3001;

app.set('view engine' , 'pug');
app.use(express.static("public"));

const route = require('./routes');

app.use(route);





app.listen(PORT, ()=>{
    console.log(`the server is on and it is using the port: ${PORT}`);
})