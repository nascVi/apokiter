//This is the root component
import {render} from 'react-dom';
import React, {Component} from 'react';

class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> The Apokiter App! </h1>
    </div>;
  }
}
render(<PokeApp/>,document.getElementById('app'))
