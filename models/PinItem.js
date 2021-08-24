const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


const PinSchema = new mongoose.Schema({
    userId: String,
    listpins: [{
    _id : {
        type: ObjectId,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    }}]
  });

module.exports = mongoose.model("PinItem", PinSchema);