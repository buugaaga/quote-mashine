import React from 'react';
import './text.css';

export default function text(props) {

   return (
    <div>
     <h3 id="text">{props.quote}</h3>
     <p id="author">{props.author}</p>
    </div>
   )
}
