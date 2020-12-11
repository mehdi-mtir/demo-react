//import les bibliotheques
import React from 'react';

//Creer le composant
const Comment = (props) =>{
  //console.log(props);
  return(
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="Avatar" src={props.image} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">{props.date_publication}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
  );
};

export default Comment;
