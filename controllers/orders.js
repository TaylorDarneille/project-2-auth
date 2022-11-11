// Importing the required libraries
const express = require('express')
const db = require('../models')
const router = express.Router()
require('dotenv').config()
// ORDERS CONTROLLER




router.post('/new', async (req,res) => {

    console.log('req.body', req.body)
    await db.products.findOrCreate({
        where: {productsName: req.body.hoodieName}
    })

    res.redirect('/shop/hoodie')

})




//(Form) POST /products/new ——> redirect to /proucts/favorites

router.post('/new', async (req,res) => {
    console.log('req.body ', req.body)
    //Find user
    // let user = await db.user.findByPk(res.locals.user.id)
    let user = res.locals.user
    //Create products
    let [newProducts, created] = await db.products.findOrCreate({
        where: {
            name: req.body.name
        }
    })

    //Associate products to user
    await user.addProducts(newProducts)
    let Products = await db.products.findByPk(newProducts.id)
    // res.json(products)
    res.redirect('/shop/products')
})



// (Form) DELETE /products/delete —> redirect to /product/shop

router.delete('/:productId', async (req,res) => {

    //We need to delete products with id productsId
    //look at previous code/labs/hw/lessons
    //Search on google ---> delete item/data using sequelize
    await db.products.destroy({
        where: { id: req.params.productsId }
    })
    res.redirect('/shop/products')
})


// (Link) GET /products/:id ——> details.ejs

router.get('/:productsId', async (req,res) => {

    // Get Details of ONE products
    
    let Products = await db.products.findOne({
        where: { id : req.params.productsId},
        include: [db.comment]
    })
    
    // let productsAndComments =products.getComments()
    // res.json(products)
    res.render('products/hoodi.ejs', {products})
    })
    
    
    

// router.get('/add-products', async (req, res) => {

//     let context = {}













router.get('/home', (req, res)=>{
    res.send('my order route works!')
    // res.render('shop.ejs')
})



module.exports = router


