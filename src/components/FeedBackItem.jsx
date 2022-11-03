import Card from "../shared/Card"
import {FaTimes,FaEdit} from "react-icons/fa"
import { useContext } from "react"
import FeedBackContext from "../context/FeedBackContext"
function FeedBackItem({item}) {
  const {deleteItem,editItem} =useContext(FeedBackContext);
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>editItem(item)} className="edit">
          <FaEdit color='purple'></FaEdit>
        </button>
        <button onClick={()=>deleteItem(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}


export default FeedBackItem