var data = require("../data.json");

exports.addFriend = function(req, res) {    
	req.query.name
	req.query.description
	newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/500/500/people",
	};
	console.log(data);
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add', data);
 };