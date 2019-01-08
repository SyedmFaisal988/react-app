import React, { Component } from 'react';
import './App.css';

class ListItems extends Component{
  render() {
    const {name} = this.props;
    return(
      <ul> 
        { name.map( (n, index)=> 
        <li key={index}> {n} </li> ) }
      </ul>
    );
  }
}

class App extends Component{
  render() {
  const names = ['Faisal', 'Talal', 'Asad', 'Daniyal', 'Ali'];
  const names1 = ['Oranges', 'Apples', 'Mangoes'];
    return(
      <div>
        <ListItems name={names}/>
        <ListItems name={names1}/>  
      </div>
    );
  }
}

export default App;
