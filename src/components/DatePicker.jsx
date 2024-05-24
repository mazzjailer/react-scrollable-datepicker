import React from 'react'
import YearPicker from './YearPicker.jsx';
import MonthPicker from './MonthPicker.jsx';
import DayPicker from './DayPicker.jsx';
import '../App.css'

const DatePicker = (props) => {
  return (
    <div className='b'>
      <div className='container'>
        <YearPicker height={props.height} size={props.size}/>
      </div>
    </div>
  )
}

export default DatePicker