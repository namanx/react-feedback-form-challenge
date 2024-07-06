import React from 'react'
import PropTypes from "prop-types";
import FeedbackItem from './FeedbackItem';
const FeedbackList = ({ feedback ,handleDelete}) => {
    return (
      <div className="feedback-list">
        {feedback.map((item) => {
          return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>;
        })}
      </div>
    );
  };

export default FeedbackList;
