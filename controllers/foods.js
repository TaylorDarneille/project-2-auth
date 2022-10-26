const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios');

router.get('/recipes', async (req, res)=>{

    try {
        const allFoods = await db.food.findAll()
        res.render('foods/recipes.ejs', {allFoods: allFoods})
      } catch(err) {
        res.send(err)
      }

    // res.render('foods/recipes.ejs')
})

router.get('/search', async (req, res)=>{
    console.log(req.params)

    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.query.q}&app_id=10f33fbc&app_key=43f9be24513291624d49476ed4d0dd73`)
    // APICall(req.query.q)
    .then(apiResponse=>{
        let foods = apiResponse.data.hits
        // console.log(foods)
        // res.render('foods/recipes.ejs', {foods})
        res.render('home.ejs', {foods})
        // res.json(foods[0].recipe.label)
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/recipes', async (req, res)=>{

    // let [food, created] = await db.food.findOrCreate({
    //     where: {name:'test'}
    // })
    // console.log(food)
    // res.json(food)

    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.body.name}&app_id=10f33fbc&app_key=43f9be24513291624d49476ed4d0dd73`)
    // APICall(req.body.name)
    .then(apiResponse=>{
        let foodData = apiResponse.data.hits[0]
        db.food.findOrCreate({
            where: {
              // name: req.body.name
                name: foodData.recipe.label,
                recipe: foodData.recipe.ingredientLines.toString(),
                calories: foodData.recipe.calories,
                image: foodData.recipe.image
            }
          })
    })
    .catch(err => {
        res.send(err)
    })
    .then (() => {
        res.redirect('/foods/recipes')
  })
  .catch(err => {
      console.log(err)
      res.send(err)
  })

})

router.get('/:name', async (req, res)=>{
    console.log(req.params)

    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.name}&app_id=10f33fbc&app_key=43f9be24513291624d49476ed4d0dd73`)
    // APICall(req.params.name)
    .then(apiResponse=>{
        let food = apiResponse.data.hits[0]
        // console.log(food)
        res.render('foods/index.ejs', {food})
        // res.render('home.ejs', {foods: [foods]})
        // res.json(foods[0].recipe.label)
    })
    .catch(err => {
        res.send(err)
    })
})

// const APICall = (query) => {
//     axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=10f33fbc&app_key=43f9be24513291624d49476ed4d0dd73`)
// }

module.exports = router