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

var SocketList = {}; // Create list used for a socket list. 

io.sockets.on('connection', function(socket)    //When there is a connection the function is called
{
    socket.id = math.random(); //setup  id's for players example
    socket.x = 0;
    socket.y = 0; 
    SocketList[socket.id]=socket; 
    
    //console.log('socket connection'); //Console log  displaying socket connection when page is loaded???
   // socket.on('Output Data Test', function(data) //function call for data, any data from client
    //{
    // console.log('Output Data is ' + data.reason);
     //socket.emit('serverMsg', {msg:'Hello From Server',}); //Sending message from server to client
});
//});

setInterval(function(){for(const i in SocketList){const socket = SocketList[i]}},1000/25);//Loop setup to loop every 45mS to update positions
    socket.x++;
    socket.y++;
    socket.emit('NewPosition', {x:socket.x, y:socket.y});