import { useState } from 'react'
import PatientsView from './components/PatientsView';
import './App.css';
//import './styles/style.scss'
import './styles/main.scss'

function App() {
  const [page, setPage] = useState('patientsView')

  let currentPage = <div></div>
  switch (page) {
    case 'patientsView':
      currentPage = <PatientsView
        setPage={setPage}
      />
      break;

    default:
      currentPage = <PatientsView
        setPage={setPage}
      />
      break;
  }


  return (
    <div className="App">
      {currentPage}
    </div>
  );
}

export default App;
