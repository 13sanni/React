import Useritem from "./components/Useritem"
import Profile from "./components/Profile"
import UseState from "./components/UseState"
import CounterButton from "./components/CounterButton"
import { useState } from "react"
const App = () => {

      let role = "Frontend Devloper"
      const users = ["Sanni", "Amit", "Rahul"]

  //DATA FLOW 
     const [count, setCount] =useState(0);
     const increaseCount = () => {
        setCount(prev => prev+1)
 }

return (
  <div>
   {/*  data flow */}
    <CounterButton count={count} onIncrease={increaseCount} />

  {/*   map function  by props */}
    <ul> {users.map((user, index) => (
      <Useritem key={index} name={user} />

    ))}</ul>

    <UseState />

    <Profile name="sanni" role="admin" isAdmin={true} />
    <h1>Sanni Singh</h1>
    <h1 className="">{role}</h1>
    <p>This is my first React component</p>

    <ul>{users.map((user, index) => (
      <li key={index}>{user}</li>
    ))}</ul>
  </div>
)
}

export default App
