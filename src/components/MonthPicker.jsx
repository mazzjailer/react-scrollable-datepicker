import React from 'react'
import {useState, useEffect, useRef} from 'react'
import '../styles/style.css'

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
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.name);
  const ref = useRef("");
  const handleClick = (month) => {
    setSelectedMonth(month.name);
    props.setMonthId(month.id);
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
    backgroundColor: props.cellColor,
    outlineColor: props.isDarkMode ? "white" : null,
  }
  const itemsStyle = {
    ...listItemsStyle,
    fontSize: props.size,
    color: props.isDarkMode ? "white" : null
  }
  return (
    <>
      <nav className='cell' style={cellStyle}>
        <ol className='list scrollb' 
         style={listStyle}>
          {months.map((month) => <li ref={month.id === props.monthId ? ref : null} key={month.id} onClick={() => {handleClick(month)}} className= 'listItems' style={itemsStyle}>{month.name}</li>)}
        </ol>
      </nav>
    </>
  )
}

export default MonthPicker