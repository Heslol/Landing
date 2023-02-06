import React from 'react'

export const Icon = ({onClick, count}) => {
  return (
    <>
        <div className='icon' onClick={onClick}>
          <span className="material-symbols-outlined">call</span>
          <span className='count'>{count}</span>
        </div>
    </>
  )
}
