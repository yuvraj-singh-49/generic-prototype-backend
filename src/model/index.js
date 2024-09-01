const mongoose = require("mongoose");

const prototypeSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  bom: {
    required: true,
    type: Object,
  },
  fileUrlData: {
    required: true,
    type: Array,
  },
  createdOn: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model("Prototype", prototypeSchema);
