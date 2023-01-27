import React from 'react';
import './App.css';
import { Store } from './containers/StoreClass';

export class AppClass extends React.Component {
    render(){
        return (
            <div className="App">
              <Store products={this.props.products}/>
            </div>
          );
    }

}