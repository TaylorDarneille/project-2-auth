// Importing the required libraries
const express = require('express')
const db = require('../models')
const router = express.Router()
require('dotenv').config()

router.get('/home', (req, res)=>{
    res.render('shop.ejs')
})


router.get('/glasses', (req, res)=>{
    res.render('shop/glasses.ejs')
})

router.get('/Frames', (req, res)=>{
    res.render('shop/Frames.ejs')
})

router.get('/glasses-chain', (req, res)=>{
    res.render('shop/glasses-chain.ejs')
})

router.get('/search',  (req, res) => {
    
    let search = req.query.searchBar

    console.log(search)

    //    const product = await db.product.findOne({
    //         where: {
    //             glasses: req.body.glasses,
    //             frames: req.body.frames
                
    //         } 
    //     })   
    
    res.render('shop.ejs')
                
// get data from database
// let allglasses = await db.glasses.findOrCreate({ where : { glasses: req.query.searchBar }})

// res.render('show.ejs', {allglasses})

})


// router/this.post('/')

// module.exports = router


module.exports = router;

