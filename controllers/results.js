let express = require('express')
let router = express.Router()
const axios = require('axios')



// router.post(.../:bookID ... ..
// req.params.bookID

// await db.reviews.findOrCreate({\
  // where: {
        // name: req.body.name
        //bookId: req.params.bookId
  // }
// })


// )




router.get('/', (req, res)=>{

    let Search = req.query.s
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Search}&key=${process.env.API_KEY}`)
  .then((response)=>{
    // console.log(response.data.items[0].volumeInfo)
    // res.send(response.data)
    res.render ('results',{ BooksArry: response.data.items})
  })
  .catch (err=>{
    console.log("there was an issue retrieving  API")
  })
})



module.exports = router