
function Card({children,reverse}) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>{props.children}</div>
    <div className='card' style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)':'white',
      color: reverse ? 'white' : 'rgba(0,0,0,0.5)'
    }}>{children}</div>
  )
}

Card.defaultProps={
  reverse:false
}


export default Card