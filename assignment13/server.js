"using strict"

const express = require('express');
const server = express();

server.set('port', process.env.PORT || 3000);

server.get('/',(request,response)=>{
    response.sendFile(__dirname + "/index.html");
});

server.get('/about',(request,response)=>{
    response.send("About Page");
});

// what port to run server on
server.listen(3000, function () {
    console.log('server started on port 3000');
  });