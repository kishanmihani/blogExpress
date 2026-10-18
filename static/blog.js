const express= require('express');
const router= require(express.Router());


router.get('/',(req,res)=>{
    res.send('Hello World from blog.js');
})