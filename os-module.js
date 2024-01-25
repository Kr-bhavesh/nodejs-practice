var os = require('os');
console.log("architecture is "+os.arch());
console.log("endianess is"+os.endianness());
console.log(os.freemem()+" "+"memory is free");
console.log("host name is"+" "+os.hostname());
console.log("tmp directory is"+" "+os.tmpdir());

