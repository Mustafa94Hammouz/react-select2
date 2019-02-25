import Paper from "@material-ui/core/Paper/Paper";
import Chip from "@material-ui/core/Chip/Chip";
import FaceIcon from '@material-ui/icons/Face';
import React, { Component } from 'react';
import './chips.css';

class Chips extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        this.props.deletingChip(e);
    }

     multi(){
            return this.props.selectedUsersArray.map((user, index) => {
                return <Chip
                    className='chip'
                    key={index}
                    icon={<FaceIcon/>}
                    label={user}
                    onDelete={() => this.handleDelete(user)}
                    color={"secondary"}

                />

        })
    }
    single() {
        return <Chip
            className='chip'
            icon={<FaceIcon/>}
            label={this.props.selectedSingleUser}
            onDelete={() => this.handleDelete(this.props.selectedSingleUser)}
            color={"secondary"}
        />
    }

    render() {

        return (
                <Paper className='chipsContainer'>
                    {this.props.type === 'single' && this.props.selectedSingleUser ? this.single() : this.multi()}
                </Paper>
        );
    }
}

export default Chips;
