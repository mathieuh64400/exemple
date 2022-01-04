const express = require("express")
const router = express.Router();
const Produit = require("../models/Produits");

router.get('/prod', (req, res) => {
    
    res.send('Hello world aa !!');
});



router.get("/produit/:id", async (req, res) => {
	const produit = await Produit.findOne({ _id: req.params.id })
	res.send(produit)
})

router.get("/produit", async (req, res) => {
	const produits = await Produit.find()
	res.send(produits);
})
router.post("/produit", async (req, res) => {
	const produit = new Produit({
		titre:req.body.titre,
		contenu:req.body.contenu,
		name: req.body.name,
		description: req.body.description,
        imageUrl:req.body.imageUrl,
        category: req.body.category,
        quantity: req.body.quantity,
        date:req.body.date,
		etat:req.body.etat,
		NomConsommateur:req.body.NomConsommateur
	})
	await produit.save()
	res.send(produit)
})

router.patch("/produit/:id", async (req, res) => {
	try {
		const produit = await Produit.findOne({ _id: req.params.id })
		if (req.body.titre) {
			produit.titre= req.body.titre;
		}
		if (req.body.contenu) {
			produit.contenu= req.body.contenu;
		}
		if (req.body.name) {
			produit.name= req.body.name;
		}
		
		if (req.body.description) {
			produit.description= req.body.description;
        }
        if (req.body.imageUrl) {
			produit.imageUrl= req.body.imageUrl;
		}
        if (req.body.category) {
			produit.category= req.body.category;
        }
        if (req.body.quantity) {
			produit.quantity= req.body.quantity;
        }
        if (req.body.date) {
			produit.date= req.body.date;
        }
        if (req.body.etat) {
			produit.etat= req.body.etat;
		}
		if (req.body.NomConsommateur) {
			produit.NomConsommateur= req.body.NomConsommateur;
		}
		await produit.save()
		res.send(produit)
	} catch {
		res.status(404)
		res.send({ error: "Produit doesn't exist!" })
	}
})


router.delete("/produit/:id", async (req, res) => {
	try {
		await Produit.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Produit doesn't exist!" })
	}
})


module.exports=router;