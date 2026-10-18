const express= require('express');
const routes= express.Router();
const path= require('path');
const blogs= require('../data/blogs').blogs;
routes.get('/',(req,res)=>{
    res.render('home');
})
routes.get('/blog',(req,res)=>{
    res.render('bloghome',{blogs:blogs});
})
routes.get('/blogpost/:slug',(req,res)=>{
     const myblog= blogs.find(blog=>blog.slug===req.params.slug);
   console.log(myblog);
    res.render('blogPage',{ blog:myblog});
})

routes.get('/blogposts/:slug',(req,res)=>{
   const myblog= blogs.find(blog=>blog.slug===req.params.slug);
   console.log(myblog);
    
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})

module.exports= routes;