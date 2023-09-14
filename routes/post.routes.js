// Appeler la librairie Express
const express = require('express');
const { setPosts } = require('../controllers/post.controller');

// Appeler l'objet Router d'Express
const router = express.Router();

                            // CRUD


// Afficher le message "Hello"
// Récupere les données avec Get
router.get("/", (req, res) => {
    res.json({ message: "Hello0"});
});

// Envoie des données avec Post
router.post("/", setPosts) 
// => {
//     console.log(req.body);
//     res.json({ message: req.body.message});
// });

// Mise à jour avec Put. Dans ce cas, selon l'id. Par exemple, dans l'url : http://localhost:5000/post/11111
router.put("/:id", (req, res) => {
    res.json({ messageId: req.params.id});
});

// Supprimer avec Delete. Selon l'id
router.delete("/:id", (req, res) => {
    res.json({ message: "Post supprimé id : " + req.params.id});
});

// Like et dislike un post. Les likes seront enregistrés
router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "Post liké id : " + req.params.id});
});

router.patch("/dislike-post/:id", (req, res) => {
    res.json({ message: "Post disliké id : " + req.params.id});
});



module.exports = router;