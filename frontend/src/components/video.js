import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

import { getVideo } from "../requests/videos";

import ReactPlayer from "react-player";
import Modal from "./modal";

import edit from "../svg/edit.svg";

export default function Video() {
    const location = useLocation();

    // State
    const [video, setVideo] = useState(undefined);
    const [toggleEdit, setToggleEdit] = useState(false);

    // Ref div element that holds the iframe
    const videoRef = useRef(null);

    async function fetch() {
        const uuid = location.pathname.split("/").pop();

        try {
            const res = await getVideo(uuid);
            setVideo(res);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (location.state) setVideo(location.state.video);
        else fetch();
    }, []);

    return (
        <>
            {video && (
                <div className="my-10 grid grid-cols-2 gap-6">
                    <div className="space-y-5">
                        <div
                            className="overflow-hidden rounded-2xl shadow-md bg-light-dark"
                            ref={videoRef}
                        >
                            <ReactPlayer
                                url={video.url}
                                controls={true}
                                width="100%"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="w-36 bg-main shadow-md rounded-full px-4 py-2">
                                <p className="text-2xl text-dark">
                                    {video.slug}
                                </p>
                            </div>

                            <button
                                onClick={() => setToggleEdit(true)}
                                className="focus:outline-none rounded-full h-10 w-10 border-1.5 border-light-dark hover:border-2 hover:border-main flex justify-center items-center"
                            >
                                <img
                                    src={edit}
                                    alt="edit"
                                    className="filter-icon"
                                />
                            </button>
                        </div>
                    </div>
                    <div
                        className="text-left space-y-5 overflow-auto"
                        style={{
                            maxHeight: videoRef.current
                                ? videoRef.current.height
                                : "20rem",
                        }}
                    >
                        <h3 className="text-dark text-6xl">{video.title}</h3>
                        <p className="text-light-dark text-2xl">
                            {video.description}
                        </p>
                    </div>
                </div>
            )}
            <Link
                to="/"
                className="absolute w-32 bottom-0 left-0 right-0 mx-auto my-5 text-center text-light-dark border-1.5 border-light-dark rounded-full px-6 py-2 hover:border-2 hover:font-medium hover:border-main hover:text-main hover:scale-110 duration-300 transform"
            >
                Go Back
            </Link>
            {toggleEdit && (
                <Modal
                    close={() => setToggleEdit(false)}
                    video={video}
                    setVideo={setVideo}
                />
            )}
        </>
    );
}
