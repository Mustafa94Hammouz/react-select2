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

    render() {
        return (
                <Paper className='chipsContainer'>
                    {this.props.selectedUsers.map((user, index) => {
                        return (
                            <Chip
                                className='chip'
                                key={index}
                                icon={<FaceIcon/>}
                                label={user}
                                onDelete={()=>this.handleDelete(user)}
                                color={"secondary"}

                            />
                        );
                    })}
                </Paper>
        );
    }
}

export default Chips;
