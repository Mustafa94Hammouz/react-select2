import React, { Component } from 'react';
import './List.css';
class List extends Component {
    constructor(props){
        super(props);
        this.selectUser = this.selectUser.bind(this);
    }

    checkIfSelected(user) {
        if(this.props.type === 'multi') {
            return this.props.selectedUsersArray.some(item => user === item);
        }
        if(this.props.type === 'single') {
            return this.props.selectedSingleUser === user;
        }
    }

    selectUser(user){
      const {setSelectedSingleUser, setSelectedUsersArray, selectedUsersArray} = this.props;

        if(this.props.type === 'single'){
            if(this.checkIfSelected(user)) {
                setSelectedSingleUser(null);
            }else{
                setSelectedSingleUser(user);
            }
        }

        if(this.props.type === 'multi') {
            if (this.checkIfSelected(user)) {
                let index = selectedUsersArray.indexOf(user);
                selectedUsersArray.splice(index, 1);
                setSelectedUsersArray(selectedUsersArray);
            } else {
                setSelectedUsersArray([...selectedUsersArray,user])
            }
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
