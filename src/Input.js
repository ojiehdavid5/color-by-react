import React from 'react'

import colorNames from 'colornames'

const Input = ({colorValue,setColorValue ,setHexValue ,isDarkText,setIsDarkText }) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <label>Add color Name:</label>
      <input
      type='text'
      value={colorValue}
      autoFocus
      required
      placeholder='Add color Name'
      onChange={(e)=>{
      setColorValue(e.target.value);
      setHexValue(colorNames(e.target.value))}}
/>

<button

type='button'
onClick={()=> setIsDarkText(!isDarkText)}


>
  Toggle Text colors

</button>
    </form>
  )
}

export default Input
