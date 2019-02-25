import React, { Component } from 'react';
import List from "../components/List/List"
import Search from "../components/Search/Search";
import Chips from "../components/chips/chips";

class ReactSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: this.props.users,
            filteredUsers:[],
            query:'',
            selectedUsersArray:[],
            selectedSingleUser:''

        };
        this.filteredUsers = this.filteredUsers.bind(this);
        this.getQuery = this.getQuery.bind(this);
        this.setSelectedUsersArray = this.setSelectedUsersArray.bind(this);
        this.setSelectedSingleUser = this.setSelectedSingleUser.bind(this);
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
    setSelectedUsersArray(selectedUsers){
        this.setState({
            selectedUsersArray: selectedUsers
        })
    }
    setSelectedSingleUser(selectedUser){
        this.setState({
            selectedSingleUser: selectedUser
        })
    }

    deletingChip(user){
        if(this.props.type === 'multi'){
        const {selectedUsersArray} = this.state;
        let index = selectedUsersArray.indexOf(user);
        selectedUsersArray.splice(index,1);
        this.setState({
            selectedUsersArray: selectedUsersArray
        });
        }
        if(this.props.type === 'single'){
            this.setState({
                selectedSingleUser:''
            })
        }
    }
    render() {
        return (


                    <div className='container'>

                        <div className="textArea">
                            <Chips selectedUsersArray={this.state.selectedUsersArray} selectedSingleUser={this.state.selectedSingleUser}  deletingChip={this.deletingChip} type={this.props.type}/>
                            <Search users={this.state.users} filteredUsers={this.filteredUsers} query={this.getQuery} selectedUsers={this.state.selectedUsers}/>
                        </div>
                        <List
                            users={this.state.users}
                            selectedSingleUser = {this.state.selectedSingleUser}
                            selectedUsersArray = {this.state.selectedUsersArray}
                            setSelectedUsersArray={this.setSelectedUsersArray}
                            setSelectedSingleUser={this.setSelectedSingleUser}
                            filteredUsers={this.state.filteredUsers}
                            query={this.state.query}
                            type={this.props.type}/>
                    </div>


        );
    }
}

export default ReactSelect;
