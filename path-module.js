var path = require('path')
var f_name=path.basename('/home/bhavesh/Documents/practise.html','.html');
var directory = path.dirname('/home/bhavesh/Documents/practise.html');
var extension = path.extname('/home/bhavesh/Documents/practise.html');
console.log(f_name);
console.log(path.delimiter);
console.log(directory);
console.log(extension);
// var emailer = require("nodemailer")
// transpoter = emailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'210120116505@git.org.in',
//         pass:'######'
//     }
// })
// var mail_options ={
//     from:'210120116505@git.org.in',
//     to:'bhavesh.b@knackroot.com',
//     subject:'Send Email through nodeemailer',
//     text:'hi i sent this mail programaticly'
// }

// transpoter.sendMail(mail_options,function(err,info){
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("email send successfull"+info.response);
//     }
// })