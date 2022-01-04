const express = require("express")
const router = express.Router();
const Commandes= require('../models/Commandes');
router.get('/commando1', (req, res) => {
    
    res.send('Hello world  ccc!!');
});

router.get("/commande", async (req, res) => {
	const commandes = await Commandes.find()
	res.send(commandes);
})

router.get("/Commandes/:id", async (req, res) => {
	const commandes = await Commandes.findOne({ _id: req.params.id })
	res.send(commandes)
})

router.post("/commande", async (req, res) => {
	const commandes = new Commandes({
		name: req.body.name,
		nameprod: req.body.nameprod,
        
        imageUrl: req.body.imageUrl,
       
        quantity:req.body.quantity,
		date:req.body.date,
		
	})
	await commandes.save()
	res.send(commandes)
})

router.patch("/Commandes/:id", async (req, res) => {
	try {
		const commandes = await Commandes.findOne({ _id: req.params.id })

		if (req.body.name) {
			commandes.name= req.body.name;
		}
		
		if (req.body.nameprod) {
			commandes.nameprod= req.body.nameprod;
        }
        
        if (req.body.imageUrl) {
			commandes.imageUrl= req.body.imageUrl;
        }
       
        if (req.body.date) {
			commandes.date= req.body.date;
        }
        if (req.body.quantity) {
			commandes.quantity= req.body.quantity;
        }
       
		await commandes.save()
		res.send(commandes)
	} catch {
		res.status(404)
		res.send({ error: "Commandes doesn't exist!" })
	}
})


router.delete("/commande/:id", async (req, res) => {
	try {
		await Commandes.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Commandes doesn't exist!" })
	}
})




module.exports=router;