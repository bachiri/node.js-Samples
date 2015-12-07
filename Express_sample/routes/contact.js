var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {


	var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bachiri.abderrahman@gmail.com',
        pass: 'blablabla'
    }
});

	// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'bachiri abderrahman <bachiri.abderrahman@gmail.com>', // sender address 
    to: 'bachiri.abderrahman@gmail.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Message ', // plaintext body 
    html: '<b>You got a validation Message hhh   '+req.body.name+'✔</b>' // html body 
};
 

// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
         console.log(error);
         res.redirect('/');
    }
    console.log('Message sent: ');
 
});
});


module.exports = router;
