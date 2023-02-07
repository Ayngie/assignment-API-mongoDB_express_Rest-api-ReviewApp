const express = require('express')
const router = express.Router()

const {
    getAllReviews,
    getReviewById,
    createNewReview,
    updateReview,
    deleteReview
} = require("../controllers/reviewController")

router.get('/', getAllReviews)
router.get('/:reviewId', getReviewById)
router.post('/', createNewReview)
router.put('/:reviewId', updateReview)
router.delete('/:reviewId', deleteReview)

module.exports = router