import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import QuienSoy from "./Components/QuienSoy/QuienSoy";
import HabsConocimiento from "./Components/HabsConocimiento/HabsConocimiento";
import ProyectosContainer from "./Components/ProyectosContainer/ProyectosContainer";
import Contact from './Components/contact/Contact';
function App() {
  return (
      <div >
        <NavBar/>
        <QuienSoy/>
        <HabsConocimiento/>
        <ProyectosContainer/>
        <Contact/>
      </div>
  );
}

export default App;
