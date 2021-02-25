const mongoose = require("mongoose");

const selectMessage = new mongoose.Schema({
  channel: {
    type: String,
    require: true,
  },
  contentType: {
    type: String,
    require: true,
  },
  dailyMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "dailyMessage",
    required: "daily Message",
  },
});

module.exports = mongoose.model("selectMessage", selectMessage);
