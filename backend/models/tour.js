const mongoose = require('mongoose');
  
  const tourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type:String,required:true},
    category: { type: String, enum: ['foreign', 'local'], required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    images: [String],
    maxLimit: { type: Number, required: true },
    costPrice: { type: Number, required: true },
    stops: [String]
 
  });

  module.exports = mongoose.model('Tour', tourSchema);