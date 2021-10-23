import React from 'react';
import './About.css';

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
                   <h2>Objetivos</h2>

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
                            <span>foto1</span>
                        </div>
                        
                        <div className="card-description">
                            <p><strong>Roberto Felix</strong></p>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <span>foto1</span>
                        </div>
                        
                        <div className="card-description">
                            <p><strong>Oscar Humberto</strong></p>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <span>foto1</span>
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
