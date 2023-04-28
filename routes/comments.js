const express = require("express");
const router = express.Router();

const comments = require("../util/commentData")

router.get("/", function (req, res) {
	res.status(200).json(comments);
});

router.get("/:id", function (req, res) {
	let member = comments.find(function (item) {
		return item.id == req.params.id;
	});

	member ? res.status(200).json(member) : res.status(404).json({status: 404,msg:'Error sending comments text'});
});

router.post("/:id", function (req, res) {
	const { comentario } = req.body;

	if(comentario === undefined){
		res.status(401).json({status: 404,msg:'Error sending comments text'});
		return;
	}

	let member = comments.find(function (item) {
		return item.id == req.params.id;
	});

	if(member === undefined){
		res.status(404).json({status: 404,msg:'No member found with provided id.'});
		return;
	}

	let commentId = 0;
	if(member.comentarios.length !=0){
		commentId = member.comentarios[member.comentarios.length-1].id + 1;
	}
	
	let commentObj = {
		id: commentId,
		texto: comentario
	}

	member.comentarios.push(commentObj);

	res.status(201).json(member);
});

module.exports = router;
