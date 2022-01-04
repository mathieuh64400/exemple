const express = require("express")
const router = express.Router();
const Demande= require('../models/Demande');
router.get('/message', (req, res) => {
    
    res.send('Hello world ddd!!');
});

router.get("/demande", async (req, res) => {
	const demande = await Demande.find()
	res.send(demande);
})

router.get("/demande/:id", async (req, res) => {
	const demande = await Demande.findOne({ _id: req.params.id })
	res.send(demande)
})

router.post("/demande", async (req, res) => {
	const demande = new Demande({
		Nom: req.body.Nom,
		description: req.body.description,
        pseudo: req.body.pseudo,
        date:req.body.date,
		type:req.body.type,
		nature:req.body.nature
	})
	await demande.save()
	res.send(demande)
})

router.patch("/demandes/:id", async (req, res) => {
	try {
		const demande = await Demande.findOne({ _id: req.params.id })

		if (req.body.Nom) {
			demande.Nom= req.body.Nom;
		}
		
		if (req.body.description) {
			demande.description= req.body.description;
        }
        
        if (req.body.pseudo) {
			demande.pseudo= req.body.pseudo;
        }
       
        if (req.body.date) {
			demande.date= req.body.date;
        }
        if (req.body.type) {
			demande.type= req.body.type;
        }
        if (req.body.Nature) {
			demande.Nature= req.body.Nature;
		}
		await demande.save()
		res.send(demande)
	} catch {
		res.status(404)
		res.send({ error: "demande doesn't exist!" })
	}
})


router.delete("/demandes/:id", async (req, res) => {
	try {
		await Demande.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "demande doesn't exist!" })
	}
})




module.exports=router;