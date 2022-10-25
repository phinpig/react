import React from 'react';
//export default function Profile(props) { //
export default function Profile({ image, name, title, guest }) {
    return (
        <div className='profile'>
            <img src={image} alt='avater' />
            {guest && <span className='new'>NEW</span>}
            <h1>{name} </h1>
            <p>{title} </p>
        </div>
    );
}
