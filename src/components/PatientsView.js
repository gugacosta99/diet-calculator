import PatientList from "./PatientList";
import PatientNewEdit from "./PatientNewEdit";
import { useState, useEffect } from "react";

export default function PatientsView(props){
    const [page, setPage] = useState('patientList');
    const [patients, setPatients] = useState(() => {
        const patients = localStorage.getItem("patients");
        if (patients != null) {
            return JSON.parse(patients);
        } else {
            return [];
        }
    });
    const [patientEdit, setPatientEdit] = useState({});
    const [indexEdit, setIndexEdit] = useState(0);

    function addPatient(newPatient){
        setPatients([
            ...patients,
            newPatient
        ])
    }

    function savePatient(patient) {
        setPatients(
            patients.map((pat, ind) => {
                if(ind === indexEdit) {
                    return patient;
                } else {
                    return pat;
                }
            })
        )
    }

    function editPatient(index){
        setPatientEdit(patients[index])
        setPage('patientEdit')
        setIndexEdit(index)
    }

    useEffect(() => {
        let patientsJSON = JSON.stringify(patients)
        localStorage.setItem("patients", patientsJSON);
    }, [patients])

    let currentPage = <div></div>
    switch (page) {
        case 'patientList':
            currentPage = <PatientList 
                patients = {patients}
                setPage = {setPage}
                editPatient = {editPatient}
            />
            break;
    
        case 'patientNew':
            let newPatient = {
                nome: "",
                birthday: "",
                gender: "",
                estadoCivil: "",
                email: "",
                phone: "",
                cpf: "",
                archived: false
            }
            currentPage = <PatientNewEdit
                title={"Novo"}
                save={addPatient}
                patient={newPatient}
                setPage = {setPage}
            />
            break;
    
        case 'patientEdit':
            currentPage = <PatientNewEdit
                title={"Editar"}
                save={savePatient}
                patient={patientEdit}
                setPage = {setPage}
            />
            break;
                
        default:
            break;
    }

    function flushPatients() {
        setPatients([]);
    }

    return (
        <div>
            {currentPage}
        </div>
    );
}