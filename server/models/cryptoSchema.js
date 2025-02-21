const { mongoose } = require("mongoose");

const cyrtoSchema = new mongoose.Schema({
    type: { type: String },
    count : {type: String},
    currency: {type: String}
})
