import React from "react";
import { connect } from "react-redux";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./design/reset.css"
import "./design/app.scss"

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClickIncrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButtonClickDecrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <div>
        <a onClick={this.handleButtonClickIncrement} id='incrementor'></a>
        <a onClick={this.handleButtonClickDecrement} id ="decrementor"></a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
