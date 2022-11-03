import React from 'react'
// import {motion,AnimatePresence} from "framer-motion"
import { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import FeedBackContext from '../context/FeedBackContext'

function FeedBackList() {
  const {feedback}= useContext(FeedBackContext);
  if(!feedback || feedback.length===0){
    return (<p>NoFeed Back Yet</p>)
  }
  return (
      feedback.map((item)=>{
        return <FeedBackItem key={item.id} item={item} />
      })
  )
}


export default FeedBackList