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

module.exports = routes