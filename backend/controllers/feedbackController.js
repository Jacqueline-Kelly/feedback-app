const asyncHandler = require('express-async-handler')
const Feedback = require('../models/feedbackModel')

const getFeedbackList = asyncHandler(async(req, res) => {   
    const feedback = await Feedback.find()
    if (feedback) {
        res.status(200).json(feedback).end()
    } else {
        res.status(400)
        throw new Error('Could not find feedback')
    }
}) 

const submitFeedback = asyncHandler(async(req,res) => {

    const {email, text, rating} = req.body.data
    
    if(!email || !text || !rating) {
        res.status(400)
        throw new Error('Please be sure to include your email, feedback, and rating')     
    }

    const feedback = await Feedback.create({
            email,
            text,
            rating
    })

    if (!feedback) {
        res.status(400)
        throw new Error('Could not create feedback')
    }

    res.status(201).json(feedback).end()
})

const deleteFeedback = asyncHandler(async(req,res) => {
    const id = req.body._id

    const feedback = await Feedback.findById(id)

    if(!feedback) {
        res.status(404)
        throw new Error('Could not find feedback item')
    }

    await feedback.remove()

    res.status(200).json({success: true})
})

const editFeedback = asyncHandler(async(req, res) => {

    const feedback = await Feedback.findById(req.body.id)

    if(!feedback) {
        res.status(404)
        throw new Error('Could not find feedback')
    }
    const updatedFeedback = await Feedback.findByIdAndUpdate(
        req.body.id,
        req.body.item,
    )
   
    res.status(200).json(updatedFeedback)

})

const confirmEmail = asyncHandler(async(req, res) => {
    const itemEmail = req.body.item.email

    const emailInput = req.body.email

    if(itemEmail === emailInput) {

        res.status(200).json('Success')
    }
    else {
        res.status(404).json('Failure')
    }
})

module.exports = {
    getFeedbackList,
    submitFeedback,
    deleteFeedback,
    confirmEmail,
    editFeedback
}