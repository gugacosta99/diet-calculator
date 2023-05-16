export default function PatientList(props){
    const patientList = props.patients.map((patient, index) => 
        <li key={index}>{patient.name}</li>
    )

    function newPatient() {
        const patientNew = {
            name: "Gustavo"
        }

        props.addPatient(patientNew)
    }


    return(
        <div>
            <ul>
                {patientList}
            </ul>
            <button onClick={newPatient}>Novo Paciente</button>
        </div>
    )
}