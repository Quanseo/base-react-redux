import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

// class DisplayInfo extends React.Component {

//     render() {
//         console.log(">>> call me ")
//         //destructoring array/object
//         const { listUser } = this.props; //object
//         // console.log(listUser)
//         // const listUser = this.props.listUser;
//         //props => viet tat properties
//         // console.table(listUser)

//         //template + logic js
//         return (
//             <div className="display-info-container">

//                 {true &&
//                     <>
//                         {listUser.map((user, index) => {
//                             return (
//                                 <>
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>

//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         <hr />
//                                     </div>
//                                 </>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState();
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show List user"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUser.map((user, index) => {
                        return (
                            <>
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>

                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    <hr />
                                </div>
                            </>
                        )
                    })}
                </>
            }
        </div>
    )
}


export default DisplayInfo;