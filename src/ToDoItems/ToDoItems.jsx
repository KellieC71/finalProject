import React from "react";

class ToDoItems extends React.Component {
  createTasks(item) {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
        <button className="words">Taken Today</button>
      </li>
    );
  }
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks, this);

    return <ul className="theList">{listItems}</ul>;
  }
}

export { ToDoItems };
