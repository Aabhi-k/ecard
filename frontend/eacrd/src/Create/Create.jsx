import React from 'react';
import './Create.css';
import DraggableCanvas from '../Canvas/DraggableCanvas';
const Create = () => {
    return (
        <div className='create'>
            <h1>Create Cards</h1>
            <DraggableCanvas />
        </div>
    );
};

export default Create;