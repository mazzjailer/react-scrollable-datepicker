import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "../App.css"

const DayPicker = (props) => {
  const height = props.height;
  const cellHeight = height / 5;
  const olPadding = cellHeight * 2.5 - cellHeight / 2;
  const days = [];
  const daysCount = daysInMonth(props.smonth, props.syear);
  for (let i = 1; i <= daysCount; i++) {
    days.push({id: i, name: i});
  }
  const currentDay = days[new Date().getDate() - 1];
  const [DayId, setId] = useState(currentDay.id);
  const [selectedDay, setSelectedDay] = useState(currentDay.name);
  const ref = useRef("");
  const handleClick = (day) => {
    setSelectedDay(day.name);
    setId(day.id);
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
        top: 40
      });
    }
  }, [selectedDay, ref]);
  const listItemsStyle = {
    height: cellHeight + "px",
  }
  const listStyle = {
    height: height + "px",
    padding: olPadding + "px 0",
  }
  const cellStyle = {
    height: cellHeight + "px",
  }
  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
  return (
    <>
      <nav className='cell' style={cellStyle}>
        <ol className='list scrollb' 
         style={listStyle}>
         {days.map((day) => <li ref={day.id === DayId ? ref : null} key={day.id} onClick={() => {handleClick(day)}} className= 'listItems' style={{...listItemsStyle, fontSize: props.size}}>{day.name}</li>)}
        </ol>
      </nav>
    </>
  )
}

export default DayPicker