const mongoose = require("mongoose");

const sensorinfo = new mongoose.Schema(
  {
    aquid: { type: String, required: true },
    temp: { type: String, required: true },
    waterlevel: { type: String, required: true },
    turbidity: { type: String, required: true },
    flow: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    collection: "sensor_info",
  }
);

const sensorinfoModel = mongoose.model("sensorinfo", sensorinfo);

module.exports = sensorinfoModel;
