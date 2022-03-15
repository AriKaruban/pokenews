const express=require('express');
const getNews=require('./getNews.js').getNews
const app=express();
const path=require('path');
const port=process.env.PORT || 3000;
app.use('/',express.static(path.join(__dirname,'compiled')));

app.listen(port,()=>{
    console.log(__dirname)
    console.log('App is listening')
    getNews()
})