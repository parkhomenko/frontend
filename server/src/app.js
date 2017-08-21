import express from "express";
import restful from "express-restful-es6";

var server = express();

var port = 5000;

server.use(express.static(__dirname + "/public"));

restful.configure(server, {
    dirname: __dirname + "/resources"
});

server.use((error, req, resp, next) => {
    resp.send({
        status: "error",
        message: error
    });
    next();
});

server.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.log("running server on port " + port);
    }
});
