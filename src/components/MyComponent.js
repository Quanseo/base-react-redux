// class component
// function component

import React from "react";
import AddUserInfo from "./AddUserinfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dan Cong Nghe", age: "16" },
            { id: 2, name: "Quan", age: "24" },
            { id: 3, name: "Khang", age: "28" },
        ]
    }

    handleAddNewUser = (userObj) => {
        // const listUserClone = [...this.state.listUser];


        this.setState({
            listUser: [...this.state.listUser, userObj]
        })
    }
    //JSX
    render() {
        // DRY: Don't repeat yourself
        return (
            <div>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfo
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}



export default MyComponent;