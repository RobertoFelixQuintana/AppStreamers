import React from "react";
import "./Questions.css";

const Questions = () => {
  const Preguntas = [
    {
      id: "chck1",
      preg: "1. ¿Somos promocionados por alguna compañia en especifico?",
      resp: " No, nosotros somos una empresa privada que no es influenciada por otras.",
    },
    {
      id: "rd2",
      preg: "2. ¿Nosotros hacemos directamente el acuerdo con el promotor?",
      resp: "No, el acuerdo queda pactado o tratado directamente entre el usuario(beneficiario) y el promotor.",
    },
    {
      id: "rd3",
      preg: "3. ¿Cuanto es el tiempo de duración de una suscripción?",
      resp: "Contamos con 2 tipos de suscripción una que dura 6 meses y la otra de un año.",
    },
    {
      id: "rd4",
      preg: "4. ¿Con que beneficios cuento al contar con una suscripción?",
      resp: "Únicamente podrás acceder a la pagina poseyendo una suscripción, por ende el beneficio del mismo es evidente.",
    },
    {
      id: "rd5",
      preg: "5. ¿Que tipos de cobro aceptamos?",
      resp: "Aceptamos pagos únicamente por transferencia(Paypal,etc).",
    },
    {
      id: "rd6",
      preg: "6. ¿Que sucede si un promotor no realiza su parte del acuerdo?",
      resp: "Si el promotor infringe normas dentro de la pagina, la consecuencia seria ser restringido de la misma, esto aplicatambién para los creadores de contenido.",
    },
  ];
  return (
    <div className="questionsContainer">
      <div className="questionsTitle">
        <h1 className="questionsTitleH1">Preguntas frecuentes</h1>
      </div>
      <div className="answersContainer">
        <div className="tabsQ">
          {Preguntas.map((e) => (
            <div className="tabQ">
              <input className="inQ" type="checkbox" id={e.id} name="rd"></input>
              <label className="tab-labelQ" for={e.id}>
                <p className="tab-p1">{e.preg}</p>
              </label>
              <div className="tab-contentQ">
                <p className="tab-p2">{e.resp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
