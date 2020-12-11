//importer les bibliotheques et les composants de notre projet
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import Card from './Card';

//Create le composant principal-----------------------
//Démo 1 : Création d'un composant simple
/*const App = () => {
  const hello = {text : "Hello"};
  const sayHello = () =>{
    return "Hello from function";
  }
  return (
  <div>
    <label className="texteRouge" htmlFor="name">Nom : </label>
    <input type="text" id="name" style={{border : '1px solid red'}} />
    <button style={{backgroundColor: 'blue', color : 'white'}}>
      {hello.text}
    </button>
  </div>
  )
}*/

//Démo 2 : créer une application plus riche :
// - Imbriquer des composants
// - Réutiliser un composant
// - Paramétrer un composant

const App = () =>{
  return (
    <div className="ui container comments">
      <Card>
        <h3>Sondage d'opignon</h3>
        <p>Avez vous apprécié l'article?</p>
      </Card>
      <Card>
        <Comment
          name="Paul"
          image="avatar1.jpg"
          date_publication="11/12/2020 15:00"
          text="Excellent article!" />
      </Card>
      <Card>
        <Comment
          name="Michel"
          image="avatar1.jpg"
          date_publication="09/12/2020 09:00"
          text="Très inspirant!"/>
      </Card>
      <Card>
        <Comment
          name="Marie"
          image="avatar2.png"
          date_publication="20/11/2020 20:00"
          text="Merci pour le partage"/>
      </Card>
    </div>
  );
}
/*
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="Avatar" src="avatar1.jpg" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Michel
          </a>
          <div className="metadata">
            <span className="date">09/12/2020 à 09:00</span>
          </div>
          <div className="text">Article interessant</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="Avatar" src="avatar2.png" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Marie
          </a>
          <div className="metadata">
            <span className="date">20/11/2020 à 20:00</span>
          </div>
          <div className="text">Excellent!</div>
        </div>
      </div>
      */

//Intégrer les composants créés dans le DOM
ReactDOM.render(
  <App />,
  document.querySelector("#root")
)


/*
function App{

}

const App = function(){

}

const App = ()=>{

}

*/
