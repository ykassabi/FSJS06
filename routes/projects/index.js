import express from  'express';
import fs from 'fs';
const route = express.Router();

route.get('/project',(req,res)=>{
    res.render('project')
})