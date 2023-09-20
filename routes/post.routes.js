// Appeler la librairie Express
const express = require('express');
const { getPosts, editPost, deletePost, likePost, dislikePost, setPosts } = require('../controllers/post.controller');

// Appeler l'objet Router d'Express
const router = express.Router();



                            // CRUD


// Afficher le message "Hello"
// Récupere les données avec Get


// router.get("/", (req, res) => {
//     res.json({ message: "Hello0"});
// });


router.get("/", getPosts ); 


// Envoie des données avec Post

router.post("/", setPosts); 
// => {
//     console.log(req.body);
//     res.json({ message: req.body.message});
// });




// Mise à jour avec Put. Dans ce cas, selon l'id. Par exemple, dans l'url : http://localhost:5000/post/11111

// router.put("/:id", (req, res) => {
//     res.json({ messageId: req.params.id});
// });

router.put("/:id", editPost);


// Supprimer avec Delete. Selon l'id

// router.delete("/:id", (req, res) => {
//     res.json({ message: "Post supprimé id : " + req.params.id});
// });

router.delete("/:id", deletePost);



// Like et dislike un post. Les likes seront enregistrés

// router.patch("/like-post/:id", (req, res) => {
//     res.json({ message: "Post liké id : " + req.params.id});
// });

router.patch("/like-post/:id", likePost);



// router.patch("/dislike-post/:id", (req, res) => {
//     res.json({ message: "Post disliké id : " + req.params.id});
// });

router.patch("/dislike-post/:id", dislikePost);


module.exports = router;