import express from 'express';
import restful from 'express-restful-es6';

var server = express();

var port = 5000;

server.use(express.static(__dirname + '/public'));

restful.configure(server, {
    dirname: __dirname + '/resources'
});

server.listen(port, function (err) {
    console.log("running server on port " + port);
})
