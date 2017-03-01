var express = require('express')
var app = express()
// var path = require('path')

app.use(express.static(__dirname + '/view'))
app.use(express.static(__dirname + '/res'))
app.use(express.static(__dirname + '/res/img'))

app.get('/', function (req, res) {
	res.sendFile('index.html')
})

app.listen(8080, function () {
	console.log('Example app listening on port 8080!')
})
