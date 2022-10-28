import './App.css';
import {useState} from "react"

function App() {
const [colored, setColor] = useState("#0000b2")
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:colored}}>
          {
             setInterval(()=>{
              setColor("#"+
                Math.floor(Math.random()*16777215).toString(16)
              )
            },3000)
          }
          This Kaferas Your Instructor Of Everyday
        </p>
      </header>
    </div>
  );
}

export default App;
