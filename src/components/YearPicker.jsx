import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "../App.css"

const YearPicker = (props) => {
  const height = props.height;
  const cellHeight = height / 5;
  const olPadding = cellHeight * 2.5 - cellHeight / 2;
  const year = new Date().getFullYear();
  const years = [];
  const [id, setId] = useState("year");
  const [selectedYear, setSelectedYear] = useState(year);
  const ref = useRef("");
  for (let i = 0; i < 100; i++) {
    years.push({id: year - i, name: year - i});
  }
  const handleClick = (year) => {
    setSelectedYear(year.name);
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
  }, [selectedYear, ref]);
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
    <div className='container'>
      <nav className='cell' style={cellStyle}>
        <ol className='list scrollb' 
         style={listStyle}>
         {years.map((year) => <li ref={year.id === id ? ref : null} key={year.id} onClick={() => {handleClick(year)}} className= 'listItems' style={{...listItemsStyle,
          backgroundColor: year.name === selectedYear ? "rgb(249 168 212)" : "initial"
         }}>{year.name}</li>)}
        </ol>
      </nav>
    </div>
    </>
  )
}

export default YearPicker