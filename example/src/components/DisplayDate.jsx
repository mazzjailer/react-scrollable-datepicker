import React from 'react'

function DisplayDate(props) {
  return (
    <div className='display'>
      <h2><i>Selected date is: </i></h2>
      <h1 className='date'>{props.date}</h1>
    </div>
  )
}

export default DisplayDate