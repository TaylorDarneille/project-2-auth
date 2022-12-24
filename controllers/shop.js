// Importing the required libraries
const express = require('express')
const db = require('../models')
const Op = require('sequelize').Op
const router = express.Router()
require('dotenv').config()

router.post('/order', async (req,res) => {
    // add item to favorites
        const id = req.body.capID
        console.log(id);
    
        let order = await db.orders.findOrCreate({ 
            where: {
                id: 1
                //id: req.user.id
            }
        })
        console.dir(order)
        //await order.addProducts(req.body.capID)
        await order.getProducts()
        console.log(order)
       res.render('favorites.ejs', {order})
       // res.redirect('/shop/order')
    
    })


router.get('/:products', async (req, res)=>{

    
    try {
        let products = req.params.products.toLowerCase()
        console.log('products' , products)
        const allcap = await db.products.findAll({
            where: {
                category: {
                    [Op.like]: `%${products}%`
                }
            }
        })
        console.log('allcap' , allcap)
            res.render('shop/cap.ejs', {allcap: allcap})

      } catch(err) {
        console.log(err)
        res.send(err)
}
})

router.get('/shop/T-shirt', (req, res)=>{
    res.render('shop/T-shirt.ejs')
})


router.get('/shop/order', (req, res)=>{
    res.render('home.ejs')
})

router.delete('/:productId', async (req,res) =>{

    //we need to delete + with id productsId

    await db.product.destroy({

        where: { id: req.params.productId}
    })
    
    res.redirect('/product/order')
})

router.get('/add-products', async (req, res) => {

    let context = {}

    const categories = await db.product.getAttributes().category.values


    context.categories = categories


    res.render('users/add-product', context)
})



//router.get('/order', (req, res)=>{
  //  res.render('shop.ejs')
//})



router.post('/order', async (req,res) => {
// add item to favorites
    const id = req.body.capID
    console.log(id);

    let order = await db.orders.findOrCreate({ 
        where: {
            id: req.body.capID
        }
    })

    console.log(order)
    res.redirect('/shop/order')

})



module.exports = router
















// router.get('/product', async (req, res)=>{

//     try {
//         const products = await db.product.findAll({
//             where: {
//                 type: "products"
//             }
//         })
//         res.render('shop/product.ejs', {products: products})
//       } catch(err) {
//         res.send(err)
//       }


// })

// router.get('/search',  (req, res) => {
    
    
//     let search = req.query.searchBar

//     console.log(search)
//     res.render('shop.ejs')

//    
