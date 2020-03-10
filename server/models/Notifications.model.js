const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
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

const Notifications = mongoose.model('Notification', NotificationSchema);
module.exports = Notifications
