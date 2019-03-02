import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { ToDoList } from "../ToDoList";
import { ToDoItems } from "../ToDoItems";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(this.state);
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h3>Now viewing {user.firstName}'s Medication List</h3>
        <div>
          <ToDoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <ToDoItems entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
        <a href="https://www.goodrx.com/?utm_source=google&utm_medium=cpc&utm_term=good.rx&utm_campaign=GoodRx%20Brand&utm_content=Ad-Group_GoodRx&gclid=Cj0KCQiAzePjBRCRARIsAGkrSm40Rk1VwZcp6l1zRHgdfmb9Wat5JN4SKqCkIi_QgGi17eFbilYgeOcaAopREALw_wcB">
          Check for a Better Price
        </a>
        <div />
        <a href="https://www.webmd.com/interaction-checker/default.htm">
          Check for a Drug Interactions
        </a>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
