import React, { Component} from 'react';

class App2 extends Component{
    state = {
        name: '',
        fname: ''
    }
    whenChange = (event)=>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    render(){
        return(
            <div>
                <h1>React App</h1>
                <p>Enter Text</p>
                <input type='text' name="name" value={ this.state.name}  onChange={this.whenChange }></input>
                <input type='text' name="fname" value={ this.state.fname}  onChange={this.whenChange }></input>
                <p>{this.state.name}</p>
                <p>{this.state.fname}</p>
            </div>
        )
    }
}

export default App2;