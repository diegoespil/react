import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {peoples} from './peoples.json';

class App extends Component{

  constructor(){
    super();
    this.state = {
      peoples
    }
  }

  render(){
    const peoples = this.state.peoples.map((people, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{people.nombre}</td>
                    <td>{people.apellido}</td>
                    <td>{people.edad}</td>
                  </tr> 
                </tbody>  
              </table>
            </div>
          </div>
        </div>
        
      )
    });
    return (
      <div className="App">
          <Navigation tittle="Peoples" cant={this.state.peoples.length}/>
          <div className="container">
            <div className="row ">
              {peoples}
            </div>

          </div>
          
          <img src={logo} className="App-logo" alt="logo" />
          
      </div>
    )
  }  
}

export default App;
