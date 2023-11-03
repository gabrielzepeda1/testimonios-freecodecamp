// import logo from './logo.svg';
import './App.css';
import Testimonio  from './componentes/Testimonio.js'
import {Shawn, Sarah, Emma } from './js/testimonio-object.jsx'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div>
      <Testimonio
        nombre={Shawn.nombre}
        pais={Shawn.pais}
        imagen={Shawn.imagen}
        alt={Shawn.alt}
        cargo={Shawn.cargo}
        empresa={Shawn.empresa}
        testimonio={Shawn.testimonio}
      />
      <Testimonio
        nombre={Sarah.nombre}
        pais={Sarah.pais}
        imagen={Sarah.imagen}
        alt={Sarah.alt}
        cargo={Sarah.cargo}
        empresa={Sarah.empresa}
        testimonio={Sarah.testimonio}
      />
      <Testimonio
        nombre={Emma.nombre}
        pais={Emma.pais}
        imagen={Emma.imagen}
        alt={Emma.alt}
        cargo={Emma.cargo}
        empresa={Emma.empresa}
        testimonio={Emma.testimonio}
      />
    </div>
  );
}

export default App;
