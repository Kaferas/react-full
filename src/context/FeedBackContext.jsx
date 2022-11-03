import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    { id: 2, rating: 3, text: "This Should Be Us my Friend" },
    { id: 4, rating: 8, text: "Regardless of whatever she did" },
    { id: 6, rating: 7, text: "Once i've been caught up by my Ex" },
    { id: 7, rating: 5, text: "Tryna be humble althought Rude tho" },
  ]);

  const [editFeed,setEditFeed]=useState({
    item:{},
    edit:false
  })

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      setFeedBack(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  const editItem=(item)=>{
    setEditFeed({
      item,
      edit:true
    });
  }

  const updateFeedBack=(id,upItem)=>{
   return  setFeedBack(feedback.map((item)=>(item.id===id ?{...item,...upItem}:item)));
  }
  const addFeedBack = (addedFeed) => {
    addedFeed.id = uuidv4();
    setFeedBack([addedFeed, ...feedback]);
  };
  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        editFeed,
        deleteItem,
        addFeedBack,
        editItem,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
