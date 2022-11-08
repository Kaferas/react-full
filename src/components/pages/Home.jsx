import React from 'react'
import UserResults from '../users/userResults'
import UserSearch from '../users/UserSearch'
function Home() {
  return (
    <div>
      <UserSearch/>
      <UserResults />
    </div>
  )
}

export default Home