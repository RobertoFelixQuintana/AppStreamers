import React from 'react';
import './FormData.css';
import IconoRojo from '../Icons/PlanInactivo.png';
import IconoVerde from '../Icons/palomita_verde.png'

const FormData = () => {
    const plan = localStorage.getItem("plan");
    console.log('plan',plan)
    return (
        <div className="containerFormInfo">
            <div className="FormDataInfo">
                <div className="FormDataInfo-Header">
                    <div className="FormDataInfo-TittleActiveImg">
                        <h3>Estado del plan</h3>
                    </div>
                    <div className="FormDataInfo-TittleDescription">
                        <h3>Descripcion del Plan</h3>
                    </div>
                </div>
                <div className="FormDataInfo-Content">
                    <div className="FormDataInfo-ActiveImg">
                        { plan !== 'Usted no cuenta con algun plan' ?
                            (
                                <img className="logoPlan" src={IconoVerde} width="80rem" alt="logo plan"></img>
                            ):(
                                <img className="logoPlan" src={IconoRojo} width="80rem" alt="logo plan"></img>
                            )
                        }
                    </div>
                    <div className="FormDataInfo-Description">
                        <p><b>{plan}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormData;
