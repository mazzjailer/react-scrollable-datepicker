import React from 'react'
import YearPicker from './YearPicker.jsx';
import MonthPicker from './MonthPicker.jsx';

const DatePicker = (props) => {
  return (
    <>
      <YearPicker height={props.height}/>
      <MonthPicker height={props.height}/>
    </>
  )
}

export default DatePicker