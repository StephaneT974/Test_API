// Appeler la librairie Express
const express = require("express");

const connectDB = require("./config/db");
const dotenv = require('dotenv').config();

// Définition du port
const port = 5000;

// Connexion à la DB
connectDB();


const app = express();


// app.get("/post", (req, res) => {
//     res.json({ message: "Hello"});rrr
// });


// Traiter les données de la req grâce a Middleware
    // Pour le traitement des fichiers json
app.use(express.json())

    // Permet de lire l'url encoded
app.use(express.urlencoded({ extended: false }));


// A localhost:5000/post, va à /routes/post.routes
app.use("/post", require("./routes/post.routes")); 


// Lancer le serveur 
app.listen(port, () => console.log("Le serveur a démarré"))