// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavLink,Link } from 'react-router-dom';
// import { useFirebase } from '../context/firebase';  // Adjust the relative pat


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useFirebase } from '../context/firebase';

const Nav = () => {
    const { logout } = useFirebase();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = async () => {
        await logout();

        navigate('/login'); // Redirect to login page after logout

        // if()
    };
    const handleCompleteProfile = () => {
        navigate('/github');
    };

    return (
        <div className="nav pt-5 ">
        <div className="container-fluid">
            <div className="d-flex justify-content-center mr-5  pr-4">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link"  exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/book/list" className="nav-link">
                            Add List
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-danger nav-link' onClick={handleLogout}> {/* Use handleLogout */}
                            Logout
                        </button>
                    </li>
                </ul>
                <div className="app d-flex justify-content-between m-2" >
                <div className="pg">
                
                <p>
                    {/* your profile is incomplete <Link to="/github">complete your profile</Link> */}
                    your profile is incomplete <Link to="/github">complete your profile</Link>
                </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Nav;
