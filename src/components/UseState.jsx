import React, { use } from 'react'
import { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);
    const [name,setName]=useState("")

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(prev => prev+1)}> increase</button>
        <h2>Name :{name}</h2>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      
    </div>
  )
}

export default UseState
