// Faire appel au Modèle de la BDD
const { Mongoose } = require("mongoose");
const PostModel = require ("../models/post.models")

// Recevoir la réponse d'un serveur distant
module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts)
}




module.exports.setPosts = async (req, res) => {
    // Vérifier s'il y a un message qui a été entré
    if (!req.body.message) {
        // Si il n'y a pas de message
        res.status(400).json({message: "Merci d'ajouter un message"})

    }


    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author,
    });
    res.status(200).json(post);
  


};

module.exports.editPost = async (req,res) => {
    // Identifier le post qu'on veut modifier en fonction de l'ID
    const post = await PostModel.findById(req.params.id);

    if (!post){
        res.status(400).json({ message: "Post inexistant"});
    }


// Update avec MongooseDB

const updatePost = await PostModel.findByIdAndUpdate (
    // Les paramètres. Post => const post de editPost
    post,
    req.body,
    // Créer un nouveau tableau/objet
    {new: true}
);

res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
    // Identifier le post qu'on veut supprimer en fonction de l'ID
    const post = await PostModel.findById(req.params.id);

    if (!post){
        res.status(400).json({ message: "Post inexistant"});
    }

    // Supprimer avec la BDD
    await post.remove();
    res.status(200).json("Message supprimé" + post);
}