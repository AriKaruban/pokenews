const express=require('express');
const app=express();
const path=require('path');
const port=process.env.port || 3000;
app.use('/',express.static(path.join(__dirname,'pokenews')));

app.listen(port,()=>{
    console.log(__dirname)
    console.log('App is listening')
})