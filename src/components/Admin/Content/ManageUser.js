import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {

    const LIMIT_USER = 6;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUsers, setListUsers] = useState([])
    const [dataDelete, setDataDelete] = useState({});
    const [dataView, setDataView] = useState({});

    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }



    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const handleBtnViewUser = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }



    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-danger" onClick={() => setShowModalCreateUser(true)}><FcPlus /> Add New Users</button>
                </div>
                <div className="table-user-container">
                    {/* <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} handleBtnViewUser={handleBtnViewUser} handleClickBtnDelete={handleClickBtnDelete} /> */}
                    <TableUserPaginate listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} handleBtnViewUser={handleBtnViewUser} handleClickBtnDelete={handleClickBtnDelete} fetchListUsersWithPaginate={fetchListUsersWithPaginate} pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUsers={fetchListUsers} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} fetchListUsers={fetchListUsers} resetUpdateData={resetUpdateData} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} fetchListUsers={fetchListUsers} dataView={dataView} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataDelete={dataDelete} fetchListUsers={fetchListUsers} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

        </div>
    )
}

export default ManageUser;