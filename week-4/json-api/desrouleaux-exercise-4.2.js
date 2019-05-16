var express = require("express");

var http = require("http");

var app = express();

app.get("/NowShowing/:movie", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        title: "batman",

        rating: "pg-13",

        MovieTime: "7:30pm"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
