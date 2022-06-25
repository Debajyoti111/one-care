import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Patient from './profile/Patient';
// import card from './card/card';
import Timeline from './card/Timeline';
import form from './form/form'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path="/patient/card" element={<Timeline></Timeline>}/>
      <Route path="/patient/form" element={<form></form>}></Route>
      <Route path="/patient" element={<Patient/>}>
      </Route>   
        <Route path="/" element={<LandingPage/>}>     
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
