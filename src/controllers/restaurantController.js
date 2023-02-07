const Restaurant = require("../models/Restaurant");

//CRUD Restaurants:

// GET /api/v1/restaurants - Get all restaurants
exports.getAllRestaurants = async (req, res, next) => {
  try {
    return res.send("Get all restaurants"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/v1/restaurants/:restaurantId - Get restaurant by id
exports.getRestaurantById = async (req, res, next) => {
  try {
    return res.send("Get restaurant by id"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// POST /api/v1/restaurants - Create new restaurant
exports.createNewRestaurant = async (req, res, next) => {
  try {
    return res.send("Create new restaurant"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// PUT /api/v1/restaurants/:restaurantId - Update restaurant (by id)
exports.updateRestaurant = async (req, res, next) => {
  try {
    return res.send("Update restaurant"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE /api/v1/restaurants/:restaurantId - Delete restaurant (by id)
exports.deleteRestaurant = async (req, res, next) => {
  try {
    return res.send("Delete restaurant"); //scaffold return m meddelande
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
