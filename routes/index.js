const express = require('express');
const fs = require('fs');
const route = express.Router();

// preparing data from jason file
const aa = fs.readFileSync('./data/data.json','utf8', (d)=>{
    });
const dataObj = JSON.parse(aa);


route.get('/favicon.ico', (req, res, next) =>{
     res.sendStatus(204);
})


// Routing Homepage
route.get('/',(req, res,next)=>{
    res.render("index",{ data: dataObj.projects});
    // next()
})

// Routing about
route.get('/about',(req, res)=>{
    res.render("about");
})



// Routing  Projects URL
route.get('/project', (req,res, next)=>{
        res.redirect("/")
})

route.get('/project/:id', (req,res)=>{

    let theID = req.params.id;
    let nextProject = Number(theID) === 6 ? 0: Number(theID)+1
    
    if(isNaN(Number(theID))){
        res.redirect("/")
    }else if((Number(theID)) > dataObj.projects.length){
        res.redirect("/")
    }else{
    res.render(`project`, {
        curProject : dataObj.projects[theID], 
        nextProject : nextProject 
        });
    }
})






module.exports = route;