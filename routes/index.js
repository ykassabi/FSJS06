const express = require('express');
const fs = require('fs');
const route = express.Router();


const aa = fs.readFileSync('./data/data.json','utf8', (d)=>{
    });
const dataObj = JSON.parse(aa);



route.get('/',(req, res,next)=>{
    res.render("index",{ data: dataObj.projects});
    next()
})

route.get('/about',(req, res)=>{
    res.render("about");
})

route.get('/project/:id', (req,res)=>{
    if(isNaN(Number(req.params.id))){
        res.send("is naaaan")
    }else if((Number(req.params.id)) > dataObj.projects.length){
        res.send("it s not in ")
    }else{
    res.render(`project`, {curProject : dataObj.projects[req.params.id] });
    }
})


route.use((err,req,res,next)=>{
    console.log('error here')
    res.status(500).send(`Alert !! : ${err.stack}`)
})




module.exports = route;