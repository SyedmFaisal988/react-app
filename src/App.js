import React, { Component } from 'react';
import './App.css';
import propTypes from 'prop-types'

function DisplayNames() {  //functional Component
  const names1 = ['Oranges', 'Apples', 'Mangoes'];
  return (
    <ul>
      {names1.map((n, index) =>
        <li key={index}> {n} </li>)}
    </ul>
  )
}
class ListItems extends Component { //class component

  static propTypes = {
    guruName: propTypes.oneOfType([propTypes.string, propTypes.array])
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.guruName.map((n, index) =>
            <li key={index}> {n} </li>)}
        </ul>
        <button onClick={this.props.changeParentState}>Press to increase</button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    names: ['Faisal', 'Talal', 'Daniyal', 'Ali'],
    address: 'A-90 Block Q'
  }

  changeTheState = () => {
    this.setState((ps) => {
      return ({
        names: ['Keema', 'Parahta']
      })
    }
    )
  }

  render() {
    const guruName = ['faisal', ' And Faisals']
    return (
      <div>
        <h1>My React app</h1>
        <ListItems guruName={guruName} names={this.state.names} changeParentState={this.changeTheState} />
        <DisplayNames />
      </div>
    );
  }
}

export default App;
