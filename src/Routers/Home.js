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
              url:"https://p0.pikist.com/photos/474/706/boy-portrait-outdoors-facial-men-s-young-t-shirt-hair-person.jpg",
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
