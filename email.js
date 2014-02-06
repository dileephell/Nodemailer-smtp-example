var express = require('express'),
    http = require('http'),
    app = express();

var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
        service: 'Mandrill', // use well known service.
                            // If you are using @gmail.com address, then you don't
                            // even have to define the service name
        auth: {
            user: "dileep@gmail.com",
            pass: "4gHKXAIFdF1KSKcxkixc7g"
        }
    });

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'Sender Name <dileep@gmail.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <dileep@yahoomail.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', //

    headers: {
        'X-Laziness-level': 1000
    },

    // plaintext body
    text: "Hello world\n"+
          "===========\n"+
          "\n"+
          "**How** are you?"

    
    
};

console.log('Sending Mail');
transport.sendMail(message, function(error){
    if(error){
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');

    // if you don't want to use this transport object anymore, uncomment following line
    //transport.close(); // close the connection pool
});

http.createServer(app).listen(4000, function () {
    console.log("Express server listening on port %d in %s mode",
                4000, app.settings.env);
});
