import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllVideos } from "../requests/videos";

export default function ListVideos() {
    const [videos, setVideos] = useState([]);

    async function fetch() {
        try {
            const res = await getAllVideos();
            setVideos(res);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            <div className="my-10 grid grid-cols-1 gap-y-6 lg:grid-cols-3 md:gap-6 md:grid-cols-2">
                {videos.map((v) => (
                    <Link
                        className="h-64 bg-cover bg-center overflow-hidden rounded-2xl shadow-md flex items-end bg-light-dark"
                        style={{ backgroundImage: `url(${v.thumbnail})` }}
                        to={`/videos/${v._id}`}
                        state={{ video: v }}
                        key={v._id}
                    >
                        <div className="bg-fade-dark h-24 py-4 px-8 w-full backdrop-blur-xs flex flex-col items-start font-light">
                            <h3 className="text-white text-2xl">{v.title}</h3>
                            <p className="text-white text-opacity-80 font-light truncate max-w-full">
                                {v.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            {/* <button
                to="/"
                className="focus:outline-none absolute w-32 bottom-0 left-0 right-0 mx-auto my-5 text-center text-light-dark border-1.5 border-light-dark rounded-full px-6 py-2 hover:border-main hover:text-main"
            >
                See more
            </button> */}
        </>
    );
}
