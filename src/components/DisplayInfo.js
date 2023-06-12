import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

const DisplayInfo = (props) => {
    const { listUser } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState();
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log(">>> call me render")

    useEffect(
        () => {
            if (listUser.length === 0) {
                alert('Dont kill me')
            }
            console.log(">>> call me effect")
        }, [listUser]
    );

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