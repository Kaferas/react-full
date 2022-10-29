import React from 'react'
// import PropTypes from 'prop-types'
function Header({text,bgColor,textColor}) {
    const styleSheet={
        backgroundColor:bgColor,
        color:textColor,
      }
  return (
    <header >
        <div className="container" style={styleSheet}>
            <h2>{text}</h2>
        </div>
    </header>
  )
}
Header.defaultProps={
    text: "😜😜FeedBack UI😜😜",
    bgColor:'rgba(0,0,0,.4)',
    textColor:'pink'
}
export default Header