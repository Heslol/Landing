import React, { useEffect } from 'react'

const Block = ({post}) => {  

    const {id, name, describe} = post;

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min) + min)
    };

    let random = getRandom(10, 16);


    return (
        <>
            <div className='post' key={id}>
                <h2 className='post_title'>{name}</h2>
                <div className='post_images'>
                    <img alt='102' src={`https://picsum.photos/id/${random}/300/300`}/>
                    <img alt='102' src={`https://picsum.photos/id/${++random}/300/300`}/>
                    <img alt='102' src={`https://picsum.photos/id/${++random}/300/300`}/>
                    <img alt='102' src={`https://picsum.photos/id/${++random}/300/300`}/>
                </div>
                <p className='post_subtitle'>{describe}</p>
            </div>
        </>
    )
};

export default React.memo(Block);
