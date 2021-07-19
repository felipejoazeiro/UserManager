const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    return res.render("index")
})

routes.get('/login',(req,res)=>{
    return res.render('login')
})

routes.get('/register',(req,res)=>{
    return res.render('register')
})
routes.post('/register',(req,res)=>{
    const keys = Object.keys(req.body)
    
    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Please, fill all fields')
        }
    }

    return res.send(req.body)
})

module.exports = routes