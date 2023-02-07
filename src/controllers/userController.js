const User = require("../models/User");

//CRUD Users:

// GET /api/v1/users - Get all users
exports.getAllUsers = async (req, res, next) => {
  const limit = Number(req.query?.limit || 10);
  const offset = Number(req.query?.offset || 0);

  const users = await User.find().limit(limit).skip(offset);
  const totalUsersInDatabase = await User.countDocuments();

  return res.json({
    data: users,
    meta: {
      total: totalUsersInDatabase,
      limit: limit,
      offset: offset,
      count: users.length,
    },
  });
};

// GET /api/v1/users/:userId - Get user by id
exports.getUserById = async (req, res, next) => {
  const todoId = req.params.todoId;

  const todo = await User.findById(todoId);

  if (!todo) throw new NotFoundError("This todo does not exist");

  // respond with todo data (200 OK)
  // return res.send("Get todo by id"); //scaffold return m meddelande
  return res.json(todo);
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
