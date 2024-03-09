import React from 'react'

const Square = ({colorValue ,hexValue,isDarkText}) => {
  return (
    <div>
        <section 
        className='square'
        style={{backgroundColor: colorValue,
          color:isDarkText?"#000":'#fff'
        
        }}
        
        >
        <p>{colorValue?colorValue:'Empty value'}</p>
        <p>{hexValue?hexValue:null}</p>

        </section>

    </div>
  )
}
Square.defaultProps={
    colorValue: 'Empty color value'
}

export default Square
