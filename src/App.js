
import './App.css';
import trabajadores from './imagenes/trabajadores.PNG'; 
import ausentismo from './imagenes/ausentismo.PNG'; 
import accidentalidad from './imagenes/accidentalidad.PNG'; 
import enfermedadLaboral from './imagenes/enfermedadLaboral.PNG'; 
import vacunacion from './imagenes/vacunacion.PNG';
import administrarSedes from './imagenes/administrarSedes.PNG'; 


function App() {
  let nombreTarjetas= ["Trabajadores", "Ausentismo","Accidentalidad", "Enfermedad laboral","Vacunacion","Administrar redes"]
  let imagenes=[trabajadores, ausentismo, accidentalidad, enfermedadLaboral, vacunacion, administrarSedes ]
  return (
    <div className="App">
      <div className="Titulo">  Menu principal</div>
      <div className="Cuadros"></div>
      {nombreTarjetas.map((nombres, i) => {
        return(
          <div>
          <h2>{nombres}</h2>
          <img src={imagenes[i]}></img>
          <button>Entar</button>
          </div>
        )
      })}
        
    </div>
  );
}

export default App;
