const User = require('../models/user'); // Import the User model

// Controller methods

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body); // Assuming the request body contains necessary user data
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import the jwt library
function generateLoginToken(User) {

    const payload = {
    
    user: User,
    
    };
    
    const token = jwt.sign(payload, "dfjfjdjfdjhfh,");
    
    return token;
    
    };


// Other controller methods...

// Login user by username and password
async function login (req, res, next) {

  const { username, password } = req.body;
  
  try {
  
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ error: 'User not found' });
  
  //const passwordMatch = await bcrypt.compare(password, user.password);

  if (user.password!=password) return res.status(401).json({ error: 'Invalid credentials' });

  
  var token = generateLoginToken(user);
  
  return res.status(200).json({
  
  message: 'Logged in successfully',
  
  User :user,
  token: token,
  
  });
  
  } catch (err) {
  m='a'
  return res.status(500).json({ message: err.message });
  
  }
  
  };


module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
