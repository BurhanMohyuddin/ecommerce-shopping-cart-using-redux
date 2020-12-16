import React, {Component} from 'react';
import Products from './Components/Products';
import  Filters from './Components/Filters';
import Basket from './Components/Basket';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  

  componentDidMount(){
    
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
  }
  
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <h1>PakExpress</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filters />
            <hr/>
            <Products />
          </div>
          <div className="col-md-4">
            <Basket />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
