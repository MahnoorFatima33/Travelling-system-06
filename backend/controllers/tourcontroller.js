
// TourController.js
const Tour = require('../models/tour');

// Get all tours
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific tour by ID
exports.getTourById = async (req, res) => {
  const { tourId } = req.params;

  try {
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new tour
exports.createTour = async (req, res) => {
  const { name, description, duration, price, images } = req.body;

  try {
    const newTour = await Tour.create({ name, description, duration, price, images });
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a tour by ID
exports.updateTour = async (req, res) => {
  const { tourId } = req.params;
  const { name, description, duration, price, images } = req.body;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(tourId, { name, description, duration, price, images }, { new: true });
    if (!updatedTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    res.json(updatedTour);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a tour by ID
exports.deleteTour = async (req, res) => {
  const { tourId } = req.params;

  try {
    const deletedTour = await Tour.findByIdAndDelete(tourId);
    if (!deletedTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    res.json({ message: 'Tour deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
