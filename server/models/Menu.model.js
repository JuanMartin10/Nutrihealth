const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    nutricionist: { type: Schema.Types.ObjectId, ref: "User" },
    menu: {
        lunes: {
            type: String,
        }
        martes: 
    },

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu
