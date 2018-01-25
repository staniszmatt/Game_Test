"use strict";           //Help keep the formatting in check 

const express = require('express');     //TO use express for file communication 
const app = express();                  // 
const serv = require('http').Server(app);

app.get('/', function(reg, res){res.sendFile(__dirname + '/client/index.html');});
app.use('/client', express.static(__dirname + '/client'));

serv.listen(2000);
console.log("Server Started.");

const io = require('socket.io')(serv, {});  //loads and intitializes socket IO
io.sockets.on('connection', function(socket)
{
    console.log('socket connection');
});

