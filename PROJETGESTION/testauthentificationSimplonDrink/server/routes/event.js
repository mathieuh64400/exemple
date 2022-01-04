const express = require("express")
const router = express.Router()
const Events = require("../models/Event");

router.get("/Event", async (req, res) => {
	const Event = await Events.find()
	res.send(Event);
})
router.get("/Event/:id", async (req, res) => {
	const Event= await Events.findOne({ _id: req.params.id })
	res.send(Event)
})
router.post("/Event", async (req, res) => {
	const Event = new Events({
		titre: req.body.titre,
        contenu: req.body.contenu,author:req.body.author,date:req.body.date,imgUrl:req.body.imgUrl

	})
	await Event.save()
	res.send(Event)
})
router.patch("/Event/:id", async (req, res) => {

	try {
		console.log(req.param.id);
		const Event = await Events.findOne({ _id: req.params.id })

		if (req.body.titre) {
			Event.titre = req.body.titre
		}

		if (req.body.contenu) {
			Event.contenu = req.body.contenu
        }
      
		if (req.body.author) {
			Event.author = req.body.author
        }

		if (req.body.date) {
			Event.date = req.body.date
        }

		if (req.body.imgUrl) {
			Event.imgUrl = req.body.imgUrl
        }
		await Event.save();
		res.send(Event)
	} catch {
		res.status(404)
		res.send({ error: "Event doesn't exist!" })
	}
})

router.delete("/Event/:id", async (req, res) => {
	try {
		await Events.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Regle doesn't exist!" })
	}
})








module.exports = router