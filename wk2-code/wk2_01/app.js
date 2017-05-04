// this is where we make our server
//Load our Libraries
var express = require('express')
var app = express()
var path = require('path')
var rn = require('random-number').generator({min: 0, max: 1000, integer: true})
app.set('view engine', 'pug')
// public folder
app.use(express.static(path.join(__dirname, 'public')));

//Handle our requests to the server
app.get('/', function (req, res) {
	res.render(
        // this is the same name as the template name. in this case index.pug
        // which template to use
        // then pass a json string with the title and message
		'index',
		{ title: 'Pugs are awesome!', h1: 'i love pugs', message: rn()})
})

//Add another route for the server
app.get('/add', function (req, res) {
	res.render(
		'dogs', // smae name as template ! dogs.pug
		{ title: 'Add a Dog !', message: 'My List of Pups'})
})

//Add error route for the server
app.get('*', function (req, res) {
	res.render(
		'error', // smae name as template ! dogs.pug
		{ title: 'ERROR !', message: 'this is an error page'})
})

//Start our server
app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
