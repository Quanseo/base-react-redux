// class component
// function component

import React, { useState } from "react";
import AddUserInfo from "./AddUserinfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: 1, name: "Dan Cong Nghe", age: "16" },
//             { id: 2, name: "Quan", age: "24" },
//             { id: 3, name: "Khang", age: "28" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         // const listUserClone = [...this.state.listUser];


//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUserClone
//         })
//     }
//     //JSX
//     render() {
//         // DRY: Don't repeat yourself


//         return (
//             <>

//                 <br />
//                 <div className="â">
//                     <AddUserInfo
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>
//                     <DisplayInfo
//                         listUser={this.state.listUser}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [
            { id: 1, name: "Dan Cong Nghe", age: "16" },
            { id: 2, name: "Quan", age: "24" },
            { id: 3, name: "Khang", age: "28" },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])
        // this.setState({
        //     listUser: [userObj, ...this.state.listUser]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone);
        // this.setState({
        //     listUser: listUserClone
        // })
    }
    return (
        <>
            <br />
            <div className="â">
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <DisplayInfo
                    listUser={listUser}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">
            </div>
        </>
    )
}



export default MyComponent;