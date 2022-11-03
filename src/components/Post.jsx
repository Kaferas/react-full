import React from 'react'
import {Navigate,useNavigate,Routes,Route} from "react-router-dom"
function Post() {
  const status=200
  const navigate= useNavigate();
  if(status===404){
    return <Navigate to='/notfound'></Navigate>
  }
  const onClick=()=>{
    console.log("This is React")
    navigate("/post/show")
  }
  return (
    <>
      <h1>Post is Here</h1>
      <button onClick={onClick} className="btn-secondary">Click</button>
      <Routes>
        <Route path='/show' element={<h1>This is Show</h1>}/>
      </Routes>
    </>
  )
}

export default Post