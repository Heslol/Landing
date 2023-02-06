import React, { useEffect, useState, useRef } from 'react'
import { Chat } from '../../Components/Chat/Chat'
import { send, propositions } from '../../Share/data'
import { Icon } from '../../Fcomponents/Icon/Icon'
import { Tour } from '../../Components/Tour/Tour'

export const Likes = () => {

  const [openChat, setOpenChat] = useState(false)
  const [chatWindow, setChatWindow] = useState(send)
  const [tours, setTour] = useState(propositions);
  const [hover, setHover] = useState(false);
  const [counter, setCounter] = useState(1);
  const ref = useRef()

  const handleTextItem = (n, input) => {
    setChatWindow(
      chatWindow.map((chat, index) => {
        if(index === n) {
          return {
            ...chat, input 
          }
        }
        return chat;
      })
    )
  };

  const handleTourItem = (id) => {
    const newTour = {
      title : 'My tour',
      text : 'Lorem ipsum',
      price : 600
    }; 
    setTour((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id);
      return [...prevState.slice(0, idx + 1), newTour, ...prevState.slice(idx + 2)]
    })
  };

  const iconClick = () => {
    setOpenChat((prevState) => !prevState);
    setCounter((ref.current.counter))
  };

  useEffect(() => {
    setTimeout(() => {
      setHover((prevState) => !prevState)
    }, 1000)
  },[hover]);
  
  return (
    <>
      <div className='propositions'>
        <Tour tours={tours} hover={true} onAdded={handleTourItem}/>
      </div> 
      {openChat ? 
      (<Chat 
        window={chatWindow}  
        onChangeText={handleTextItem}
        onClose={() => setOpenChat((prevState) => !prevState)}
      />
      ) :
      (hover && <Icon count={counter} onClick={iconClick}/>) 
      }
    </>
  )
}
