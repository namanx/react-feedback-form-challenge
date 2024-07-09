import React from 'react';
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedBackList';
// import Data from './data/FeedBackdata';
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import {FeedbackProvider} from './context/FeedbackContext';


function App(){

    // const [Feedbackdata,SetFeedBackdata] = useState(Data);

    // const Addfeedback = (newFeedback) =>{
    //     newFeedback.id = uuidv4();
    //     SetFeedBackdata([newFeedback,...Feedbackdata]);
    // }
    return(
      
        <FeedbackProvider>
        <Header ></Header>

        <div className="container">
            <FeedbackForm />
            <Feedbackstats>
            </Feedbackstats>
            <FeedbackList />
            {/* <Link to='/about'>About</Link> */}
            {/* <Routes>
            <Route path ='/about'>This is the about Route</Route>
            </Routes> */}
            <Post/>
            <AboutIconLink />
        </div>
        
        </FeedbackProvider>
    );
}

export {App};
