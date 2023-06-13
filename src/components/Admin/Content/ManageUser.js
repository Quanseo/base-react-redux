import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div>
                    <button>Add New Users</button>
                </div>
                <div>
                    Table Users

                </div>
                <ModalCreateUser />
            </div>

        </div>
    )
}

export default ManageUser;