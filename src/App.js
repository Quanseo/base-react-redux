import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';

class App extends React.Component {

  state = {
    name: 'Khang',
    address: 'Dan Cong Nghe',
    age: 32
  };


  handleClick(event) {
    console.log(">>> Click me my button");

    //merge State => react class
    this.setState({
      name: 'Quan',
      age: Math.floor((Math.random() * 100) + 1)
    })
    // this.setState({
    //   age: Math.floor((Math.random() * 100) + 1)
    // })
  }

  handleOnMoverOver(event) {
    // console.log(event.pageX)
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm {this.state.age}
        <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Quan nè
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }

export default App;