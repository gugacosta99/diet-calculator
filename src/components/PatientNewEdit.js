import { useState } from "react"

export default function PatientNewEdit(props) {
    const [name, setName] = useState(props.patient.name);
    const [email, setEmail] = useState(props.patient.email);
    const [phone, setPhone] = useState(props.patient.phone);

    function savePatient(patient) {
        props.save({
            name: name,
            email: email,
            phone: phone
        })

        props.setPage('patientList')
    }

    return (
        <div>
            <h4>{props.title} Paciente</h4>
            <form>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label> 
                <br/>
                <label>
                    E-mail:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label> 
                <br/>
                <label>
                    Telefone:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </label>
                <input type="button" value="Salvar" onClick={savePatient}/>  
            </form>
            <button onClick={() => props.setPage('patientList')}>Cancelar</button>
        </div>
    )
}