import React, { Component } from 'react';
import './List.css';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedUsers: [],
        };
        this.selectUser = this.selectUser.bind(this);
    }

    checkIfSelected(user) {
        return this.state.selectedUsers.some(item => user === item);
    }

    selectUser(user){
        const {selectedUsers} = this.state;
        if(this.checkIfSelected(user)) {
            let index = selectedUsers.indexOf(user);
            selectedUsers.splice(index,1);
            this.setState({
                selectedUsers: selectedUsers
            },()=>this.props.selectedUsers(this.state.selectedUsers));
        }else{
            this.setState({
                selectedUsers: [...selectedUsers,user]
            },()=>this.props.selectedUsers(this.state.selectedUsers));
        }
    }
    render() {
        const filtered = () => (this.props.filteredUsers.map((user, index)=>(
            <li className={this.checkIfSelected(user) ? 'selected' : ''} onClick={()=>this.selectUser(user)} value={user} key={ index }> { user } </li>
        )));

        const noResults = () => (<p id='noResults'> NO RESULTS !</p>);



        return (
            <div className='listContainer' id='style-2'>
                {this.props.query ==='' ? null  : this.props.filteredUsers.length < 1 && this.props.query !== '' ? noResults() : filtered()}

            </div>
        );
    }
}

export default List;
