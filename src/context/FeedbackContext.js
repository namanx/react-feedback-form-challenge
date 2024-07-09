
import { createContext,useState } from 'react';
import Data from '../data/FeedBackdata';
import {v4 as uuidv4} from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback,setfeedback] = useState(Data);

    const [feedbackedit,setfeedbackedit] = useState({
        item : {},
        edit : false,
    });

    // delete Feedback function
    const deleteFeedBack = (id) =>{
        console.log(id);
        if(window.confirm("Are you sure you wantt to delete the post ?")){
            setfeedback(feedback.filter((item)=> item.id !== id));
        }
    }

    // adding new feedback
    const Addfeedback = (newFeedback) =>{
        newFeedback.id = uuidv4();
        setfeedback([newFeedback,...feedback]);
    }

    // set item to be updated
    const editfeedback = (item) =>{
        setfeedbackedit({
            item : item,
            edit : true,
        })
    }

    // update feedback item
    const updatefeedback = (id, upItem) =>{
        setfeedback(feedback.map((item) =>
            (item.id === id) ? {...item,...upItem,} : item
        ))
    }

            
        
    

    return (
        <FeedbackContext.Provider value={{
        feedback,
        feedbackedit,
        deleteFeedBack,
        Addfeedback,
        editfeedback,
        updatefeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    );
}

export default FeedbackContext;