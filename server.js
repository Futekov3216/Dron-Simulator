const port = 3001;
var app = require('express')();
var http = require('http').Server(app);
var https = require('https');
const fs = require('fs');
var io = require('socket.io')(http);

var https_options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),

};
// const host = "http://10.10.0.239:3000/"
app.get('/', function (req, res) {
    res.send("HELLO");
});

io.on('connection', function (socket) {
    // console.log(socket.handshake.headers.referer)
    // if (socket.handshake.headers.referer != host){
    //     socket.disconnect(true)
    // }
    // console.log("NEW USER", socket.handshake.headers.referer)
    socket.on('disconnect', function (res) {
        console.log("DISCONNECTED USER ee")
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
    socket.on('land', land => {
        console.log("land====", land)
        io.emit("land", land)
    })

});

http.listen(port, function () {
    console.log(`listening on :${port}`);
});

// https.createServer(https_options, app).listen(port, () => {
//     console.log(`zdre ot ${port}`)
// })