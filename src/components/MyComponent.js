// class component
// function component

import React from "react";
import UserInfo from "./Userinfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    //JSX
    render() {
        const myInfo = ['a', 'b', 'c']
        return (
            <div>
                <UserInfo />
                <br></br>
                <DisplayInfo name="Dan Cong Nghe" age="32" />
                <hr />
                <DisplayInfo name="Quân" age={26} myInfo={myInfo} />
            </div>
        );
    }
}



export default MyComponent;