// server.js

    // set up ========================
    var express  = require('express');
    /////// library to use with node app
    var nodemailer = require("nodemailer")
    var app      = express();                               // create our app w/ express
    var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
    user: "yourID@gmail.com",
    pass: "Your Gmail Password"
    }
    });


    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


    // configuration =================

    mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // listen (start app with node server.js) ======================================
		/////// environment in production or development, change it from the server 
		///// default to 3000 since we are not setting the port
		var port = process.env.PORT || 3000;

        app.get('/',function(req,res){
            res.sendfile('index.html');
        });
        app.get('/send',function(req,res){
            var mailOptions={
            to : req.query.to,
            subject : req.query.subject,
            text : req.query.text
            }   
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
            console.log(error);
            res.end("error");
            }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
            }
            });
        });

		//// listen to the var port
		app.listen(port);

		//// cool, the server is running
		console.log('server running on port ' + port);


