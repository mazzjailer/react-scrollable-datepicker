import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "../App.css"
import DayPicker from './DayPicker';

const MonthPicker = (props) => {
  const height = props.height;
  const cellHeight = height / 5;
  const olPadding = cellHeight * 2.5 - cellHeight / 2;
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" }
  ];
  const currentMonth = months[new Date().getMonth()];
  const [monthId, setmonthId] = useState(currentMonth.id);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.name);
  const ref = useRef("");
  const handleClick = (month) => {
    setSelectedMonth(month.name);
    setmonthId(month.id);
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
  }, [selectedMonth, ref]);
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
  return (
    <>
      <nav className='cell' style={cellStyle}>
        <ol className='list scrollb' 
         style={listStyle}>
          {months.map((month) => <li ref={month.id === monthId ? ref : null} key={month.id} onClick={() => {handleClick(month)}} className= 'listItems' style={{...listItemsStyle, fontSize: props.size}}>{month.name}</li>)}
        </ol>
      </nav>
      <DayPicker smonth={monthId} syear={props.syear} height={props.height} size={props.size}/>
    </>
  )
}

export default MonthPicker