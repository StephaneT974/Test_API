// Faire appel au Modèle de la BDD
const PostModel = require ("../models/post_models")

module.exports.setPosts = async (req, res) => {
    res.json({ message: "Ca fonctionne !"});
};