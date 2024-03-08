import React from 'react'

const Square = ({colorValue}) => {
  return (
    <div>
        <section 
        className='square'
        style={{backgroundColor: colorValue}}
        
        >
        <p>{colorValue?colorValue:'Empty value'}</p>

        </section>

    </div>
  )
}
Square.defaultProps={
    colorValue: 'Empty color value'
}

export default Square
