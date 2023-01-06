import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = '/api/'

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false,
        }
    )

    useEffect(() => {fetchFeedback()}, [])

    const fetchFeedback = async () => {
        const response = await axios.get(API_URL)
        setFeedback(response.data)
        setIsLoading(false)
    }

    const deleteFeedback = async (item) => {
        if (window.confirm('Are you sure you want to delete?')) {
            // console.log(id, {id}, JSON.stringify(id))
            console.log(item, JSON.stringify(item))
            await axios.delete(API_URL,{ data: item})
            fetchFeedback()
        }   
    }

    const updateFeedback = async (id, updItem) => {
        const response = await axios.put(API_URL, JSON.stringify(updItem))
        console.log(response)
        fetchFeedback()
    }

    const editFeedback = (item) => {
            setFeedbackEdit({
            item,
            edit: true
        })}
    
    const addFeedback = async (newFeedback) => {
        const response = await axios.post(API_URL,JSON.stringify(newFeedback))
        console.log(response)
    }

    return (
        <FeedbackContext.Provider value={{ feedback, feedbackEdit, isLoading, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext