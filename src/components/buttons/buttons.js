import React from 'react';
import './buttons.css';

export default function(props) {
  return (
    <div className="buttons">
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.quote} ${props.author}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      <button id="new-quote" onClick={props.handle}>New Quote</button>
    </div>
  );
}