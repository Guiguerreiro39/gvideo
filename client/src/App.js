import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BaseRouter from "./routes";

// Brand Logo
import logo from "./svg/logo.svg";
import circles from "./svg/circles.svg";

function App() {
    return (
        <div className="text-center mx-20 my-5">
            <Router>
                <nav className="h-20 flex justify-between items-center border-b-1.5 border-light-dark">
                    <div className="flex items-center justify-start space-x-10">
                        <Link to="/">
                            <img src={logo} alt="logo" className="h-16" />
                        </Link>
                        <input
                            type="text"
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-72 rounded-full p-4 flex items-center justify-between"
                            placeholder="Search"
                        />
                    </div>
                </nav>
                <BaseRouter />
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
