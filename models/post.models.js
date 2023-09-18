const mongoose = require("mongoose");

// Schéma du post, structure de la base de donnée

const postSchema = mongoose.Schema(

    {
        message: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref : 'User'
        },
        likers: {
            type: [String]
            
        }
    },
        {
        timestamps: true,
        }
);

module.exports = mongoose.model("post", postSchema);