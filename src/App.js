import "./App.css";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackData from "./data/FeedBackData"
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"
import {useState} from "react"

function App() {
  const [feedBackData,setFeedBackData]=useState(FeedBackData)
 
  const deleteItem=(id)=>{
    if(window.confirm("Are you sure you want to Delete?")){
      setFeedBackData(feedBackData.filter((item)=>{
       return item.id !== id
      }));
    }
  }
  return (
    <div >
        <Header bgColor="black" textColor="pink" />
        <div className="container">
          <FeedBackForm/>
          <FeedBackStats feedBackData={feedBackData} />
         < FeedBackList feedback={feedBackData} handleDelete={deleteItem}/>
        </div>
    </div>
  );
}

export default App;
