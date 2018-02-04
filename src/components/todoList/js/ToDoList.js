import React, {Component} from 'react';
import EditableToDoList from './EditableToDoList';
import ToggableToDoForm from './ToggableToDoForm';

class ToDoList extends Component {
    state = {
        todoItems: [
            {
                id: "1",
                text: "купить молока"
            },
            {
                id: "2",
                text: "продать сыр"
            }
        ]
    };

    static genId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    newToDoItem = (itemText) => {
        return {
            id: ToDoList.genId(),
            text: itemText
        };
    };

    addToDoItem = (itemText) => {
        this.setState({
            todoItems: this.state.todoItems.concat(this.newToDoItem(itemText))
        });
    };

    delToDoItem = (id) => {
        this.setState({
            todoItems: this.state.todoItems.filter(i => i.id !== id)
        });
    };

    render() {
        return (
            <div>
                <EditableToDoList delToDoItem={this.delToDoItem} todoItems={this.state.todoItems}/>
                <ToggableToDoForm addToDoItem={this.addToDoItem}/>
            </div>
        );
    }
}

export default ToDoList;
