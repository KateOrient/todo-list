import React, {Component} from 'react';
import '../css/ToDoItem.css';

class ToDoItem extends Component {
    render() {
        return (
            <div className="todo-item">
                <div className="todo-text">{this.props.text}</div>
                <input
                    type="button"
                    className="edit-button"
                    value="Edit"
                    onClick={this.props.openEditForm}
                />
                <input
                    type="button"
                    className="delete-button"
                    value="Delete"
                    onClick={() => {
                        this.props.delToDoItem(this.props.id)
                    }}
                />
            </div>
        );
    }
}

export default ToDoItem;
