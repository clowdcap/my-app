import {useEffect, useState} from 'react';


function Header(props){
    
    useEffect(function(){
        
    }, []);

    
    function abrirModalCriarConta(e){
        e.preventDefault();
        alert('Criar Conta');
    }

    return (

        <div className="header">

            <div className="modalCriarConta">
                <div className="formCriarConta">
                    <h3>Registrar Conta</h3>
                    <form>
                        <input type="text" placeholder="Seu Email"/>
                        <br/>
                        <input type="text" placeholder="Seu Usuário"/>
                        <br/>
                        <input type="password" placeholder="Sua Senha"/>
                        <br/>
                        <input type="submit" name="cadastrar" value="Registrar"/>
                    </form>
                </div>
            </div>

            <div className="center">

            <div className="header__logo">
                <a href="#" className="logo-instagran">
                <img alt="Instagram" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                </a>
            </div>

            {
                (props.user)?
                <div className="header__logadoInfo">
                    <span>Olá <b>{props.user}</b> </span>
                    <a href="#">Postar</a>
                </div> 
                :
                <div className="header__loginForm">
                <form>
                    <input type="text" placeholder="Usuário"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="submit" name="acao" value="Login"/>
                    <a onClick= {
                        function(e) {
                            abrirModalCriarConta(e)
                        }
                    } href="#">Registrar</a>

                </form>
                </div>
            }

            </div>

        </div>

    );
};


export default Header;