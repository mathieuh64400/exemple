const express = require("express")
const router = express.Router();
const Post= require('../models/Post');
router.get('/messageaaa', (req, res) => {
    
    res.send('Hello world sss!!');
});

router.get("/post", async (req, res) => {
	const post = await Post.find()
	res.send(post);
})

router.get("/post/:id", async (req, res) => {
	const post = await Post.findOne({ _id: req.params.id })
	res.send(post)
})

router.post("/post", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		body: req.body.body, 
        author: req.body.author, 
        date:req.body.date,
		imgUrl:req.body.imgUrl,
		
	})
	await post.save()
	res.send(post)
})

router.patch("/post/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title= req.body.title;
		}
		
		if (req.body.body) {
			post.body= req.body.body;
        }
        
        if (req.body.author) {
			post.author= req.body.author;
        }
       
        if (req.body.date) {
			post.date= req.body.date;
        }
        if (req.body.imgUrl) {
			post.imgUrl= req.body.imgUrl;
        }
       
		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "post doesn't exist!" })
	}
})


router.delete("/post/:id", async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "posts doesn't exist!" })
	}
})




module.exports=router;