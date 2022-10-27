const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')

router.get('/contact', (req, res)=>{
    res.render('contact.ejs')
})

router.get('/about', (req, res)=>{
    res.render('about.ejs')
})

// router.post('/newOrder', async (req,res) => {

//     console.log('req.body', req.body)

//     let user = res.locals.user
//     let [myorder , created] = await db.product.findOrCreate({
//         where: {
//             name: req.body.name
//         }
//     })
//     await user.addOrder.id(myorder)
//     let cart = await db.order.findByPk(cart)
//     res.json(myorder)




//     // await db.user.find .. .. ..
//     // await db.order.findOrCreate({ .. .. req.body
//     // await db.product.find .. .. req.body 



//     // res.redirect('/users/myorder')
// })

// router.get('/cart' )

// router.get('/myorder', (req,res) => {

// })

router.get('/Cart', (req, res)=>{
    res.render('Cart.ejs')
})

router.get('/home', (req, res)=>{
    res.render('home.ejs')
})

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})


router.post('/', async (req, res)=>{
    const [newUser, created] = await db.user.findOrCreate({where:{email: req.body.email}})
    if(!created){
        console.log('user already exists')
        res.render('users/login.ejs', {error: 'Looks like you already have an account! Try logging in :)'})
    } else {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        newUser.password = hashedPassword
        await newUser.save()
        const encryptedUserId = cryptojs.AES.encrypt(newUser.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.post('/login', async (req, res)=>{
    const user = await db.user.findOne({where: {email: req.body.email}})
    if(!user){
        console.log('user not found')
        res.render('users/login', { error: "Invalid email/password" })
    } else if(!bcrypt.compareSync(req.body.password, user.password)) {
        console.log('password incorrect')
        res.render('users/login', { error: "Invalid email/password" })
    } else {
        console.log('logging in the user!!!')
        const encryptedUserId = cryptojs.AES.encrypt(user.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})

router.get('/shop', async (req,res) => {

    try {
        let allProducts = await db.product.findAll() 
        res.render('shop.ejs', {allProducts})
    } catch(err) {
        res.json(err)
    }
})

router.get('/logout', (req, res)=>{
    console.log('logging out')
    res.clearCookie('userId')
    res.redirect('/')
})

router.get('/profile', (req, res)=>{
    res.render('users/profile.ejs')
})

module.exports = router


