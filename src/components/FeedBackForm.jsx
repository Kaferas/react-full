import React,{useState} from 'react'
import Card from "../shared/Card"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"

function FeedBackForm({handleAdd}) {

const [text,setText]=useState("");
const [rating,setRating]=useState(1);
const [btnDisabled,setBtnDisabled]=useState(true);
const [message,setMessage]=useState('');

const handleTextChange=(e)=>{
        setText(e.target.value);      
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !=='' && text.trim().length <=10){
            setMessage("Text Must be at least 10 Characters")
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
    }
    const submitHandle=(e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const postFeed={
                text,
                rating
            };
            handleAdd(postFeed)
            setText("")
            setRating(1)
        }
    }
  return (
    <Card>
        <form onSubmit={submitHandle}>
        <h2>How would you Rate your Service with us?</h2>
        <RatingSelect select={
            (rating)=>setRating(rating)}/>
        <div className="input-group">
            <input placecholder="Write Here your Review" value={text} type="text" onChange={handleTextChange}/>
            <Button version='primary' type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedBackForm