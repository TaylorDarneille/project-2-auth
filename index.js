const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
require('dotenv').config()
const axios = require('axios');

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

// AUTHENTICATION MIDDLEWARE
app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else res.locals.user = null
    next()
})

// CONTROLLERS
app.use('/users', require('./controllers/users'))
app.use('/foods', require('./controllers/foods'))

// ROUTES
app.get('/', (req, res)=>{

    // // API
    // axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=10f33fbc&app_key=43f9be24513291624d49476ed4d0dd73`)
    // .then(apiResponse=>{
    //     let foods = apiResponse.data.hits
    //     res.render('foods/recipes.ejs', {foods})
    //     // res.json(foods[0].recipe.label)
    // })
    res.render('home.ejs')

})

app.listen(8000, ()=>{
    console.log('Project 2 Express Authentication')
})