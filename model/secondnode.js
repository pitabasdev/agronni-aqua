const mongoose = require("mongoose");
const secondSchema = new mongoose.Schema({
  aquaid: { type: String, required: true },
  ph: { type: String },
  do: { type: String },
  date: { type: Date, default: Date.now },
});

const secondModel = mongoose.model("second", secondSchema);
module.exports = secondModel;
