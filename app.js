"use strict";           //Help keep the formatting in check 

const express = require('express');     //TO use express for file communication 
const app = express();                  // 
const server = require('http').createServer(app);   //Creating a server
const fs = require('fs');
const io = require('socket.io')(server);  //loads and initializes socket IO

app.get('/', function(req, res){res.sendFile(__dirname + '/client/index.html');});
app.use('/client', express.static(__dirname + '/client'));

server.listen(2000);
console.log("Server Started.");


io.sockets.on('connection', function(socket)    //When there is a connection the function is called
{
    console.log('socket connection'); //Console log  displaying socket connection when page is loaded???
    socket.on('Output Test', function()
    {
     console.log('Output Test');
});
});

