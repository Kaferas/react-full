import React from 'react'

function Button({children,version,type,isDisabled}) {
  return (
    <div type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</div>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false,  
}

export default Button