const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  type:     { type: String, required: true },    
  count:    { type: String, required: true },   
  currency: { type: String, required: true },    
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } 
}, { timestamps: true }); 

const Coin = mongoose.model('Coin', coinSchema);
module.exports = Coin;
