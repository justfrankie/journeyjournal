
import './App.css';
import axios from 'axios'
import React , {useEffect, useState} from 'react'

const BodyEntries = (entries) => {
  // entries ? entries.map((entry, key)=> {
  // return <div key={key}>
  // <p>{entry.date}</p>
  // <h2>{entry.title}</h2>
  // <p>{entry.body}</p>
  // </div>
  // }) : <></>
  console.log(entries)
}
function App() {
const [entries, setEntries] = useState([])
useEffect(()=>{
  axios.get('http://localhost:8080/entries/all')
  .then(data=> {
    console.log(data)
  setEntries(data.data)
  })
  .catch(err => console.log(err))
},[])
  return (
    <div className="App">
      <header className="App-header">
      <ul>
      <li>home icon</li>
        <li>Jouney Journal</li>
        <li>user icon</li>
      </ul>
      </header>

      <body>
        <div>
        <BodyEntries entries={entries}/>
<textarea id="bodyinput">

</textarea>
        </div>
      </body>
    </div>
  );
}

export default App;
