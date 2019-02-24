import React, { Component } from 'react';
import './App.css';
import List from "./components/List/List";
import Search from "./components/Search/Search";
import Chips from "./components/chips/chips";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:['Mustafa', 'Wajid','Hamzah', 'Zaareer', 'Ahmad', 'Rayyan', 'Imad', 'Georg', 'Alaska'],
            filteredUsers:[],
            query:'',
            selectedUsers:[]
        };
        this.filteredUsers = this.filteredUsers.bind(this);
        this.getQuery = this.getQuery.bind(this);
        this.selectedUsers = this.selectedUsers.bind(this);
        this.deletingChip = this.deletingChip.bind(this);
    }

    filteredUsers(users){
        this.setState({
            filteredUsers: users
        })
    }
    getQuery(query){
        this.setState({
            query: query
        })
    }
    selectedUsers(selectedUsers){
        this.setState({
            selectedUsers: selectedUsers
        })
    }

    deletingChip(user){
        const {selectedUsers} = this.state;
        let index = this.state.selectedUsers.indexOf(user);
        selectedUsers.splice(index,1);
        this.setState({
            selectedUsers: selectedUsers
        })
    }
  render() {
    return (
      <div className="App">
        <header className='App-header'>
            <div className='container'>

                <div className="textArea">
           <Chips selectedUsers={this.state.selectedUsers} deletingChip={this.deletingChip}/>
           <Search users={this.state.users} filteredUsers={this.filteredUsers} query={this.getQuery} selectedUsers={this.state.selectedUsers}/>
                </div>
            <List users={this.state.users} selectedUsers={this.selectedUsers} filteredUsers={this.state.filteredUsers} query={this.state.query}/>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
