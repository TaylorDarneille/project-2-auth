let express = require('express')
let router = express.Router()
const axios = require('axios')



router.get('/:volumeId',(req , res)=>{
    let id = req.params.volumeId
    // let Search = req.query.s
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.API_KEY}`)
    .then((response)=>{
        // ['AVAILABLE', 'TAKEN']
        // console.log(response.data)
        response.data.status = 'AVAILABLE'
        response.data.volumeInfo.description = response.data.volumeInfo.description.replace('<br>', '')
        response.data.volumeInfo.description = response.data.volumeInfo.description.replace('</br>', '')
        response.data.volumeInfo.description = response.data.volumeInfo.description.replace('<b>', '')
        response.data.volumeInfo.description = response.data.volumeInfo.description.replace('</b>', '')
        response.data.volumeInfo.description = response.data.volumeInfo.description.replace(' <i> ', '')
        response.data.volumeInfo.description = response.data.volumeInfo.description.replace('</i>', '')
        console.log(response.data.volumeInfo.description)
        // res.send(response.data)
        res.render ('detail',{ books: response.data})
      
    })
    .catch (err=>{
       console.log(err)
    })
      
})




module.exports = router