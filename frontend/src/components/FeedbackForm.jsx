import React from 'react'
import Card from './shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'


function FeedbackForm ( )  {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) { 
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setEmail(feedbackEdit.item.email)
        }}, [feedbackEdit])

    const handleTextChange = ({target: {value}}) => {

        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(value)
    }

    const handleEmailChange = ({target: {value}}) => {
        setEmail(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
            email,
            text,
            rating
        }
        if(feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item._id, newFeedback) 
        } else {
            addFeedback(newFeedback)
        }
        
        setText('')
        setEmail('')
      }
    }

return (    
<Card>
        <form onSubmit={handleSubmit}>
            <h2> How would you rate my application content?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className='input-group'>
            <input onChange={handleEmailChange} type="text" 
                placeholder="email" value={email} />
            </div>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" 
                placeholder="write a review" value={text} />

                <Button type="submit" isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
    )
}

export default FeedbackForm