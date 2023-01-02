const express=require('express')
const app=express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})

app.listen(1111,()=>{
    console.log('server started at port 1111')
})