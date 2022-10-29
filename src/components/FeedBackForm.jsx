import React,{useState} from 'react'
import Card from "../shared/Card"
import Button from "../shared/Button"

function FeedBackForm() {

const [text,setText]=useState("This Is Real Cool")
    const handleTextChange=(e)=>{
        setText(e.target.value);      
    }
  return (
    <Card>
        <form action="">
        <h2>How would you Rate your Service with us?</h2>
        <div className="input-group">
            <input placecholder="Write Here your Review" value={text} type="text" onChange={handleTextChange}/>
            <Button version='secondary' type='submit' >Send</Button>
        </div>
        </form>
    </Card>
  )
}

export default FeedBackForm