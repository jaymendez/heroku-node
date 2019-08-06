const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SmsSchema = new Schema({
    destinationAddress: {
      type: String
    },
    messageId: {
      type: String
    },
    message: {
      type: String
    },
    resourceURL: {
      type: String
    },
    senderAddress: {
      type: String
    },
    date_received: {
        type: Date,
    }
})

module.exports = Sms = mongoose.model('received_sms', SmsSchema)