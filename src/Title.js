import React from 'react'

function Title(props) {
  return (
    <div className='title-header flex justify-center items-center'>
          <img src={props.image} alt="title" /> 
        </div>
  )
}
export default Title