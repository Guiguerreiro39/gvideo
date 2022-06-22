import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

import plus from "../svg/plus.svg";
import logo from "../svg/logo.svg";

import Modal from "./modal";
import Login from "./login";

function Navbar({ user, onLogout }) {
    const navigate = useNavigate();

    // State
    const [toggleAdd, setToggleAdd] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);

    console.log(user)

    return (
        <nav className="h-20 flex justify-between items-center border-b-1.5 border-light-dark">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-5 md:space-x-10">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-auto w-28 sm:w-32"
                        />
                    </Link>
                    <input
                        type="text"
                        className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 lg:w-72 sm:w-52 w-40 rounded-full p-4 hidden sm:flex items-center justify-between"
                        placeholder="Search"
                        onKeyUp={(e) => {
                            if (e.target.value.length === 0) navigate("/");
                            else navigate(`/?search=${e.target.value}`);
                        }}
                    />
                </div>
                <div className="space-x-4 flex items-center">
                    <div className="flex items-center space-x-2">
                        <h3 className="text-light-dark text-xl hidden md:block">
                            Add Video
                        </h3>
                        <button
                            onClick={() => setToggleAdd(true)}
                            className="focus:outline-none rounded-full h-10 w-10 border-1.5 border-light-dark hover:border-2 hover:border-main flex justify-center items-center"
                        >
                            <img src={plus} alt="add" className="filter-icon" />
                        </button>
                    </div>
                    {user && (
                        <p>
                            Hello {user.fullName}
                        </p>
                    )}
                    <button
                        onClick={async () => {
                            if (!user) setToggleLogin(true);
                            else await onLogout();
                        }}
                        className="focus:outline-none rounded h-10 w-20 border-1.5 border-light-dark hover:border-2 hover:border-main text-light-dark hover:text-main flex justify-center items-center"
                    >
                        {user ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
            {toggleAdd && <Modal close={() => setToggleAdd(false)} />}
            {toggleLogin && <Login close={() => setToggleLogin(false)} />}
        </nav>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(actions.logout());
        },
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
