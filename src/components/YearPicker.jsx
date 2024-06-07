import React from 'react'
import {useState, useEffect, useRef} from 'react'
import '../styles/style.css'

const YearPicker = (props) => {
  const height = props.height;
  const cellHeight = height / 5;
  const olPadding = cellHeight * 2.5 - cellHeight / 2;
  const year = new Date().getFullYear();
  const years = [];
  const [yearId, setId] = useState(year.id);
  const ref = useRef("");
  for (let i = 0; i < 100; i++) {
    years.push({id: year - i, name: year - i});
  }
  const handleClick = (year) => {
    props.setYear(year.name);
    setId(year.id);
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
  }, [props.selectedYear, ref]);
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
         {years.map((year) => <li ref={year.id === yearId ? ref : null} key={year.id} onClick={() => {handleClick(year)}} className= 'listItems' style={itemsStyle}>{year.name}</li>)}
        </ol>
      </nav>
    </>
  )
}

export default YearPicker