
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
      <div className="Titulo">  
       
        Menú principal
        </div>
      
       <div> 
      {nombreTarjetas.map((nombres, i) => {
        return(
          <div className="Cuadros">
            <div>   "" </div>
            <h2>{nombres}</h2>
            <img src={imagenes[i]}></img>
            <button>Entar</button>
          </div>
        )
      })}
        </div>
        <footer className="footers"> <p> Desarollado por soluciones en epidemeologia y salud ocupacional PC </p></footer>
    </div>
   
  );
  
}

export default App;
