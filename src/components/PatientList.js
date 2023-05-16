import PatientNewEdit from "./PatientNewEdit"
import { useState } from "react"

export default function PatientList(props){
    const patientList = props.patients.map((patient, index) => 
        <li key={index}>{patient.name}</li>
    )

    const [PNE_view, setPNE_view] = useState(false);
    const [PNE_class, setPNE_class] = useState({ visibility: "hidden" });

    function newPatient() {
        if(PNE_view) {
            setPNE_class({});
        } else {
            setPNE_class({ visibility: "hidden" });
        }

        setPNE_view(!PNE_view);
    }

    function savePatient(patientNew) {
        props.addPatient(patientNew);
        newPatient();
    }


    return(
        <div>
            <ul>
                {patientList}
            </ul>
            {
                PNE_view
                &&
                <PatientNewEdit
                    title={"Novo"}
                    class={PNE_class}
                    save={savePatient}
                    patient={{name: ""}}
                />
            }
            <button onClick={newPatient}>Novo Paciente</button>
        </div>
    )
}