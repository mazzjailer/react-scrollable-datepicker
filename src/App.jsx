import React from 'react';
import {useState} from 'react'
import "./App.css"
import DatePicker from './components/DatePicker.jsx';
const App = () => {
  const [date, setDate] = useState();
  return (
    <div className='b'>
      <DatePicker setDate={setDate} height={400} size={40}/>
    </div>
  )
}

export default App;