import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';
function Feedbackstats() {
 const {feedback} = useContext(FeedbackContext);
 let averageRating = feedback.reduce((acc,curr) => acc+curr.rating,0)/feedback.length;
 if(!feedback || feedback.length === 0){
  return (
    <div className="Feedback-stats">
      <h4>Empty Feedback Stats :( </h4>
    </div>
  )}else{
    return (    <div className='Feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratings : {averageRating ||= 0}</h4>
    </div>)
  }
}

export default Feedbackstats
