import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hospital from './profile/Hospital';
// import card from './card/card';
import Timeline from './card/Timeline';
import Form from './form/form.js';
import Patientprofile from './patient_profile/patient_profile';
import PatientSearchPage from './PatientSearchPage';
import LS from "./LS"
import HLS from "./HLS"


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path="patient_history" element={<Timeline/>}/>
      </Routes>
      <Routes>
      <Route path="hospital_register" element={<HLS/>}/>
      </Routes>
      <Routes>
      <Route path="patient_add" element={<Form/>}/>
      </Routes>
      <Routes>
      <Route path="patient_profile" element={<Patientprofile/>}></Route>
      </Routes>
      <Routes>
      <Route path="patient_register" element={<LS/>}></Route>
      </Routes>
      <Routes>
        {/* hospital */}
      <Route path="hospital_profile" element={<Hospital/>}></Route>   
      </Routes>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
      <Routes>
      <Route path="patient_search" element={<PatientSearchPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
