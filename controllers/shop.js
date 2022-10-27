// Importing the required libraries
const express = require('express')
const db = require('../models')
const router = express.Router()
require('dotenv').config()





router.get('/shop/Order', (req, res)=>{
    res.render('Order.ejs')
})

router.get('/:product', async (req, res)=>{
    try {
        let product = req.params.product.toLowerCase()
        const allFrames = await db.product.findAll({
            where: {
                category: product
            }
        })
        console.log(allFrames)
            res.render('shop/frames.ejs', {allFrames: allFrames})

      } catch(err) {
        res.send(err)
}
})

router.delete('/:productId', async (req,res) =>{

    //we need to delete pokemon with id productsId

    await db.product.destroy({

        where: { id: req.params.productId}
    })
    
    res.redirect('/product/orders')
})

// router.get('/:price', async (req, res)=>{
//     // get price
//     try {
//         let product = req.params.product.toLowerCase()
//         const allFrames = await db.product.findAll({
//             where: {
//                 price : product
//             }
//         })
//         console.log(allFrames)
//             res.render('shop/glasses.ejs', {allFrames: allFrames})

//       } catch(err) {
//         res.send(err)
// }
// })



// router.get('/Frames', async (req, res)=>{
//     try {
//         const allFrames = await db.product.findAll({
//             where: {
//             category: "frames"
//             }
//         })
//         console.log(allFrames)
//         res.render('shop/Frames.ejs', {allFrames})
//       } catch(err) {
//         res.send(err)
// }
// })

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


router.get('/chain', (req, res)=>{
    res.render('shop/chain.ejs')
})

router.get('/order', (req, res)=>{
    res.render('shop/order.ejs')
})



router.get('/search',  (req, res) => {
    
    
    let search = req.query.searchBar

    console.log(search)

   //    const product = db.product.findOne({
    //         where: {
    //            glasses: req.body.glasses,
    //            frames: req.body.frames
     //           chain: req.body.chain
     //       } 
     //  })   
    
    res.render('shop.ejs')
                
// get data from database
// let allglasses = await db.glasses.findOrCreate({ where : { glasses: req.query.searchBar }})

// res.render('show.ejs', {allglasses})

})


// router/this.post('/')



// module.exports = router


module.exports = router;


