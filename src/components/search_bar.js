import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// };

// class based component
class SearchBar extends Component {
  // when new instance is called, constructor function runs
  constructor(props) {
    // super - component itself has a constructor function, we can call the parent method on the class by using 'super'
    super(props);

    // when the user updates the input, you want to record/update 'term'
    this.state = {term: ''};
    // only inside the constructor function, is where you would manipulate the state
    // only class base components have state, functional components do not
  }

  // how to define a class --> render() {}
  // every class needs a render function/method
  render() {
    // create a new input element, pass in the value into onInputChange
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={ event => this.setState({ term: event.target.value })} />
      </div>
      // value = {this.state.term} -- turn it into a control component -- has its value based on state
      // the input changes, tells the state new value, the value of the input is set to this.state.term
      // when the user types something, it triggers the event, then sets it as the new value -- the value of the input is equal to the state
    );
  }

  // event handler should run everytime an event happens -- onChange=
  // whenever input changes, run this function
    // the event object describes the event that occurred
    // setState to change the state outside of the constructor function
}
export default SearchBar;

// state - plain JS object to record/react to user events
// each class base component has its own state object, each instance of the component has its own state property
// when component state is changed, the component rerenders, along with its children components
// 1. initialize state in class
