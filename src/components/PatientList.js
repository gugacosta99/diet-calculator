import PatientNewEdit from "./PatientNewEdit"
import { useState } from "react"

export default function PatientList(props){
    const patientList = props.patients.map((patient, index) => {
        return (
            <div className="list-item button" key={index} onClick={() => {props.editPatient(index)}}>
                <h3>{patient.name}</h3>
                <p> {patient.phone}<br/> {patient.email}</p>
            </div>
        )
    })

    return(
        <div className="list">
            <div className="list-header">
                <h4>Pacientes</h4>
                <button onClick={() => props.setPage('patientNew')}>+</button>
            </div>
            <div>
                {patientList}
            </div>
        </div>
    )
}