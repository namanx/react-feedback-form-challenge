import React from "react";
import { FaTimes , FaEdit} from "react-icons/fa";
import {Card} from './shared/Card';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const {deleteFeedBack} = useContext(FeedbackContext);
  const {editfeedback} = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() =>{deleteFeedBack(item.id)}} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() =>{editfeedback(item)}} className="edit">
        <FaEdit color="purple"></FaEdit>
      </button>
      <div className="">{item.text}</div>
      {/* <button onClick={handleclick}>Click me</button> */}
    </Card>
  );
}



export default FeedbackItem;
