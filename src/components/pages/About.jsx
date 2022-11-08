import React from 'react'

function About() {
  return (
    <div>
    <h1 className='text 6xl mb-4'>
      Github Finder
    </h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search Github Profiles and see profile details . This project is part
      of the <a href="https://www.udemy.com/course/modern-react-front-to-back">
        {''}
        React Front to Back 
      </a>{''}
      Udemy Course by 
      <strong>
        <a href="https://traversymedia.com">Brad Traversy</a>
        .
      </strong>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a href="http://twitter.com/hassibmoddasser" className='text-white'>Hassib Moddaser</a>
      </p>
    </p>
    </div>
  )
}

export default About