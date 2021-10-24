import React, { Component } from 'react';
import './Home.css';
import Kevin from '../Img/Kevin.png';

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="profileBox">
                    <h2>Perfiles</h2>
                </div>
                <div className="homeContainer-profile">
                    <div className="home-profile">
                        <div className="home-card">
                            <div className="home-card-img">
                                <img src={Kevin} alt="perfil" width="140rem"></img>
                            </div>
                            <div className="home-card-name">
                                <p><strong>Kevin Itzay</strong></p>
                            </div>
                            <div className="home-card-description">
                                <p><strong>Edad: 21 años</strong></p>
                                <p><strong>Sexo: Hombre</strong></p>
                                <p><strong>Apoyo monetario: $15,000.00 pesos</strong></p>
                                <p><strong>Aficion: Creador de contenido</strong></p>
                            </div>
                        </div>
                        <div className="home-card-btn">
                             <button className="card-button negro" type="button">Perfil</button>
                             <button className="card-button azul" type="button">Seguir</button>
                         </div>
                    </div>
                </div>

                <div className="separator">
                </div>
                
            </div>
        )
    }
}

export default Home;
