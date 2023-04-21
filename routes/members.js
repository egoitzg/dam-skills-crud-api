const express = require("express");
const router = express.Router();

const members = require("../util/memberData");
const points = require("../util/pointsData")

router.get("/", function (req, res) {
	res.status(200).json(members);
});

router.get("/:id", function (req, res) {
	let member = points.find(function (item) {
		return item.id == req.params.id;
	});

	member ? res.status(200).json(member) : res.sendStatus(404);
});

router.post("/puntuacion/:id", function (req, res) {
	const { categoria, puntuacion } = req.body;

	if(categoria === undefined || puntuacion === undefined){
		res.status(404).json({status: 404,msg:'Error sending category or points parameters.'});
		return;
	}

	let member = points.find(function (item) {
		return item.id == req.params.id;
	});

	if(member === undefined){
		res.status(404).json({status: 404,msg:'No member found with provided id.'});
		return;
	}

	let pointId = 0;
	if(member.puntuaciones.length !=0){
		pointId = member.puntuaciones[member.puntuaciones.length-1].id + 1;
	}
	
	let pointsObj = {
		id: pointId,
		categoria: categoria,
		puntuacion: puntuacion
	}

	member.puntuaciones.push(pointsObj);

	res.status(201).json(member);
});

module.exports = router;
