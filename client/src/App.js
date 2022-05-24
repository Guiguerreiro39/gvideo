import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

// svg
import circles from "./svg/circles.svg";

// Components
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="text-center mx-8 lg:mx-20 md:mx-14 my-5">
            <Router>
                <Navbar />
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
