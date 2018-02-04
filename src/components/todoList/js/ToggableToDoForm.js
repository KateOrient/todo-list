import React, {Component} from 'react';
import ToDoForm from './ToDoForm';
import PropTypes from 'prop-types';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleOnAddBtnClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    toDoFormClose = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        if (this.state.isOpen) {
            return (
                <ToDoForm
                    addToDoItem={this.props.addToDoItem}
                    toDoFormClose={this.toDoFormClose}
                />
            );
        }
        else {
            return (
                <input
                    type="button"
                    className="add-button"
                    onClick={this.handleOnAddBtnClick}
                    value="Add"
                />
            );
        }
    }
}

ToDoForm.propTypes = {
    addToDoItem: PropTypes.func.isRequired
};


export default ToDoList;
