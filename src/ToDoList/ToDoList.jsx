import React from 'react'


class ToDoList extends React.Component {
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.props.addItem}>
                <input 
                    placeholder="Enter Medication Name Here" 
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}/>
                <button type="submit"> Add Medication </button>
              </form>
            </div>
          </div>
        )
      }
}

export {ToDoList};