// class component
// function component

import React from "react";

class MyComponent extends React.Component {
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
        console.log(event.pageX)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form>
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}



export default MyComponent;