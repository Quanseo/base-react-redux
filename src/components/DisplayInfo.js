import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {
    constructor(props) {
        console.log(">>>caall me : 0")
        super(props);
        //babel compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> call me')
        setTimeout(() => {
            document.title = 'Quan & Dan Cong Nghe'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me did update', this.props, prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert('You got 5 coin')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log(">>> call me ")
        //destructoring array/object
        const { listUser } = this.props; //object
        // console.log(listUser)
        // const listUser = this.props.listUser;
        //props => viet tat properties
        // console.table(listUser)

        //template + logic js
        return (
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user, index) => {
                            return (
                                <>
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>

                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo;