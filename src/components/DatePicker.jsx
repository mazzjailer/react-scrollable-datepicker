import React, { useEffect, useMemo } from 'react'
import {useState} from 'react'
import YearPicker from './YearPicker.jsx';
import MonthPicker from './MonthPicker.jsx';
import DayPicker from './DayPicker.jsx';
import '../App.css'

const DatePicker = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [monthId, setMonthId] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const numFixer = (num) => {
    if (num < 10) {
      return `0${num}`
    }
    else 
      return num
  }
  useEffect(() => {
    props.setDate(`${selectedYear}-${numFixer(monthId)}-${numFixer(selectedDay)}`);
  })
  return (
    <div className='dateContainer' style={{height: props.height}}>
      <YearPicker setYear={setSelectedYear} selectedYear={selectedYear} height={props.height} size={props.size}/>
      <MonthPicker setMonthId={setMonthId} monthId={monthId} syear={selectedYear} height={props.height} size={props.size}/>
      <DayPicker setDay={setSelectedDay} selectedDay={selectedDay} smonth={monthId} syear={selectedYear} height={props.height} size={props.size}/>
    </div>
  )
}

export default DatePicker