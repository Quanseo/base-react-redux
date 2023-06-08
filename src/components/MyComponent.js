// class component
// function component

import React from "react";
import UserInfo from "./Userinfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dan Cong Nghe", age: "32" },
            { id: 2, name: "Quan", age: "26" },
            { id: 3, name: "Khang", age: "24" },
        ]
    }
    //JSX
    render() {
        // DRY: Don't repeat yourself
        return (
            <div>
                <UserInfo />
                <br></br>
                <DisplayInfo
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}



export default MyComponent;