import React from 'react';
import './About.css';
import Roberto from '../Img/Roberto.jpg';
import Kevin from '../Img/Kevin.png';
import Oscar from '../Img/Oscar.jpg';

export  const About = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutContainer-superior">
                <div className="aboutContainer-1">
                   <h2>Mision y Vision</h2> 

                   <p>
                       jkdkajsdjkaskdna<br></br>
                       segundo
                   </p>
                </div>
                <div className="aboutContainer-2">
                   <h2>Objetivos Generales</h2>

                   <p>etc etc etc etc
                   etc etc etc etc etc
                   </p> 
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
