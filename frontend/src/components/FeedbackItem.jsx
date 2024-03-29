import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'


function FeedbackItem({item}) {
    const { confirmEmail } = useContext(FeedbackContext)


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => confirmEmail(item, 'delete')} className="close">
            <FaTimes color='purple' />
            </button>
            <button onClick={() => confirmEmail(item, 'edit')} className="edit">
                <FaEdit color='purple' />
            </button>
            <div className= "text-display">{item.text}</div>
            
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem 