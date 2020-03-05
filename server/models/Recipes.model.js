const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipesSchema = new Schema({
    label: String,
    image: String,
    ingredients: Array,
    url: String,
    dietLabels: Array,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


module.exports = mongoose.model('Recipes', RecipesSchema)