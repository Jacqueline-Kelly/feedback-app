const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required:true
    },

    rating: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model('Feedback', feedbackSchema)