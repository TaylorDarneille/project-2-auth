// const express = require('express')
// const db = require('../models')
// const router = express.Router()
// const cryptojs = require('crypto-js')
// require('dotenv').config()
// const bcrypt = require('bcrypt')



// // router.get('/ticket', (req, res)=>{
// //     res.render('users/ticket.ejs')
// // })

// router.get('/ticket', async (req, res)=>{
//     try {
//         let allBookings = await db.user.findAll({
//             include: [db.event]
//         })
//         res.render('home.ejs', {allBookings})
//         console.log("hey nigga"+allBookings)
//     } catch(err) {
//         res.send(err)
//     }
// })


// module.exports = router