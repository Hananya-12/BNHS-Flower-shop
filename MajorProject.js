var express = require('express')  
var app = express()  
app.set("view engine", "ejs");
app.get('/SignUpPage', function(req, res){
	res.sendFile(__dirname + "/SignUpPage.html")
})
app.get('/SignupSubmit', function(req, res){
	console.log(req.query.fname);
	console.log(req.query.lname);
	console.log(req.query.email);
	console.log(req.query.ps);
	console.log(req.query.cps);
	res.sendFile(__dirname+"/dashboard.html")
})
app.get('/Loginpage', function (req, res) {  
res.sendFile(__dirname+"/Loginpage.html")  
})
app.get('/LoginSubmit', function(req, res){
	console.log(req.query.email);
	console.log(req.query.psw);
	res.sendFile(__dirname+"/dashboard.html")
})
app.get('/addressdetails', function(req, res){
	res.sendFile(__dirname+"/addressdetails.html")
})
app.get('/thankyou', function(req, res){
	console.log(req.query.add);
	console.log(req.query.city);
	console.log(req.query.dis);
	console.log(req.query.code);
	console.log(req.query.state);
	res.sendFile(__dirname+"/thankyou.html")
})
app.listen(1805, function () {  
console.log('Example app listening on port 1805!')  
})
