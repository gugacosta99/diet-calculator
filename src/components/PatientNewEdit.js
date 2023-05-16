import { useState } from "react"

export default function PatientNewEdit(props) {
    const [name, setName] = useState(props.patient.name);


    return (
        <div>
            <h4>{props.title} Paciente</h4>
            <form>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <input type="button" value="Salvar" onClick={() => props.save({name: name})}/>
            </form>
        </div>
    )
}