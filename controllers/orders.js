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









router.get('/home', (req, res)=>{
    res.send('my order route works!')
    // res.render('shop.ejs')
})



module.exports = router;


