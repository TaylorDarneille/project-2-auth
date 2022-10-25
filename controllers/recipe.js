const express = require('express')
const db = require('../models')
const router = express.Router()
const request = require('request')
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
let  recipeUrl = '';
let encoded = '';

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})
router.get('/', function(req, res) {
	let recipe = null;
	 queryString = req.query.search;
	let healthOption = req.query.selectionbox;

	//encodeURI() 
	if (!(healthOption === 'null')) {
		recipeUrl = 'https://api.edamam.com/search?app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY + '&q=' + queryString + '&health=' + healthOption + '&to=100';
	} else {
		recipeUrl = 'https://api.edamam.com/search?app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY + '&q=' + queryString + '&to=300';
	};
    request(recipeUrl, function(error, response, body) {
    	try {
    		recipe = JSON.parse(body);
			console.log(recipe)
            console.log('json api data', recipe.hits[0])
			recipe.hits.forEach(r => {
				r.recipe.calories = Math.floor(r.recipe.calories)
				r.recipe.yield = Math.floor(r.recipe.yield)
				r.recipe.calPerServ = Math.floor(r.recipe.calories/r.recipe.yield)
			})
            res.render('recipes/allnew', { recipe });
    	} catch(err) {
            console.log('oop! there was an issue restrieving API', err)
            res.json(err)
          }
    })
})


module.exports = router;

// <% recipe.hits.forEach(r => { %>
// 	<p><%= r.recipe.label %></p>
//   <%}) %>

// <form id='sub' method="POST" action="/profile">
//     <input class='center' hidden type="text" name="title" value="<%= recipe.recipe.title %>">
//     <input class='center' hidden type="text" name="ingredients" value="<%= recipe.recipe.ingredientLines %>">
//     <input class='center' hidden type="text" name="url" value="<%= recipe.recipe.url %>">
//     <input class='center' hidden type="text" name="uri" value="<%= recipe.recipe.uri %>">
//     <input class='center' hidden type="text" name="image" value="<%= recipe.recipe.image %>">
//     <% let encoded = encodeURIComponent( recipe.recipe.uri ); %>
//     <a class='left' href="/recipes/show/<%= encoded %>">View Details</a>
//     <a class='right' href="<%= recipe.recipe.url %>">Link to source</a>
//     <%if (currentUser) { %>
//     <button class='add-favorite btn-col s12 m12 l12' type="submit">Add to &hearts;s</button>
//     <% } %>
//      <%if (!currentUser) { %>
//        <a href='/user/login' class='add-favorite btn-col s12 m12 l12'>Log In to Add to &hearts;s</a>
//      <% } %>
//     <br>
//   </form>

