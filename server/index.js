let express = require("express");
let app = express();

app.get("/", function (req, res) {
	res.send("hello, Node.js!");
});

app.get("/test", function(req, res){
	let x = req.query.x;
	response.send("you send " + x + "for me");
})

app.listen(8080);