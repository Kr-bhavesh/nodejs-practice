var path = require('path')
var f_name=path.basename('/home/bhavesh/Documents/practise.html','.html');
var directory = path.dirname('/home/bhavesh/Documents/practise.html');
var extension = path.extname('/home/bhavesh/Documents/practise.html');
console.log(f_name);
console.log(path.delimiter);
console.log(directory);
console.log(extension);
