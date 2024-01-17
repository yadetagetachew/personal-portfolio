import React from 'react'

function Title(props) {
  return (
    <div className='title-header'>
          <img className='title' src={props.image} alt="title" /> 
        </div>
  )
}
export default Title