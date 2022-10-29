import React from 'react'
function FeedBackStats({feedBackData}) {

    let average=feedBackData.reduce((acc,curr)=>{
        return acc+curr.rating
    },0) / feedBackData.length
    average=Math.round(average)
  return (
    <div className="feedback-stats">
        <h4>{feedBackData.length} Reviews</h4>
        <h4>Average Reviews : {isNaN(average)?0:average}</h4>
    </div>
  )
}

export default FeedBackStats