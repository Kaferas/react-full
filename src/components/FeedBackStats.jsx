import React,{useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext'
function FeedBackStats() {
  const {feedback}=useContext(FeedBackContext)
    let average=feedback.reduce((acc,curr)=>{
        return acc+curr.rating
    },0) / feedback.length
    average=Math.round(average)
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Reviews : {isNaN(average)?0:average}</h4>
    </div>
  )
}

export default FeedBackStats