import React, { useState } from 'react';
import { Button } from '../../Fcomponents/Button/Button';
import { ProfileIcon } from '../../Fcomponents/ProfileIcon/ProfileIcon';
import logo from '../../Images/Logo.jpeg'


export const Chat = ({window, onClose, onChangeText}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const chat = window[currentIndex];
    const [value, setValue] = useState([chat.text]);

    const hello = () => {
        setValue((prevState) => {
            const newItem = prevState.push(chat.input);
            return [...prevState]
        });
    };

    return (
        <div className='chat'>
            <header>
                <ProfileIcon image={logo} width={30} height={25}/>
                <h4 className='chat_title'>{chat.name}</h4>
                <Button value='X' onClick={onClose}/>
            </header>
            <p className='chat_text'>
                {value.map((mes, index) => {
                    return (
                        <span key={index}>{mes}</span>
                    )
                })}
            </p>
            <p className='chat_answer'>
                <textarea className='chat_input' value={chat.input} onChange={(e) => onChangeText(currentIndex, e.target.value)}/>
                <Button value='send' onClick={hello}/>
            </p>
        </div>
    )
}
    
