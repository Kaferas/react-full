import "./App.css";
import {v4 as uuidv4} from "uuid"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackData from "./data/FeedBackData"
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"
import AboutPage from "./pages/AboutPage"
import {useState} from "react"

function App() {
  const [feedBackData,setFeedBackData]=useState(FeedBackData)
  const addFeedBack=(addedFeed)=>{
    addedFeed.id=uuidv4();
    setFeedBackData([addedFeed,...feedBackData]);
  }
  const deleteItem=(id)=>{
    if(window.confirm("Are you sure you want to Delete?")){
      setFeedBackData(feedBackData.filter((item)=>{
       return item.id !== id
      }));
    }
  }
  return (
    <Router>
      <div >
        <Header bgColor="black" textColor="pink" />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedBackForm handleAdd={addFeedBack}/>
                <FeedBackStats feedBackData={feedBackData} />
                < FeedBackList feedback={feedBackData} handleDelete={deleteItem}/>
              </>
            }>
            </Route>
          <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
