const mongoose = require('mongoose')
const Review = require('../models/Review')

const RestaurantSchema  = new mongoose.Schema ( {
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        maxLength: 200,
    }, 
    address: {
        type: String,
        require: true,
    },
},
{
    timestamps: true,
}

)

module.exports = mongoose.model("Restaurant", RestaurantSchema)