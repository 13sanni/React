import React, { useRef } from 'react'

const UseRef = () => {
    const nameRef = useRef();

    const handleClick = ()=>{
        console.log(nameRef.current.value)
    }
  return (
    <div>
        <input type="text" ref={nameRef} />
      <button onClick={handleClick}> log name</button>
    </div>
  )
}

export default UseRef
