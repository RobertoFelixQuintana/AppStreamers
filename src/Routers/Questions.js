import React from "react";
import "./Questions.css";

const Questions = () => {
  const Preguntas = [
    {
      id: "rd1",
      preg: "1.¿Somos promocionados por alguna compañia en especifico?",
      resp: "lorem isup",
    },
    {
      id: "rd2",
      preg: "2.¿Nosotros hacemos directamente el acuerdo con el promotor?",
      resp: "lorem isup",
    },
    {
      id: "rd3",
      preg: "3.¿Cuanto es el tiempo de duración de una suscripción?",
      resp: "lorem isup",
    },
    {
      id: "rd4",
      preg: "4.¿Con que beneficios cuento al contar con una suscripción?",
      resp: "lorem isup",
    },
    {
      id: "rd5",
      preg: "5.¿Que tipos de cobro aceptamos?",
      resp: "lorem isup",
    },
    {
      id: "rd6",
      preg: "6.¿Que sucede si un promotor no realiza su parte del acuerdo?",
      resp: "lorem isup",
    },
  ];
  return (
    <div className="questionsContainer">
      <div className="questionsTitle">
        <h1 className="questionsTitleH1">Preguntas frecuentes</h1>
      </div>
      <div className="answersContainer">
        <div className="tabs">
          {Preguntas.map((e) => (
            <div className="tab">
              <input className="in" type="radio" id={e.id} name="rd"></input>
              <label className="tab-label" for={e.id}>
                <p className="tab-p1">{e.preg}</p>
              </label>
              <div className="tab-content">
                <p className="tab-p2">{e.resp}</p>
              </div>
            </div>
          ))}
          <div class="tab">
            <input className="in" type="radio" id="rd7" name="rd" />
            <label for="rd7" class="tab-close">
              Close others &times;
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
