const express = require('express')
const db = require('../models')
// const { route } = require('./users')
const router = express.Router()

router.get('/mycards', (req, res)=>{
    res.render('cards/mycards.ejs')
})


router.get('/newcard', async (req, res)=>{
    // try{
        // let card = await db.cards.findOrCreate({
            // where: {
            //     cardName: req.body.cardName
            // }})
            res.render('cards/newcard.ejs')
    // }catch(err){
    //     console.log(err)
    // }
   
})

router.get('/viewcards', async (req, res)=>{
    const card = await db.card.findAll({
        
    })
    console.log(card)
    res.render('cards/viewcards.ejs',{card})
})

router.post('/newcard', async (req,res) => {
    console.log('req.body ', req.body)
    //Find user
    // let user = await db.user.findByPk(res.locals.user.id)
    let user = res.locals.user
    // let [newCard, created] = 
    await db.card.findOrCreate({
        where: {
            userId: user.id,
            cardName: req.body.cardName,
            iban: req.body.iban,
            cardNumber: req.body.cardNumber,
            expDate: req.body.expDate,
            cvc: req.body.cvc
        }
    })
    // const cardName = req.body.cardName
    // const iban = req.body.iban
    // const cardNumber = req.body.cardNumber
    // const expDate = req.body.expDate
    // const cvc = req.body.cvc

    // newCard.cardName = cardName
    // newCard.iban = iban
    // newCard.cardNumber = cardNumber
    // newCard.expDate = expDate
    // newCard.cvc = cvc

    // await newCard.save()


    // console.log(newCard)
    //Associate pokemon to user
    // await user.addCard(newCard)
    // let userCard = await db.card.findByPk(newCard.id)
    // // res.json(poke)
    res.redirect('/cards/viewcards')
})

router.delete('/viewcards/:id', async (req,res) => {
    // console.log("It is working")
    //We need to delete pokemon with id pokeId
    //look at previous code/labs/hw/lessons
    //Search on google ---> delete item/data using sequelize
    await db.card.destroy({
        where: { id: req.params.id }
    })
    res.redirect('/cards/viewcards')
})



// router.get('/deletecard', (req, res)=>{
//     res.render('cards/deletecard.ejs')
// })




    
module.exports = router