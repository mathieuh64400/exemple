const express = require("express")
const router = express.Router();
const Utilisateur= require('../models/Utilisateur');
router.get('/messageuser', (req, res) => {
    
    res.send('Hello world nnnn!!');
});

router.get("/utilisateur", async (req, res) => {
	const utilisateur = await Utilisateur.find()
	res.send(utilisateur);
})

router.get("/utilisateur/:id", async (req, res) => {
	const utilisateur = await Utilisateur.findOne({ _id: req.params.id })
	res.send(utilisateur)
})

router.post("/utilisateur", async (req, res) => {
	const utilisateur = new Utilisateur({
		nom: req.body.nom,
		prenom: req.body.prenom,
        pseudo: req.body.pseudo,
        preference: req.body.preference,
        promotion:req.body.promotion,
		email:req.body.email,
		lieu:req.body.lieu,
		img:req.body.img,
        
	})
	await utilisateur.save()
	res.send(utilisateur)
})

router.patch("/utilisateur/:id", async (req, res) => {
	try {
		const utilisateur = await Utilisateur.findOne({ _id: req.params.id })

		if (req.body.nom) {
			utilisateur.nom= req.body.nom;
		}
		
		if (req.body.prenom) {
			utilisateur.prenom= req.body.prenom;
        }
        
        if (req.body.pseudo) {
			utilisateur.pseudo= req.body.pseudo;
        }
       
        if (req.body.preference) {
			utilisateur.preference= req.body.preference;
        }
        if (req.body.promotion) {
			utilisateur.promotion= req.body.promotion;
        }
        if (req.body.email) {
			utilisateur.email= req.body.email;
        }
        if (req.body.lieu) {
			utilisateur.lieu= req.body.lieu;
		}
		await utilisateur.save()
		res.send(utilisateur)
	} catch {
		res.status(404)
		res.send({ error: "Utilisateur doesn't exist!" })
	}
})


router.delete("/utilisateur/:id", async (req, res) => {
	try {
		await Utilisateur.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Utilisateur doesn't exist!" })
	}
})




module.exports=router;