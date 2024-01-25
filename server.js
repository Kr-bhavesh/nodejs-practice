var http = require("http");
var date_module = require('./my-module');
var url = require("url");


http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The current date time is"+" "+date_module.date_is()+" "+req.url+"\n");
    let q = url.parse(req.url,true).query;
    var q_str = q.year+" "+q.month;
    res.end(q_str);
}).listen(8080);
