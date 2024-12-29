const mongoose = require("mongoose");

const thirdSchema = new mongoose.Schema({
  aquaid: { type: String, required: true },
  do: { type: String, required: true },
});

const thirdModel = mongoose.model("third", thirdSchema);
module.exports = thirdModel;