const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})

router.post('/', async (req, res)=>{
    const [newUser, created] = await db.user.findOrCreate({
        where:{
            name: req.body.name,
            email: req.body.email
        }})
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

router.get('/logout', (req, res)=>{
    console.log('logging out')
    res.clearCookie('userId')
    res.redirect('/')
})

router.get('/profile', (req, res)=>{
    res.render('users/profile.ejs')
})

router.get('/ticket', (req, res)=>{
    res.render('users/ticket.ejs')
})

router.get('/terms', (req, res)=>{
    res.render('users/terms.ejs')
})

router.get('/book/:eventId', (req, res)=>{
    res.render('users/book.ejs', {eventId: req.params.eventId})
})

router.get('/home', async (req, res)=>{
    try {
        let allEvents = await db.event.findAll({})
        res.render('home.ejs', {allEvents})
    } catch(err) {
        res.send(err)
    }
})

// POST users/book/ - 
// router.post('/book', async(req, res)=>{
//     console.log('post route')
    // const user = await db.user.findOne({where: {email: req.user.email}})
    // const user = await db.user.findOne({where: {id: req.cookies.userId}})
    // try{
    // const event = await db.event.create({
    //     where: { name: req.body.event_name },
    //     include: [db.user, db.event]})
    //     await user.addEvent(event)}catch(err){
    //         console.log(err)
    //     }
    router.post('/book/:eventId', async (req, res) => {
        // console.log('reqbody',req.body)
        try {
            const user = await db.user.findOne({ where: { 
                email: req.body.email}
                // ,
                // include:[db.event]
        })
            // console.log(user)
            const event = await db.event.findByPk(req.params.eventId)
            // console.log('event', event)
            user.addEvent(event)
            

        // user.userId.forEach(use => {
        //     event.eventId.forEach(eve => {
        //       console.log(`${user.name} name is ${event.event_type} will attend their ${event.event_type}`);
        //     })
        //   })

            // const allEvents = await db.user.getEvents()
            res.render('users/ticket.ejs', {event: event})
        } catch(err) {
            res.json(err)
        }


        router.get('/book/allEvents', async (req,res) => {
            
        })

        // db.booking.findOne({
        //   where: { eventId: req.params.id },
        //   // include: [db.author]
        //   include: [db.user, db.event]
        // })
        // .then((event) => {
        //   if (!event) throw Error()
        //   console.log(event.user)
        //   res.render('/ticket', { event: event })
        // })
        // .catch((error) => {
        //   console.log(error)
        //   res.status(400).render('main/404')
        // })
      })

    //   db.booking.create({
    //     name: req.body.name,
    //     email: req.body.email,  
    //     cpr: req.body.cpr,
    //     age: req.body.age
    //   })
    //   .then(booking =>{
    //     console.log(('data pushed'))
    //   res.redirect(`/users/home`)
    //   })
    // }
    // catch(err){
    //   console.log(err)
    // }
//   })

module.exports = router