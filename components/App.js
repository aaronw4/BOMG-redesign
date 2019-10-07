import React from 'react';
import data from './data';

function App() {
    return(
        <div>
            {Data.map(condition => {
                <div className={condition.id}>
                    <h1 className='title'>{condition.name}</h1>
                    <img src={condition.image} className='condImg'/>
                    <p className='description'>{condition.description}</p>
                </div>
            })}
        </div>
    )
}