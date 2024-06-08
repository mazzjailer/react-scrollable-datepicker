import React from 'react';
import {useState} from 'react'
import './index.css'
import DatePicker from 'react-scrollable-datepicker';
import DisplayDate from './components/DisplayDate';
const App = () => {
  const [date, setDate] = useState();
  
  return (
    <div className='b'>
      <DisplayDate date={date}/>
      <DatePicker setDate={setDate} height={400} size={40} cellColor={"#B0DB43"}/>
    </div>
  )
}

export default App;