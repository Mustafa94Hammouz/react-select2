import React, { Component } from 'react';
import './App.css';
import ReactSelect from "./react-select2/react-select2";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: ['Mustafa', 'Wajid','Hamzah', 'Zaareer', 'Ahmad', 'Rayyan', 'Imad', 'Georg', 'Alaska'],
        }
    }

  render() {
    return (
      <div className="App-header">

            <div className='single'>
                <h1>Single</h1>
                <ReactSelect
                    type='single'
                    users={this.state.users}
                />
            </div>
                <div className='multi'>
                    <h1>Multi</h1>
                    <ReactSelect
                    type='multi'
                    users={this.state.users}
                />
            </div>


      </div>
    );
  }
}

export default App;
