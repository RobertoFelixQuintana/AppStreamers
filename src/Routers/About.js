import React from 'react';
import './About.css';
import NavAbout from '../Components/TabAbout';
import Roberto from '../Img/Roberto.jpg';
import Kevin from '../Img/Kevin.png';
import Oscar from '../Img/Oscar.jpg';
import CreadorContenido from '../Img/CreadorContenido.png';

export  const About = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutContainer-superior">
                <div className="entry-header">
                    <h1>Mision, Visión y Objetivos</h1>
                </div>
                <div className="entry-content"> 
                    <div className="block-column">
                        <NavAbout/>
                    </div>
                    <div className="block-column-img">
                        <img width="350rem" src={CreadorContenido} alt="Creador de Contenido"></img>
                    </div>
                </div> 
            </div>
 
            <div className="aboutContainer-inferior">
                <div className="aboutContainer-inferior-title">
                    <h2>Integrantes</h2>
               </div>
               <div className="aboutContainer-card">
                    <div className="card">
                        <div className="card-img">
                            <img src={Roberto} alt="roberto" width="150rem"></img>
                        </div>
                        
                        <div className="card-description">
                            <p><strong>Roberto Felix</strong></p>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={Oscar} alt="roberto" width="160rem"></img>
                        </div>
                        
                        <div className="card-description">
                            <p><strong>Oscar Humberto</strong></p>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={Kevin} alt="roberto" width="140rem"></img>
                        </div>
                        
                        <div className="card-description">
                            <p><strong>Kevin Itzay</strong></p>
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}
