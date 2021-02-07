let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

app.get("/", function (req, res) {
	res.send("hello, Node.js!");
});

app.get("/test", function(req, res){
	let x = req.query.x;
	response.send("you send " + x + "for me");
})

app.listen(8080);