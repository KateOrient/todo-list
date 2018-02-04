import React, {Component} from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || ''
        }
        this.handleAddToDoItem = this.handleAddToDoItem.bind(this);
    }

    handleAddToDoItem() {
        this.props.addToDoItem(this.state.text);
        this.props.toDoFormClose();
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="todo-form-input"
                    value={this.state.text}
                    onChange={this.handleInputChange}
                />
                <input
                    type="button"
                    className="save-button"
                    value="Save"
                    onClick={this.handleAddToDoItem}
                />
            </div>
        );
    }
}

export default ToDoForm;
