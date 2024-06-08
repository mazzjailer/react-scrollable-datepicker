# React Scrollable Datepicker

<img src="https://github.com/mazzjailer/react-scroll-datepicker/blob/main/example/gifs/LightMode.gif" width="400"> &nbsp;&nbsp; <img src="https://github.com/mazzjailer/react-scroll-datepicker/blob/main/example/gifs/DarkMode.gif" width="400">

#### A simple scrolling date picker made with React. 📅

## Install

```
npm install react-scrollable-datepicker
```

## Usage

```js
import React from 'react';
import {useState} from 'react'
import DatePicker from 'react-scrollable-datepicker';
const App = () => {
  const [date, setDate] = useState();
  return (
    <div>
      <DatePicker setDate={setDate} height={400} size={40} cellColor={"pink"} isDarkMode={false}/>
    </div>
  )
}

export default App;
```

## Documentation

| Name       | Required | Type                          | Default          | Description                                     |
| ---------- | -------- | ----------------------------- | ---------------- | ----------------------------------------------  |
| date       | ✅      | string (YYYY, MM, DD)         | current date     | Selected date value                             |
| setDate    | ✅      | string or null (YYYY, MM, DD) | n/a              | Allows the components to return the date value  |
| height     | ✅      | number                        | n/a              | Custom height of the component                  |
| size       | ✅      | number                        | n/a              | Custom size of the font                         |
| cellColor  | ⛔      | string                        | rgb(249 168 212) | Custom color of the selected value              |
| isDarkMode | ⛔      | boolean                       | false            | Dark mode toggle                                |

## License

The MIT License.
