import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedBackList';
import FeedbackData from './data/FeedBackdata';
import { Card } from './components/shared/Card';
function App(){

    const [Feedbackdata,SetFeedBackdata] = useState(FeedbackData);
    const deleteFeedBack = (id) =>{
        console.log(id);
        if(window.confirm("Are you sure you wantt to delete the post ?")){
            SetFeedBackdata(Feedbackdata.filter((item)=> item.id !== id));
        }
    }
    return(
        <>
        <Header ></Header>
        <div className="container">

            <FeedbackList feedback = {Feedbackdata} handleDelete={deleteFeedBack} />


        </div>
        </>
    );
}

export {App};
