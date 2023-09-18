// Faire appel au Modèle de la BDD
const { Mongoose } = require("mongoose");
const UserModel = require ("../models/user.models")

// Recevoir la réponse d'un serveur distant
module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json(users)
}




module.exports.setUsers = async (req, res) => {
    // Vérifier s'il y a un message qui a été entré
    if (!req.body.name) {
        // Si il n'y a pas de message
        res.status(400).json({message: "Merci d'ajouter un nom"})

    }


    const user = await UserModel.create({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
    });
    res.status(200).json(user);
  


};

module.exports.editUser = async (req,res) => {
    // Identifier le post qu'on veut modifier en fonction de l'ID
    const user = await UserModel.findById(req.params.id);

    if (!user){
        res.status(400).json({ message: "User inexistant"});
    }


// Update avec MongooseDB

const updateUser = await PostModel.findByIdAndUpdate (
    // Les paramètres. Post => const post de editPost
    user,
    req.body,
    // Créer un nouveau tableau/objet
    {new: true}
);



res.status(200).json(updateUser);
};

module.exports.deleteUser = async (req, res) => {
    // Identifier le post qu'on veut supprimer en fonction de l'ID
    const user = await UserModel.findById(req.params.id);

    if (!user){
        res.status(400).json({ message: "User inexistant"});
    }

    // Supprimer avec la BDD
    await user.deleteOne();
    res.status(200).json("Message supprimé" + user);
};


module.exports.likeUser = async (req, res) => {

    try {
        await UserModel.findByIdAndUpdate(
            // Le post est contenu dans la ligne suivante :
            req.params.id,
            // Ajouté le like en fonction de l'ID de l'utilisateur
            {$addToSet: {likers: req.body.userId}
        },
            {new: true}
        // Si ça marche, récupère la data et recevoir la data
        ).then((data) =>  res.status(200).send(data));
       
    } 
    // Si le try renvois une erreur
    catch (err) {
        res.status(400).json(err)
    }

};


module.exports.dislikeUser = async (req, res) => {

    try {
        await UserModel.findByIdAndUpdate(
            // Le post est contenu dans la ligne suivante :
            req.params.id,
            // Retirer le like en fonction de l'ID de l'utilisateur
            {$pull: {likers: req.body.userId}
        },
            {new: true}
        // Si ça marche, récupère la data et recevoir la data
        ).then((data) =>  res.status(200).send(data));
       
    } 
    // Si le try renvois une erreur
    catch (err) {
        res.status(400).json(err)
    }

};

