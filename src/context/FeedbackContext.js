
import { createContext,useState,useEffect } from 'react';
import Data from '../data/FeedBackdata';
import {v4 as uuidv4} from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isloading,setisloading] = useState(true);
    const [feedback,setfeedback] = useState([]);

    const [feedbackedit,setfeedbackedit] = useState({
        item : {},
        edit : false,
    });

    useEffect(()=>{
        fetchFeedback()
    },[])

    // Fetch Feedback 
    const fetchFeedback = async () =>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setfeedback(data);
        setisloading(false);
    }

    // delete Feedback function
    const deleteFeedBack = async (id) =>{
        console.log(id);
        if(window.confirm("Are you sure you wantt to delete the post ?")){
            await fetch(`/feedback/${id}`,{
                method : 'DELETE'
            }) 

            setfeedback(feedback.filter((item)=> item.id !== id));
        }
    }

    // adding new feedback
    const Addfeedback = async (newFeedback) =>{
        
        const response = await fetch(`/feedback`,
            {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(newFeedback)
                
            }
        )

        const data = await response.json;
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
    const updatefeedback = async (id, upItem) =>{
        const response = await fetch(`/feedback/${id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',

            },
            body : JSON.stringify(upItem)
        })
        const data = await response.json();
        setfeedback(feedback.map((item) =>
            
            (item.id === id) ? {...item,...data,} : item
        ))
    }

            
        
    

    return (
        <FeedbackContext.Provider value={{
        feedback,
        feedbackedit,
        isloading,
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