const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  reciever: { type: Schema.Types.ObjectId, ref: "User" },
  text: String,
  accepted: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Notifications = mongoose.model('Notifications', NotificationsSchema);
module.exports = Notifications
