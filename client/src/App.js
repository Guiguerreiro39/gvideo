import React, {useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BaseRouter from "./routes";

// Brand Logo
import logo from "./svg/logo.svg";
import circles from "./svg/circles.svg";
import plus from "./svg/plus.svg";

// Components
import Modal from "./components/modal";

function App() {
    const [toggleAdd, setToggleAdd] = useState(false);

    return (
        <div className="text-center mx-8 lg:mx-20 md:mx-14 my-5">
            <Router>
                <nav className="h-20 flex justify-between items-center border-b-1.5 border-light-dark">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-5 md:space-x-10">
                            <Link to="/">
                                <img src={logo} alt="logo" className="h-auto w-28 sm:w-32" />
                            </Link>
                            <input
                                type="text"
                                className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 lg:w-72 sm:w-52 w-40 rounded-full p-4 hidden sm:flex items-center justify-between"
                                placeholder="Search"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <h3 className="text-light-dark text-xl hidden md:block">
                                Add Video
                            </h3>
                            <button
                                onClick={() => setToggleAdd(true)}
                                className="focus:outline-none rounded-full h-10 w-10 border-1.5 border-light-dark hover:border-2 hover:border-main flex justify-center items-center"
                            >
                                <img
                                    src={plus}
                                    alt="add"
                                    className="filter-icon"
                                />
                            </button>
                        </div>
                    </div>
                </nav>
                <BaseRouter />
                {toggleAdd && <Modal close={() => setToggleAdd(false)} />}
            </Router>
            <img
                src={circles}
                alt=""
                className="absolute bottom-0 right-0 h-1/3 -z-10 opacity-50"
            />
        </div>
    );
}

export default App;
