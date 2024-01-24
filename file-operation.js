var http = require("http");
var fs = require("fs").promises;

//create file

fs.appendFile('demo.txt','creating file through fs module',function(err){
    if (err)
    {
        throw err;
    }
    console.log("created the file");
});

// update file

fs.appendFile('demo.txt','adding some new text to file in order to update',function(err){
    if(err)
    {
        throw err;
    }
    console.log("updated the file");
});

// rename file

fs.rename('demo.txt','test-file-opr.txt',function(err){
    if(err)
    {
        throw err;
    }
    console.log("rename file successful");
})

// read file

async function readFile(filePath) {
    try {
      const data = await fs.readFile(filePath);
      console.log(data.toString());
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  }
  
readFile('test-file-opr.txt');


//delete file

fs.unlink('test-file-opr.txt',function(err){
    if(err)
    {
        throw err;
    }
    console.log("file deleted");
})