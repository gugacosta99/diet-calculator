import PatientNewEdit from "./PatientNewEdit"
import { useState } from "react"

export default function PatientList(props){
    const patientList = props.patients.map((patient, index) => 
        <li className="list-item" key={index} onClick={() => {props.editPatient(index)}}>{patient.name}</li>
    )

    return(
        <div className="list">
            <div className="list-header">
                <h4>Pacientes</h4>
                <button onClick={() => props.setPage('patientNew')}>+</button>
            </div>
            <ul>
                {patientList}
            </ul>
        </div>
    )
}