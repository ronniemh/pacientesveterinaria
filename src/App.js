import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;