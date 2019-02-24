import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            filteredUsers:[]
        };
        this.filterUsers = this.filterUsers.bind(this);
    }

    filterUsers(e){
        let filteredUsers = this.props.users;
        filteredUsers = filteredUsers.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({filteredUsers: filteredUsers},()=> {
            this.props.filteredUsers(filteredUsers);
        });
        this.props.query( e.target.value.toLowerCase());
    }

    render() {
        return (
            <input className='input' type='text' onChange={this.filterUsers} value={this.state.name} placeholder="UserName" />
               );
    }
}

export default Search;
