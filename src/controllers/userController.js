const User = require("../models/User");

//CRUD Users:

// GET /api/v1/users - Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    return res.send("Get all users"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/v1/users/:userId - Get user by id
exports.getUserById = async (req, res, next) => {
  try {
    return res.send("Get user by id"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// POST /api/v1/users - Create new user
exports.createNewUser = async (req, res, next) => {
  try {
    return res.send("Create new user"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// PUT /api/v1/users/:userId - Update user (by id)
exports.updateUserById = async (req, res, next) => {
  try {
    return res.send("Update user"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE /api/v1/users/:userId - Delete user (by id)
exports.deleteUserById = async (req, res, next) => {
  try {
    return res.send("Delete user"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
