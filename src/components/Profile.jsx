import React from 'react'

c/* onst Profile = (props) => {
  return (

    
    <div>
         <h2>{props.name}</h2>
         <h2>{props.role}</h2>
    </div>

  )
}

export default Profile
 
 */

// destructuring

 const Profile = ({role , name , isAdmin}) => {
  return (

    
    <div>
         <h2>{name}</h2>
         <h2>{role}</h2>
         <p>{isAdmin?"Admin Access":"User Access"}</p>
    </div>

  )
}

export default Profile
 