// const stopSchema = new mongoose.Schema({
//     location: String,
//   });
  
  const tourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
   // category: { type: String, enum: ['foreign', 'local'], required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    images: [String],
    // stops: [stopSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    // reviews: [
    //   {
    //     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //     rating: { type: Number, required: true },
    //     createdAt: { type: Date, default: Date.now },
    //   },
    // ],
  });