import React from 'react';

const Card = (props) =>{
  console.log(props);
  return(
    <div className="ui card">
      <div className="content">
      {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Accepter</div>
          <div className="ui basic red button">Refuser</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
