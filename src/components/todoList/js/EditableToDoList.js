import React, {Component} from 'react';
import EditableToDoItem from './EditableToDoItem';

class EditableToDoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoItems.map(item =>
                    <EditableToDoItem
                        delToDoItem={this.props.delToDoItem}
                        key={item.id}
                        id={item.id}
                        text={item.text}
                    />)}
            </div>
        );
    }
}

export default EditableToDoList;
