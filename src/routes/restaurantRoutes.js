require("express-async-errors");
const express = require("express");
const router = express.Router();

const {
  getAllRestaurants,
  getRestaurantById,
  createNewRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

router.get("/", getAllRestaurants);
router.get("/:restaurantId", getRestaurantById);
router.post("/", createNewRestaurant);
router.put("/:restaurantId", updateRestaurant);
router.delete("/restaurantId", deleteRestaurant);

module.exports = router;
