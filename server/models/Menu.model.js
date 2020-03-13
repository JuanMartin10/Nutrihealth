const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    nutricionist: { type: Schema.Types.ObjectId, ref: "User" },

    menu: {
        monday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
        tuesday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
        wednesday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
        thursday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
        friday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
        saturday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
        sunday: {
            breakfast: {
                type: String,
            },
            launch: {
                type: String,
            },
            dinner: {
                type: String,
            }
        },
    }

    // menu: {
    //     monday: {
    //         type: String,
    //     },
    //     tuesday: {
    //         type: String,
    //     },
    //     wednesday: {
    //         type: String,
    //     },
    //     thursday: {
    //         type: String,
    //     },
    //     friday: {
    //         type: String,
    //     },
    //     saturday: {
    //         type: String,
    //     },
    //     sunday: {
    //         type: String,
    //     },
    // },

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu
