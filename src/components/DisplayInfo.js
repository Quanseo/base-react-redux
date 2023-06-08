import React from "react";

class DisplayInfo extends React.Component {
    render() {
        //destructoring array/object
        const { listUser } = this.props; //object
        console.log(listUser)
        // const listUser = this.props.listUser;
        //props => viet tat properties
        return (
            <div>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
                {/* {<div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name's {name}</div>
                <div>My age's {age}</div>} */}
            </div>
        )
    }
}

export default DisplayInfo;