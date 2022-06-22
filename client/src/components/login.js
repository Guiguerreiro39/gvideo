import React, {useEffect} from "react";
import { connect } from 'react-redux'
import * as actions from "../store/actions/auth"

import circles from "../svg/circles.svg";
import closeIcon from "../svg/close.svg";

function Login({ close, onLogin, error }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    async function submit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        await onLogin(formData.get('username'), formData.get('password'))

        close()
    }

    return (
        <div>
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="absolute text-center m-auto inset-0 w-3/4 md:w-2/3 2xl:h-4/5 h-5/6 z-20 bg-white shadown-md rounded-lg p-6 md:p-8"
            >
                <div className="border-b-1.5 border-light-dark pb-3 mb-3 lg:pb-5 lg:mb-5 flex justify-between">
                    <h3 className="text-3xl lg:text-4xl">Login</h3>
                    <button onClick={() => close()}className="focus:outline-none rounded-full h-10 w-10 border-1.5 border-light-dark hover:border-2 hover:border-main flex justify-center items-center">
                        <img
                            src={closeIcon}
                            alt="edit"
                            className="filter-icon"
                        />
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center md:space-x-4">
                        <p className="text-lg text-left w-32 truncate hidden md:block">Title</p>
                        <input
                            type="text"
                            name="username"
                            maxLength={40}
                            placeholder="Your username..."
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center md:space-x-4">
                        <p className="text-lg text-left w-32 truncate hidden md:block">Title</p>
                        <input
                            type="password"
                            name="password"
                            maxLength={40}
                            placeholder="Your password..."
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <button className="focus: outline-none absolute w-32 bottom-5 left-0 right-0 mx-auto my-5 text-center text-light-dark border-1.5 border-light-dark rounded-full px-6 py-2 hover:border-2 hover:font-medium hover:border-main hover:text-main hover:scale-110 duration-300 transform">
                        Login
                    </button>
                    <img
                        src={circles}
                        alt=""
                        className="absolute bottom-0 right-0 h-1/3 -z-10 opacity-50"
                    />
                </div>
            </form>
            <button
                onClick={close}
                tabIndex="-1"
                className="fixed inset-0 h-full w-full cursor-default bg-transparent z-10 focus:outline-none bg-black opacity-50"
            ></button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(actions.login(username, password))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)