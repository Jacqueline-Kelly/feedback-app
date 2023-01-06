const express = require('express')
const router = express.Router()
const { 
    getFeedbackList, 
    submitFeedback,
    editFeedback,
    deleteFeedback
} = require('../controllers/feedbackController')

router.get('/', getFeedbackList) 
router.post('/', submitFeedback)
router.delete('/', deleteFeedback)
router.put('/', editFeedback)

module.exports = router