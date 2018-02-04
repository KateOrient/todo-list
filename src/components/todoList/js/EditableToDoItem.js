import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

class EditableToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            editFormOpen: false
        };
    }

    openEditForm = () => {
        this.setState({
            editFormOpen: !this.state.editFormOpen
        });
    };

    toDoFormClose = () => {
        this.setState({
            editFormOpen: !this.state.editFormOpen
        });
    };

    saveToDoItem = (newText) => {
        this.setState({
            text: newText
        });
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <ToDoForm
                    id={this.props.id}
                    text={this.state.text}
                    addToDoItem={this.saveToDoItem}
                    toDoFormClose={this.toDoFormClose}
                />
            );
        }
        else {
            return (
                <ToDoItem
                    delToDoItem={this.props.delToDoItem}
                    openEditForm={this.openEditForm}
                    id={this.props.id}
                    text={this.state.text}
                />
            );
        }
    }
}


export default EditableToDoItem;
