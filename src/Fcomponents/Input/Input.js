import React from 'react'

export const Input = ({value, placeholder, type, name, onChange}) => {

  return (
    <>
      <div className='input'>
        <span>{name}</span>
        <input 
        placeholder={placeholder} 
        value={value} 
        type={type}
        onChange={onChange}
        />
      </div>
    </>
  )
}
