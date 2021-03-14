import logo from './logo.svg';
import './App.css';
import {db} from './firebase.js';
import {useEffect, useState} from 'react';


function App() {

  const [user, setUser] = useState('Jose');


  useEffect(function(){
    
    

  }, []);




  return (
    <div className="App">

      <div className="header">

        <div className="center">

          <div className="header__logo">
            <a href="#" className="logo-instagran">
              <img alt="Instagram" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
            </a>
          </div>

          {
            (user)?
              <div className="header__loginForm">
                <form>
                  <input type="text" placeholder="Pesquisar"/>
                  <input type="submit" name="acao" value="Deslogar"/>
                </form>
              </div>
            :
            <div className="header__loginForm">
              <form>
                <input type="text" placeholder="Login"/>
                <input type="password" placeholder="Senha"/>
                <input type="submit" name="acao" value="Logar"/>
              </form>
            </div>
          }


          

        </div>

      </div>

    </div>
  );
}

export default App;
