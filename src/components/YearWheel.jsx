import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "../App.css"

const YearWheel = () => {
  const year = new Date().getFullYear()
  const years = []
  const [selectedNumber, setSelectedNumber] = useState("");
  for (let i = 0; i < 100; i++) {
    years.push(year - i)
  }
  const yearsList = years.map((year) => <li key={year} onClick={() => {setSelectedNumber(year)}} className='p-2'>{year}</li>);

  return (
      <div className='border-2 border-solid absolute p-2 flex w-fit h-32 rounded-3xl'>
        <ol className='text-white relative overflow-y-scroll scrollb text-6xl'>{yearsList}</ol>
      </div>
  )
}

export default YearWheel