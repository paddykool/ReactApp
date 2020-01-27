import React from 'react';
import ReactDOM from 'react-dom';

function MyFirstComponent () {
    return (
        <div> 
            <h1>Paddy Mullan</h1>
            <p>Ah... ya all know</p>
            <ol>
                <li>Morocco</li>
                <li>Nepal</li>
                <li>Africa</li>
            </ol>
        </div>
    );
}

// JSX
ReactDOM.render(
    <MyFirstComponent />, 
    document.getElementById('root')
);