import React from 'react'
import {useState, useEffect, useRef} from 'react'
import '../styles/style.css'

const DayPicker = (props) => {
  const height = props.height;
  const cellHeight = height / 5;
  const olPadding = cellHeight * 2.5 - cellHeight / 2;
  const days = [];
  const daysCount = daysInMonth(props.smonth, props.syear);
  for (let i = 1; i <= daysCount; i++) {
    days.push({id: i, name: i});
  }
  const [dayId, setId] = useState();
  const ref = useRef("");
  const handleClick = (day) => {
    props.setDay(day.name);
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
  }, [props.selectedDay, ref]);
  const listItemsStyle = {
    height: cellHeight + "px",
  }
  const listStyle = {
    height: height + "px",
    padding: olPadding + "px 0",
  }
  const cellStyle = {
    height: cellHeight + "px",
    backgroundColor: props.cellColor,
    outlineColor: props.isDarkMode ? "white" : null,
  }
  const itemsStyle = {
    ...listItemsStyle,
    fontSize: props.size,
    color: props.isDarkMode ? "white" : null
  }
  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
  return (
    <>
      <nav className='cell' style={cellStyle}>
        <ol className='list scrollb' 
         style={listStyle}>
         {days.map((day) => <li ref={day.id === dayId ? ref : null} key={day.id} onClick={() => {handleClick(day)}} className= 'listItems' style={itemsStyle}>{day.name}</li>)}
        </ol>
      </nav>
    </>
  )
}

export default DayPicker