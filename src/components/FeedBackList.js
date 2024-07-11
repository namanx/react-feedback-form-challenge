import React from 'react'
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {

    const {feedback,isloading} = useContext(FeedbackContext);


    if(!isloading && (!feedback || feedback.length === 0)){
      return <p>No Feedback</p>
    }

    return isloading ? <h3><Spinner /></h3> :
  
      <div className="feedback-list">
        {feedback.map((item) => {
          return <FeedbackItem key={item.id} item={item} />;
        })}
      </div>

  };

export default FeedbackList;
