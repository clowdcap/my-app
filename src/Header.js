import {useEffect, useState} from 'react';


function Header(){
    const [user, setUser] = useState('Jose');
    
    return (

        <div className="header">

            <div className="center">

            <div className="header__logo">
                <a href="#" className="logo-instagran">
                <img alt="Instagram" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                </a>
            </div>

            {
                (user)?
                <div className="header__logadoInfo">
                    <span>Olá <b>{user}</b> </span>
                    <a href="#">Postar</a>
                </div> 
                :
                <div className="header__loginForm">
                <form>
                    <input type="text" placeholder="Usuário"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="submit" name="acao" value="Login"/>
                    <input type="submit" name="acao" value="Registrar"/>
                </form>
                </div>
            }

            </div>

        </div>

    );
};


export default Header;