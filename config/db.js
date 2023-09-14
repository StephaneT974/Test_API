const mongoose = require('mongoose')

// Pour se connecter à la DB. async pour chercher une donnée et revenir

const connectDB = async () => {
  const url = "mongodb+srv://" + process.env.HOST + "/" + process.env.DB_NAME;
  try {
    await mongoose.connect(url, {});
    console.log("connecté");
  } catch (err) {
    console.log("error");
  }
};

module.exports = connectDB;