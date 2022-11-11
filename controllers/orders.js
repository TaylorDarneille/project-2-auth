// Importing the required libraries
const express = require('express')
const db = require('../models')
const router = express.Router()
require('dotenv').config()
// ORDERS CONTROLLER




router.post('/new', async (req,res) => {

    console.log('req.body', req.body)
    await db.product.findOrCreate({
        where: {productName: req.body.hoodieName}
    })

    res.redirect('/shop/hoodie')

})




// (Form) POST /products/new ——> redirect to /proucts/favorites

// router.post('/new', async (req,res) => {
//     console.log('req.body ', req.body)
//     //Find user
//     // let user = await db.user.findByPk(res.locals.user.id)
//     let user = res.locals.user
//     //Create products
//     let [newProducts, created] = await db.products.findOrCreate({
//         where: {
//             name: req.body.name
//         }
//     })
//     //Associate pokemon to user
//     await user.addPokemon(newPokemon)
//     let poke = await db.pokemon.findByPk(newPokemon.id)
//     // res.json(poke)
//     res.redirect('/pokemon/favorites')
// })


// router.get('/add-products', async (req, res) => {

//     let context = {}













router.get('/home', (req, res)=>{
    res.send('my order route works!')
    // res.render('shop.ejs')
})



module.exports = router


