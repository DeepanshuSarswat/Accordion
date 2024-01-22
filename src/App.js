import { useEffect, useState } from 'react';
import './App.css';
import Accordian from './components/accordian';

function App() {
  const [listData, setListData] = useState([]);
  const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response)=> response.json())
    .then((data)=> setListData(data))
  }

  useEffect(()=>{
    getData();
  },[]);


  return (
    <div className="App">
    <Accordian listData = {listData} />
    happy
    </div>
  );
}

export default App;
