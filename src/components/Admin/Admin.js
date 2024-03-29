import SideBar from './Sidebar';
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Language from '../Header/Language';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className='admin-header'>
                    <span onClick={() => setCollapsed(!collapsed)} >
                        <FaBars className='leftside' />
                    </span>
                    <div className='rightside'>
                        <Language />
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                        </NavDropdown>


                    </div>

                </div>

                <div className='admin-main'>
                    <PerfectScrollbar>
                        <Outlet />
                    </PerfectScrollbar>
                </div>

            </div>

            {/* Same as
            <ToastContainer /> */}
        </div>
    )
}
export default Admin;