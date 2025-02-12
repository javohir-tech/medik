import React from 'react'

function Header({header,subtitle}) {
  return (
    <div className='text-center com-header'>
      <h1>{header}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Header
