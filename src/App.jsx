import Useritem from "./components/Useritem"
import Profile from "./components/Profile"
const App = () => {
  let role = "Frontend Devloper"
  const users = ["Sanni", "Amit", "Rahul"]

  return (
    <div>
      <ul> {users.map((user,index)=>(
        <Useritem key={index} name={user}/>

      ))}</ul>
     

<Profile name="sanni" role="admin" isAdmin={true}/>
      <h1>Sanni Singh</h1>
      <h1 className="">{role}</h1>
      <p>This is my first React component</p>

      <ul>{users.map((user,index)=>(
        <li key={index}>{user}</li>
      ))}</ul>
    </div>
  )
}

export default App
