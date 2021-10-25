import React, { Component } from 'react';
import './Home.css';
import Kevin from '../Img/Kevin.png';

class Home extends Component {
    
    render() {
        const Usuarios = [
            {
              id: "1",
              nombre: "Kevin",
              edad: 21,
              sexo:"Hombre",
              apoyo:15000,
              aficion:"Creador de contenido",
              url:"data:image/jpeg;base64,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",
              width:"100%",
            },
            {
              id: "2",
              nombre: "Paulo",
              edad: 22,
              sexo:"Hombre",
              apoyo:15000,
              aficion:"Streamer",
              url:"https://eststatic.com/2676/conversions/malas-personas-social.jpg",
              width:"250rem",
            },
            {
              id: "3",
              nombre: "Maria",
              edad: 20,
              sexo:"Mujer",
              apoyo:15000,
              aficion:"Streamer",
              url:"https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg",
              width:"150rem",
            },
            {
              id: "4",
              nombre: "Pepe",
              edad: 19,
              sexo:"Hombre",
              apoyo:15000,
              aficion:"Creador de contenido/Streamer",
              url:"https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg",
              width:"230rem",
            },
            {
              id: "5",
              nombre: "Puff",
              edad: 20,
              sexo:"Mujer",
              apoyo:15000,
              aficion:"Streamer",
              url:"https://img.huffingtonpost.com/asset/5f063bac1f00003d07337b92.jpeg?ops=scalefit_720_noupscale",
              width:"270rem",
            },
            {
              id: "6",
              nombre: "Robert",
              edad: 23,
              sexo:"Hombre",
              apoyo:16000,
              aficion:"Creador de contenido",
              url:"https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
              width:"290rem",
            },
            {
                id: "7",
                nombre: "Max",
                edad: 23,
                sexo:"Hombre",
                apoyo:16000,
                aficion:"Creador de contenido",
                url:"https://media.discordapp.net/attachments/900151915965468713/901983315874181120/imagen_2021-10-24_165805.png?width=465&height=310",
                width:"290rem",
              },
              {
                id: "8",
                nombre: "Ricardo",
                edad: 23,
                sexo:"Hombre",
                apoyo:16000,
                aficion:"Creador de contenido",
                url:"https://media.discordapp.net/attachments/900151915965468713/901984123256733746/imagen_2021-10-24_170200.png?width=465&height=465",
                width:"290rem",
              },
              {
                id: "9",
                nombre: "Laura",
                edad: 23,
                sexo:"Mujer",
                apoyo:22000,
                aficion:"Creador de contenido",
                url:"https://cdn.discordapp.com/attachments/900151915965468713/901984402333126736/michael-dam-258165-unsplash_WEB2.png",
                width:"290rem",
              },
          ];
        return (
            <div className="homeContainer">
                <div className="profileBox">
                    <h2>Perfiles</h2>
                </div>
                <div className="homeContainer-profile">
                    {Usuarios.map((e,index) => (
                        <div className="home-profile" key={index}>
                            <div className="home-card">
                                <div className="home-card-img">
                                    <img src={e.url} alt="perfil"></img>
                                </div>
                                <div className="home-card-name">

                                    <p><strong>{e.nombre}</strong></p>
                                </div>
                                <div className="home-card-description">
                                    <p><strong>Edad: {e.edad}</strong></p>
                                    <p><strong>Sexo: {e.sexo}</strong></p>
                                    <p><strong>Apoyo monetario: ${(e.apoyo).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} pesos</strong></p>
                                    <p><strong>Aficion: {e.aficion}</strong></p>
                                </div>
                            </div>
                            <div className="home-card-btn">
                                 <button className="card-button negro" type="button">Perfil</button>
                                 <button className="card-button azul" type="button">Seguir</button>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="separator">
                </div>
                
            </div>
        )
    }
}

export default Home;
