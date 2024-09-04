const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp@gmail.com',
    port:465,
    secure: true,
    auth:{
        user:'mohitgour0009@gmail.com',
        pass:'imwbsklelifzgydv'
    },
})

module.exports = transporter;