const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const tourRoutes=require('./routes/tourroutes')
const userRoutes=require('./routes/userroutes')
const purchaseRoutes = require('./routes/purchaseroutes');
dbConfig = require('./utils/db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Use product routes
app.use('/api/products', productRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);
app.use('/api/purchases', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
