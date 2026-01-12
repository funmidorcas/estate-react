import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';


const Test = () => {
    const [name, setName ] = useState(" amos" )

    const changer = (e) => {
        setName(e.target.value)
    }

    const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Access the input element
  };
  return (
    <div>
        <input type="text" onChange={changer} />
        <p>{name}</p>
        <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default Test