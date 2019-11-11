"using strict"
/*const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    let path = url.parse(request.url).pathname;
    console.log(path);

    if(path == '/'){
    response.writeHead(200, {'Content-Type': 'text/plain'}); // status code
    response.write("Welcome to my website"); // write to webpage
    }
    else if(path == '/about'){
        response.writeHead(200, {'Content-Type': 'text/plain'}); // status code
        response.write("About Page"); // write to webpage
    }
    else if(path == '/pics'){
        response.writeHead(200, {'Content-Type': 'text/plain'}); // status code
        response.write("Pictures Page"); // write to webpage
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/plain'}); // status code
        response.write("Error Page"); // write to webpage
    }
    response.end();
});

server.listen(3000, ()=> console.log("we created our server"));
*/

const express = require('express');
const server = express();

server.set('port', process.env.PORT || 3000);

server.get('/',(request,response)=>{
    response.send("Home Page");
});

server.get('/about',(request,response)=>{
    response.send("About Page");
});

server.use('/',(request,response)=>{
    response.type('text/plain');
    response.status(404);
    response.send('error page');
});