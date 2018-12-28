const port = 3001;
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send("HELLO");
});

io.on('connection', function (socket) {
        console.log("NEW USER")
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.emit("data" , true);

    socket.on('leftR', leftR => {
        console.log("leftR====", leftR)
        io.emit("leftR" , leftR)
    })

    socket.on('forrward', forrward => {
        console.log("forrward=====", forrward)
        io.emit("forrward", forrward)
    })

    socket.on('mLeft', mLeft => {
        console.log("mLeft=====", mLeft)
        io.emit("mLeft", mLeft)
    })

    socket.on('up', up => {
        console.log("leftR====", up)
        io.emit("up", up)
    })



});

http.listen(port, function () {
    console.log(`listening on :${port}`);
});