const express = require('express')
const router = express.Router()
const { 
    getFeedbackList, 
    submitFeedback,
    editFeedback,
    deleteFeedback,
    confirmEmail
} = require('../controllers/feedbackController')

router.get('/', getFeedbackList) 
router.post('/', submitFeedback)
router.delete('/', deleteFeedback)
router.put('/', editFeedback)
router.post('/confirm', confirmEmail)

module.exports = router