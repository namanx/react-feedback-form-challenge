import { useContext, useState , useEffect} from "react";
import { Card } from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
  const {Addfeedback,feedbackedit,updatefeedback} = useContext(FeedbackContext);


  useEffect(() =>{
    if(feedbackedit.edit === true){
      setbtnDisabled(false);
      settext(feedbackedit.item.text);
      setrating(feedbackedit.item.rating);
    }
  },[feedbackedit])
    const [text,settext] = useState('');

    const [rating,setrating] = useState(10);
    const [btnDisabled,setbtnDisabled] = useState(true);
    const [message,setmessage] = useState('');
    let handletextchange = (e) =>{
        // console.log(e.target.value)  ;
     
        if(text === ''){
            setbtnDisabled(true);
            setmessage(null);
        }
        else if(text !== '' && text.trim().length <= 10){
            setmessage("Text must be atleast 10 characters !");
            setbtnDisabled(true);
        }else{
            setmessage(null);
            setbtnDisabled(false);
        }      
        settext(e.target.value);
        
    }

    let select = (num) =>{
        setrating(num);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text : text ,
                rating : rating ,
            }
            
            if(feedbackedit.edit){
              updatefeedback(feedbackedit.item.id,newFeedback);
            }else{
              Addfeedback(newFeedback);
            }
            
            settext('');


        }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>
          How would you rate your <br />
          service with us ?
        </h2>
        {/* @todo : Add a rating button here */}
        <RatingSelect select = {select}/>
        <div className="input-group">
          <input 
            onChange={handletextchange}
            type="text"
            placeholder="Write a review" 
            value={text}/>
            <Button type="submit" 
                version={text === '' ? 'primary' : 'secondary'}
                isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>

      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
