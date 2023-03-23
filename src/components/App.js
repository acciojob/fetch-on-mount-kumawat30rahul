
import React,{useEffect,useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  return (
    <div>
        {data && data.map((item,index) => (
          <div>
          <h2>{index+1}.{item.title}</h2>
          <p>{item.body}</p>
          </div>
        ))}
    </div>
  )
}

export default App
