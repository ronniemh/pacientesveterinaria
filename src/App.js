import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  //Cuando la App carga

  componentDidMount(){
    const citasLS =  localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }


  //Cuando eliminamos o agregamos una nueva cita

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  

  crearNuevaCita = datos => {
    console.log(datos.error);
    //Copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar nuevo state
    this.setState({
      citas : citas
    })
  }
  
  //Elimina citas del state
  eliminarCita = id => {
    /*console.log(id);
    console.log('diste click'); */


    //Tomar una copia del state

    const citasActuales = [...this.state.citas];

    //Utilizar filter para sacar el elemento @id del arreglo

    const citas = citasActuales.filter( cita => cita.id !== id);

    //Actualizar el state
    this.setState({
      citas
    })

  }

  render() {
    return (
      <div className="container">
        <Header
          titulo='Administrador pacientes veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita = {this.crearNuevaCita}
            />
          </div>
          <div className="mt5 col-md10 mx-auto">            
            <ListaCitas
            citas = {this.state.citas}
            eliminarCita = {this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;