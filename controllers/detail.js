let express = require('express')
let router = express.Router()
const axios = require('axios')
const db = require('../models')



router.get('/:volumeId',(req , res)=>{
    let results;
    let id = req.params.volumeId
    // let Search = req.query.s\
    db.review.findAll({
        where: {bookId: req.params.volumeId},
        include: [db.user]
    })
    .then(result =>{
        results = result;
    });
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.API_KEY}`)
    .then((response)=>{
        // ['AVAILABLE', 'TAKEN']
        // console.log(response.data)
        response.data.status = 'AVAILABLE'
        // response.data.volumeInfo.description = response.data.volumeInfo.description.replace('<br>', ' ')
        // response.data.volumeInfo.description = response.data.volumeInfo.description.replace('</br>', ' ')
        // response.data.volumeInfo.description = response.data.volumeInfo.description.replace('<b>', ' ')
        // response.data.volumeInfo.description = response.data.volumeInfo.description.replace('</b>', ' ')
        // response.data.volumeInfo.description = response.data.volumeInfo.description.replace(' <i> ', ' ')
        // response.data.volumeInfo.description = response.data.volumeInfo.description.replace('</i>', ' ')
        // console.log(response.data.volumeInfo.description)
        // res.send(results)
        res.render ('detail',{ books: response.data, reviews: results})
      
    })
    .catch (err=>{
       console.log(err)
    })
      
})

router.post('/:id/reviews', (req,res)=>{
    try{
      db.review.create({
        // username:req.body.username,
        review:req.body.review,
        userId: res.locals.user.id,
        bookId:req.params.id
      })
      
      .then(newComment =>{
        res.redirect(`/detail/${req.params.id}`)
       
      })
  
    }catch(err){
        res.send(err)
      console.log(err)
    }
    
})




module.exports = router