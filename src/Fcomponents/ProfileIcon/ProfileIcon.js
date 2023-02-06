import React from 'react'

export const ProfileIcon = ({storyBorder, width, height, image}) => {

  return (
    <>
      <div className={`${storyBorder}`}>
        <img src={image} width={width} height={height} alt='222'/>
      </div>
    </>
  )
}
