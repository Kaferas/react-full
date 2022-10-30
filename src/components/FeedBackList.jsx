import React from 'react'
// import {motion,AnimatePresence} from "framer-motion"
import FeedBackItem from './FeedBackItem'

function FeedBackList({feedback,handleDelete}) {
  if(!feedback || feedback.length===0){
    return (<p>NoFeed Back Yet</p>)
  }
  return (
      feedback.map((item)=>{
        return <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
      })
  )
}


export default FeedBackList