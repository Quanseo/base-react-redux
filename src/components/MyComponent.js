// class component
// function component

import React from "react";
import UserInfo from "./Userinfo";

class MyComponent extends React.Component {

    //JSX
    render() {
        return (
            <div>
                <UserInfo />
            </div>
        );
    }
}



export default MyComponent;