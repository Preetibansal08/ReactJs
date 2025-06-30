import { useState } from "react"
import Card from "./components/Card"
import {data} from "./utilis/data"

function App() {
  
  const [val , setVal] = useState('')
  const [filterData , setFilterData] = useState(data)
  function filterHandler(){
      // console.log(val)
      let res = data.filter((item)=> item.title.toLowerCase().includes(val.toLowerCase()))
      // console.log(res)
      setFilterData(res)
  }
  return (
    <div>
      <h1>Raste ka maal Saste Mai</h1>
      <div>
        <input title="text" placeholder="Kya chaiye apko?..." onChange={(e) => setVal(e.target.value)}/>
        <button onClick={filterHandler}>Search</button>
      </div>
      <br/>
      <Card data={filterData}/>
    </div>
  )
  
}

export default App