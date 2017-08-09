import express from 'express';
import restful from 'express-restful-es6';

var server = express();

var port = 5000;

restful.configure(server, {
    dirname: __dirname + '/resources'
});

server.listen(port, function (err) {
    console.log("running server on port " + port);
})
