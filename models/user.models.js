const mongoose = require("mongoose");

// Schéma du post, structure de la base de donnée

const userSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
        },
        login: {
            type: String,
            required:true
        },
        password: {
            type: String,
            required:true
            
        }
    },
        {
        timestamps: true,
        }
);

module.exports = mongoose.model("user", userSchema);