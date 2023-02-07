const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

// Routes
// GET /api/v1/users - Get all users
router.get("/", getAllUsers);

// GET /api/v1/users/:userId - Get user by id
router.get("/:todoId", getUserById);

// POST /api/v1/users - Create new user
router.post("/", createNewUser);

// PUT /api/v1/users/:userId - Update user (by id)
router.put("/:todoId", updateUserById);

// DELETE /api/v1/users/:userId - Delete user (by id)
router.delete("/:todoId", deleteUserById);

module.exports = router;
