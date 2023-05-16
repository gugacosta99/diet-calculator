import './App.css';
import PatientList from './components/PatientList';
import { useState } from 'react'

function App() {
  const [patients, setPatients] = useState([]);

  function addPatient(newPatient){
    setPatients([
      ...patients,
      newPatient
    ])
  }


  return (
    <div className="App">
      <PatientList 
        patients = {patients}
        addPatient = {addPatient}
      />
    </div>
  );
}

export default App;
