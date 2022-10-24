const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios');

router.get('/recipes', async (req, res)=>{
    res.render('foods/recipes.ejs')
})

router.get('/*', async (req, res)=>{
    res.render('foods/index.ejs')
})

router.get('/:id', async (req, res)=>{
    console.log(req.params)

    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.name}&app_id=10f33fbc&app_key=43f9be24513291624d49476ed4d0dd73`)
    .then(apiResponse=>{
        let foods = apiResponse.data
        console.log(foods)
        // res.render('foods/recipes.ejs', {foods})
        res.render('foods/index.ejs', {foods})
        // res.json(foods[0].recipe.label)
    })

    res.render('foods/recipes.ejs')
})

module.exports = router