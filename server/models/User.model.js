const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  photo: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipes" }],
  userfile: { type: Schema.Types.ObjectId, ref: "UserFile" },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
